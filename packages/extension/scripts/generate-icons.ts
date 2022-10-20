import fs from "fs"
import path from "path"

import { transform } from "@svgr/core"
import fetch from "cross-fetch"
import * as dotenv from "dotenv"
import { camelCase, upperFirst } from "lodash"

dotenv.config()

const OUTPUT_FOLDER = path.join(
  __dirname,
  "../src/ui/components/Icons/generated",
)

const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN
const FIGMA_ICONS_FILE_KEY = "LHwepHSS4bouYQjbMOZJjW"
const FIGMA_ICONS_NODE_ID = decodeURIComponent("0%3A1")

const fetcher = async (url: string, raw = false) => {
  if (!FIGMA_ACCESS_TOKEN) {
    throw "process.env.FIGMA_ACCESS_TOKEN is not defined"
  }
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-Figma-Token": FIGMA_ACCESS_TOKEN,
    },
  })
  if (raw) {
    return response
  }
  const json = await response.json()
  return json
}

type Components = Record<
  string,
  {
    key: string
    name: string
    description: string
    documentationLinks: string[]
  }
>

type IconsNode = {
  document: any /** we don't care about this currently */
  components: Components
}

const getIconNodesAndNames = async () => {
  const json = await fetcher(
    `https://api.figma.com/v1/files/${FIGMA_ICONS_FILE_KEY}/nodes?ids=${encodeURIComponent(
      FIGMA_ICONS_NODE_ID,
    )}`,
  )
  const iconsNode = Object.values(json.nodes)[0] as IconsNode
  const components = iconsNode.components
  const nodesAndNames: Record<string, string> = {}
  Object.entries(components).forEach(([id, component]) => {
    nodesAndNames[id] = component.name
  })
  return nodesAndNames
}

type ImageResponse = {
  err: null | string
  images: Record<string, string>
}

const svgCodeToIconComponentCode = async (svgCode: string) => {
  return transform(svgCode, {
    icon: true,
    typescript: true,
    jsxRuntime: "automatic",
    replaceAttrValues: { "#fff": "currentColor" },
    plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
  })
}

const generateIcons = async () => {
  const lines = [
    "/** This file is auto-generated by `yarn generate:icons` */",
    "",
  ]
  const nodesAndNames = await getIconNodesAndNames()
  console.log(JSON.stringify(nodesAndNames, null, 2))
  const ids = Object.keys(nodesAndNames)
  const json: ImageResponse = await fetcher(
    `https://api.figma.com/v1/images/${FIGMA_ICONS_FILE_KEY}/?ids=${encodeURIComponent(
      ids.join(","),
    )}&format=svg`,
  )
  for (const [id, url] of Object.entries(json.images)) {
    const name = nodesAndNames[id]
    const reponse = await fetcher(url, true)
    const svgCode = await reponse.text()
    // const svgFileName = path.join(OUTPUT_FOLDER, `${name}.svg`)
    const componentCode = await svgCodeToIconComponentCode(svgCode)
    const componentName = upperFirst(camelCase(name))
    const componentFileName = path.join(OUTPUT_FOLDER, `${componentName}.tsx`)
    // fs.writeFileSync(svgFileName, svgCode, "utf8")
    fs.writeFileSync(componentFileName, componentCode, "utf8")
    lines.push(
      `export { default as ${componentName} } from "./${componentName}";`,
    )
  }
  const fileContents = lines.join("\r\n")
  const indexFileName = path.join(OUTPUT_FOLDER, `index.ts`)
  fs.writeFileSync(indexFileName, fileContents, "utf8")
}

;(async () => {
  await generateIcons()
})()

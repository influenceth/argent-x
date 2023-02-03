import { AlertButton, icons } from "@argent/ui"
import { FC } from "react"
import { useNavigate } from "react-router-dom"

import { ESCAPE_TYPE_GUARDIAN } from "../../../../shared/account/details/getEscape"
import { routes } from "../../../routes"
import { Account } from "../../accounts/Account"
import { useLiveAccountEscape } from "./useAccountEscape"

const { ArgentShieldIcon, AlertIcon } = icons

interface EscapeBannerProps {
  account: Account
}

export const getEscapeDisplayAttributes = (
  liveAccountEscape: ReturnType<typeof useLiveAccountEscape>["data"],
) => {
  if (!liveAccountEscape) {
    return {}
  }
  const { activeFromNowMs, activeFromNowPretty, type } = liveAccountEscape
  const entity = type === ESCAPE_TYPE_GUARDIAN ? "Argent Shield" : "Account Key"
  const colorScheme: "warning" | "danger" =
    type === ESCAPE_TYPE_GUARDIAN ? "warning" : "danger"
  const title =
    activeFromNowMs > 0
      ? `Removing ${entity} in ${activeFromNowPretty}`
      : "${entity} removed"
  return {
    entity,
    colorScheme,
    title,
  }
}

export const EscapeBanner: FC<EscapeBannerProps> = ({ account }) => {
  const navigate = useNavigate()
  const { data: liveAccountEscape } = useLiveAccountEscape(account)
  if (!liveAccountEscape) {
    return null
  }
  const { type } = liveAccountEscape
  const { colorScheme, title } = getEscapeDisplayAttributes(liveAccountEscape)
  const icon =
    type === ESCAPE_TYPE_GUARDIAN ? <ArgentShieldIcon /> : <AlertIcon />
  return (
    <AlertButton
      colorScheme={colorScheme}
      title={title}
      description="If this was not you, click this banner"
      size="lg"
      icon={icon}
      onClick={() => {
        navigate(routes.shieldEscapeWarning(account.address))
      }}
    />
  )
}

import { FC, SVGProps } from "react"

export const PluginIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.06179 4.15007C2.0856 4.15195 2.10836 4.16062 2.1274 4.17504C2.14643 4.18947 2.16093 4.20904 2.16919 4.23145C2.17745 4.25385 2.17912 4.27816 2.17399 4.30148C2.16887 4.32481 2.15718 4.34618 2.14029 4.36307L0.504289 6.00007C0.459147 6.04516 0.423334 6.0987 0.3989 6.15764C0.374467 6.21658 0.36189 6.27976 0.36189 6.34357C0.36189 6.40737 0.374467 6.47055 0.3989 6.52949C0.423334 6.58843 0.459147 6.64197 0.504289 6.68707L1.39579 7.57907C1.42236 7.60562 1.45458 7.62584 1.49004 7.63823C1.52551 7.65063 1.56331 7.65486 1.60064 7.65064C1.63797 7.64641 1.67386 7.63382 1.70566 7.61382C1.73745 7.59381 1.76433 7.56689 1.78429 7.53507C1.86003 7.41462 1.94909 7.30308 2.04979 7.20257C2.41446 6.83789 2.90906 6.63302 3.42479 6.63302C3.94051 6.63302 4.43512 6.83789 4.79979 7.20257C5.16446 7.56724 5.36933 8.06184 5.36933 8.57757C5.36933 9.09329 5.16446 9.58789 4.79979 9.95257C4.69914 10.0531 4.58762 10.1422 4.46729 10.2181C4.43546 10.238 4.40855 10.2649 4.38854 10.2967C4.36853 10.3285 4.35595 10.3644 4.35172 10.4017C4.34749 10.439 4.35173 10.4768 4.36412 10.5123C4.37651 10.5478 4.39674 10.58 4.42329 10.6066L5.31529 11.4986C5.40642 11.5896 5.52997 11.6408 5.65879 11.6408C5.78761 11.6408 5.91116 11.5896 6.00229 11.4986L7.63879 9.86207C7.65568 9.84518 7.67704 9.83348 7.70037 9.82836C7.72369 9.82324 7.748 9.8249 7.77041 9.83316C7.79281 9.84142 7.81239 9.85592 7.82681 9.87496C7.84123 9.89399 7.8499 9.91676 7.85179 9.94057C7.87711 10.2716 7.98713 10.5905 8.17128 10.8667C8.35543 11.1429 8.60752 11.367 8.90333 11.5177C9.19913 11.6683 9.52872 11.7404 9.8604 11.7268C10.1921 11.7133 10.5147 11.6148 10.7973 11.4406C11.0476 11.2866 11.2598 11.078 11.418 10.8304C11.5762 10.5827 11.6762 10.3025 11.7106 10.0107C11.745 9.71882 11.7129 9.42298 11.6166 9.14534C11.5204 8.8677 11.3625 8.61547 11.1548 8.40757C10.83 8.08265 10.399 7.88562 9.94079 7.85257C9.91698 7.85068 9.89422 7.84201 9.87518 7.82759C9.85615 7.81316 9.84164 7.79359 9.83339 7.77118C9.82513 7.74878 9.82346 7.72447 9.82858 7.70115C9.83371 7.67782 9.8454 7.65645 9.86229 7.63957L11.4963 6.00007C11.5414 5.95498 11.5772 5.90143 11.6017 5.84249C11.6261 5.78355 11.6387 5.72037 11.6387 5.65657C11.6387 5.59276 11.6261 5.52958 11.6017 5.47064C11.5772 5.4117 11.5414 5.35816 11.4963 5.31307L10.6048 4.42107C10.5782 4.39451 10.546 4.37429 10.5105 4.3619C10.4751 4.3495 10.4373 4.34527 10.3999 4.34949C10.3626 4.35372 10.3267 4.36631 10.2949 4.38632C10.2631 4.40632 10.2362 4.43324 10.2163 4.46507C10.1405 4.58641 10.0513 4.6988 9.95029 4.80007C9.76972 4.98063 9.55536 5.12387 9.31943 5.22159C9.08351 5.31931 8.83065 5.36961 8.57529 5.36961C8.05956 5.36961 7.56496 5.16474 7.20029 4.80007C6.83562 4.43539 6.63075 3.94079 6.63075 3.42507C6.63075 3.1697 6.68104 2.91684 6.77877 2.68092C6.87649 2.445 7.01972 2.23063 7.20029 2.05007C7.30094 1.94951 7.41245 1.86046 7.53279 1.78457C7.56461 1.7646 7.59153 1.73773 7.61154 1.70593C7.63155 1.67414 7.64413 1.63824 7.64836 1.60091C7.65259 1.56358 7.64835 1.52578 7.63596 1.49032C7.62357 1.45485 7.60334 1.42264 7.57679 1.39607L6.68729 0.503565C6.59616 0.412517 6.47261 0.361373 6.34379 0.361373C6.21497 0.361373 6.09142 0.412517 6.00029 0.503565L4.36379 2.14007C4.34693 2.15711 4.32552 2.16894 4.30211 2.17416C4.27871 2.17937 4.2543 2.17774 4.2318 2.16947C4.20929 2.16119 4.18964 2.14662 4.17519 2.12749C4.16074 2.10836 4.1521 2.08547 4.15029 2.06157C4.12497 1.73058 4.01495 1.41166 3.8308 1.13547C3.64665 0.859276 3.39456 0.635088 3.09875 0.484448C2.80294 0.333807 2.47336 0.261779 2.14168 0.275284C1.81 0.28879 1.48737 0.387374 1.20479 0.561565C0.954506 0.715713 0.742396 0.924558 0.584383 1.17242C0.426369 1.42028 0.326559 1.70072 0.292446 1.99268C0.258333 2.28463 0.290803 2.58053 0.387419 2.85814C0.484035 3.13575 0.642285 3.38787 0.850289 3.59557C1.17453 3.91975 1.60451 4.11655 2.06179 4.15007Z"
        fill="white"
      />
    </svg>
  )
}

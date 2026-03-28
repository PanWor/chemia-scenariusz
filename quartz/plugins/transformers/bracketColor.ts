import { QuartzTransformerPlugin } from "../types"

export const BracketColor: QuartzTransformerPlugin = () => {
  return {
    name: "BracketColor",
    textTransform(_ctx, src) {
      // This looks for [text] and wraps it in a span
      // Regex explanation: \[ (start bracket) ([^\]]+) (capture text) \] (end bracket)
      return src.toString().replace(/\[([^\]]+)\]/g, (match, content) => {
        return `<span class="custom-bracket">[</span><span class="custom-bracket-text">${content}</span><span class="custom-bracket">]</span>`
      })
    },
  }
}
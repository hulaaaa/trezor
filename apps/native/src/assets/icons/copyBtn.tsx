import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const CopyIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.166 2.638A2.25 2.25 0 0 0 10 1H7c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184C15.193 2.95 16 3.899 16 5.007V18.25a2.25 2.25 0 0 1-2.25 2.25H3.25A2.25 2.25 0 0 1 1 18.25V5.007c0-1.108.806-2.057 1.907-2.185a48.218 48.218 0 0 1 1.927-.184"
    />
  </Svg>
)
export default CopyIcon

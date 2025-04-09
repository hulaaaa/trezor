
import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"
const CheckIcon = (props: SvgProps) => (
  <Svg
    width={19}
    height={19}
    fill="none"
    {...props}
  >
    <Circle cx={9.5} cy={9.5} r={9.5} fill="#05854A" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m7.113 9.744 2.338 1.948 3.508-4.384"
    />
  </Svg>
)
export default CheckIcon

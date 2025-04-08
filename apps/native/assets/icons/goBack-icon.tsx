import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"
const GoBackIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={49}
    height={49}
    fill="none"
    {...props}
  >
    <Circle cx={24.5} cy={24.5} r={24.5} fill="#000" fillOpacity={0.05} />
    <Path
      fill="#000"
      fillOpacity={0.05}
      d="M26.5 31 20 24.5l6.5 6.5ZM20 24.5l6.5-6.5-6.5 6.5Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M26.5 31 20 24.5l6.5-6.5"
    />
  </Svg>
)
export default GoBackIcon

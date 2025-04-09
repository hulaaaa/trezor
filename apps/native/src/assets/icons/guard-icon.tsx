import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const GuardIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#116146"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7 10.682 2.25 2.17L13 7.789M10 1C7.736 3.074 4.72 4.212 1.598 4.17A11.195 11.195 0 0 0 1 7.787C1 13.182 4.824 17.714 10 19c5.176-1.285 9-5.817 9-11.212 0-1.264-.21-2.48-.598-3.619h-.152C15.054 4.17 12.15 2.965 10 1Z"
    />
  </Svg>
)
export default GuardIcon

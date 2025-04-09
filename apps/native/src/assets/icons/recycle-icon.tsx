import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const RecycleIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      stroke="#116146"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.017 6.768H19L15.825 3.49a8.18 8.18 0 0 0-3.693-2.2 7.99 7.99 0 0 0-4.264 0A8.18 8.18 0 0 0 4.176 3.49a8.566 8.566 0 0 0-2.13 3.81M1 17.375v-5.142m0 0h4.983m-4.983 0 3.175 3.279a8.18 8.18 0 0 0 3.692 2.2 7.99 7.99 0 0 0 4.264 0 8.18 8.18 0 0 0 3.692-2.201 8.565 8.565 0 0 0 2.13-3.81M19 1.625v5.14"
    />
  </Svg>
)
export default RecycleIcon

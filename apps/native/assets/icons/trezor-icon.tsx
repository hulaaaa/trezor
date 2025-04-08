import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const TrezorIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={46}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M27.332 10.675C27.332 4.841 22.221 0 15.998 0 9.776 0 4.664 4.843 4.664 10.675v3.413H0V38.63L15.998 46 32 38.626V14.192h-4.664l-.003-3.517Zm-16.89 0c0-2.75 2.445-4.952 5.556-4.952s5.556 2.202 5.556 4.952v3.413H10.442v-3.412Zm15.112 23.993-9.556 4.403-9.556-4.403V19.92h19.112v14.748Z"
    />
  </Svg>
)
export default TrezorIcon

import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg width={150} height={150} viewBox="0 0 192 192" fill="none" {...props}>
      <Path fill="#fff" d="M0 0h192v192H0z" />
      <Path fill="#7178FB" d="M75 0h42v192H75z" />
      <Path
        d="M75 192v-40h117v40H75zM0 113V73h117v40H0zM0 40V0h117v40H0z"
        fill="#7178FB"
      />
    </Svg>
  );
}

export default SvgComponent;

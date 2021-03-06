import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function LogoSvg() {
  return (
    <Svg width={36} height={40} viewBox="0 0 36 40" fill="none">
      <G clipPath="url(#prefix__clip0)" fill="#E46399">
        <Path d="M14.833 4.222l3.667 3.5L9.722 33.5l-5.555 2.222-.278.111 10.944-31.61zM13.89.278L.222 39.722l4.833-1.944 6.5-2.611L21.111 7.11 13.89.278zM32.056 15.111L23.222 7.89c2.056 1.667 4.278 4.833 1.056 7.222-.111.056-.222.167-.333.222-.056.056-.112.056-.167.111a6.501 6.501 0 00-2.167 2.945c-1.444 3.611.334 7.667 3.945 9.111.833.333 1.722.5 2.61.5 2.779 0 5.445-1.667 6.5-4.444 1.223-3.112.056-6.612-2.61-8.445zm.555 7.667c-.722 1.833-2.5 3-4.444 3a4.81 4.81 0 01-1.778-.334c-1.167-.5-2.111-1.388-2.611-2.555-.5-1.167-.5-2.5-.056-3.667.334-.778.834-1.5 1.5-2l.056-.055.055-.056c.056-.055.167-.111.223-.167l.055-.055.056-.056a5.88 5.88 0 00.666-.555l.112-.111a6.584 6.584 0 001.222-1.723l2.944 2.445.111.055.111.056c1.89 1.222 2.611 3.667 1.778 5.778z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h35.556v40H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default LogoSvg;

import React, { useState } from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import colors from "../../theme";
import { TouchableOpacity } from "react-native-gesture-handler";

function UpperBody(props) {
  const [activated, setActivated] = useState(false);

  const color = activated ? "#E46399" : "#939CB2";

  function onPress() {
    setActivated(!activated);
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg width={90} height={99} viewBox="0 0 90 99" fill="#939CB2">
        <Path
          d="M81.16 47.363c-1.063-7.115-1.7-6.584-1.806-15.186-.106-9.451 4.672-21.027 5.31-22.832V3.717L51 .319a62.816 62.816 0 00-12.637 0L6.292 3.717l-.106 5.522c1.486 3.93 4.99 14.973 4.885 22.938-.107 8.602-.744 8.177-1.806 15.186-1.062 7.115-1.699 10.62-2.867 22.195C4.38 80.602 2.15 89.31.876 98.124h88.46c-1.274-8.814-3.61-17.522-5.416-28.566-1.062-11.576-1.699-15.186-2.76-22.195z"
          fill={color}
        />
      </Svg>
    </TouchableOpacity>
  );
}

export default UpperBody;

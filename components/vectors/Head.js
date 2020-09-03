import React, { useState } from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import colors from "../../theme";
import { TouchableOpacity } from "react-native-gesture-handler";

function Head(props) {
  const [activated, setActivated] = useState(false);

  const color = activated ? "#E46399" : "#939CB2";

  function onPress() {
    setActivated(!activated);
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg width={180} height={67} viewBox="0 0 180 67" fill="#000" {...props}>
        <Path
          d="M71.034 43.35c1.062 2.23 2.018 2.337 2.655 1.594 0 0 .425 7.646 3.398 11.469.106.212.425.425.531.637a25.626 25.626 0 007.859 5.734l-1.912-.637c-.212-.106-.319-.212-.531-.212a21.063 21.063 0 01-2.973-2.018c-.319-.319-.638-.53-.85-.743l-.319-.319s0 .106.107.106c-.638-.53-1.168-1.062-1.806-1.699-.106-.212-.424-.425-.53-.637 0 .212.53 5.31.53 8.177 0 .956 0 1.593-.106 2.124h26.549c-.319-.637-.319-1.274-.319-2.336 0-3.08.425-8.177.425-8.177h-.106c1.593-2.337 2.867-6.584 3.398-11.47 0 0 1.487 1.063 2.867-2.123 2.868-6.478 3.717-8.602 3.398-11.044-.212-2.337-2.336-2.337-2.336-2.337S118.715 2.466 91.742.023c-12.106-.53-26.867 7.965-22.3 29.416 0 0-3.293.106-2.231 4.567.956 4.46 2.761 7.115 3.823 9.345z"
          fill={color}
        />
      </Svg>
    </TouchableOpacity>
  );
}

export default Head;

import React, { useState } from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import colors from "../../theme";
import { TouchableOpacity } from "react-native-gesture-handler";

function Chest(props) {
  const [activated, setActivated] = useState(false);

  const color = activated ? "#E46399" : "#939CB2";

  function onPress() {
    setActivated(!activated);
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg width={123} height={75} viewBox="0 0 123 75" fill="#000">
        <Path
          d="M.006 74.655h122.23c.107-9.24-.955-15.823-.743-19.221.212-4.354 2.124-7.753-1.062-20.92-4.354-15.93-11.363-17.948-17.947-20.709-6.584-2.867-16.46-7.22-22.194-9.982C76.36 2.018 75.086 1.168 74.555 0H48.006c-.318 1.38-1.593 2.124-5.84 4.035-5.947 2.761-15.717 7.115-22.195 9.983-6.584 2.867-13.593 4.779-17.947 20.708C-1.162 48 .75 51.292.962 55.646 1.174 59.15-.1 65.628.006 74.655z"
          fill={color}
        />
      </Svg>
    </TouchableOpacity>
  );
}

export default Chest;

import React from "react";
import styled from "styled-components/native";
import { Animated, TouchableOpacity, View, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    closeNotifications: () =>
      dispatch({
        type: "CLOSE_NOTIFICATIONS",
      }),
  };
}

const screenHeight = Dimensions.get("window").height;

class Notifications extends React.Component {
  state = {
    top: new Animated.Value(screenHeight),
  };

  componentDidMount() {
    this.toggleNotifications();
  }

  componentDidUpdate() {
    this.toggleNotifications();
  }

  toggleNotifications = () => {
    if (this.props.action == "openNotifications") {
      Animated.spring(this.state.top, {
        toValue: 54,
      }).start();
    }

    if (this.props.action == "closeNotifications") {
      Animated.spring(this.state.top, {
        toValue: screenHeight,
      }).start();
    }
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top, zIndex: "100" }}>
        <Container>
          <Row></Row>
          <TouchableOpacity
            onPress={this.props.closeNotifications}
            style={{
              position: "absolute",
              top: 120,
              left: "50%",
              marginLeft: -22,
              zIndex: 1,
            }}
          >
            <CloseView>
              <Ionicons name="ios-close" size={40} color="#2457db" />
            </CloseView>
          </TouchableOpacity>
          <Col />
        </Container>
      </AnimatedContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: #fff;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.25);
`;

const AnimatedContainer = Animated.createAnimatedComponent(View);

const Row = styled.View`
  height: 142px;
  background: rgba(0, 0, 0, 0.64);
`;

const Col = styled.View`
  height: ${screenHeight};
  background: rgba(255, 255, 255, 0.64);
`;

const Container = styled.View`
  position: absolute;
  background: #fff;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

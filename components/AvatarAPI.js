import React, { Component } from "react";
import styled from "styled-components/native";

class Avatar extends React.Component {
  state = {
    photo:
      "https://media-exp1.licdn.com/dms/image/C4D03AQGRfWHWcMc-cg/profile-displayphoto-shrink_400_400/0?e=1600905600&v=beta&t=lbc8KhXh93VutNH88Y5Tdom6ATCDzTspmwbYyjvZr3c",
  };

  componentDidMount() {
    fetch("https://uifaces.co/api", {
      headers: new Headers({
        "X-API-KEY": "4EF4D3FE-B09541AB-B93EA2B3-20B7542F",
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);

        this.setState({
          photo: response[0].photo,
        });
      });
  }

  render() {
    return (
      <Row>
        <Col>
          <Image source={{ uri: this.state.photo }} />
        </Col>
        <Col>
          <Name>Olá Matheus</Name>
        </Col>
      </Row>
    );
  }
}

export default Avatar;

const Col = styled.View`
  padding-right: 4px;
`;

const Row = styled.View`
  flex-direction: row;

  align-items: center;
`;

const Image = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;
const Name = styled.Text`
  margin-left: 8px;
  font-size: 20px;
  color: #565656;
  font-weight: 700;
`;

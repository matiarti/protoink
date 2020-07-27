import React from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  View,
  StatusBar,
} from "react-native";
import styled from "styled-components/native";
import EventCard from "../components/EventCard";
import { Ionicons } from "@expo/vector-icons";
import LogoSvg from "../components/Icons";
import Studio from "../components/Studio";
import IdeaCard from "../components/IdeaCard";
import AvatarAPI from "../components/AvatarAPI";
import Menu from "../components/Menu";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU",
      }),
  };
}

class HomeScreen extends React.Component {
  state = {
    scale: new Animated.Value(1),
  };

  componentDidMount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.timing(this.state.scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in(),
      }).start();
    }

    StatusBar.setBarStyle("light-content", true);

    if (this.props.action == "closeMenu") {
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in(),
      }).start();

      StatusBar.setBarStyle("dark-content", true);
    }
  };

  render() {
    return (
      <RootView>
        <Menu />
        <AnimatedContainer style={{ transform: [{ scale: this.state.scale }] }}>
          <Container>
            <SafeAreaView>
              <ScrollView>
                <TopBar>
                  <LogoSvg style={{ width: 40 }} />
                  <TouchableOpacity onPress={this.props.openMenu}>
                    <Ionicons
                      name="ios-notifications-outline"
                      size={40}
                      color="#2457db"
                    />
                  </TouchableOpacity>
                </TopBar>

                <Row>
                  <AvatarAPI />
                </Row>

                <Row>
                  <Heading1>
                    Encontre o lugar perfeito para fazer aquela tattoo.
                  </Heading1>
                </Row>
                <Row>
                  <Heading3>Estúdios na região</Heading3>
                </Row>
                <ScrollView
                  style={{ paddingBottom: 24, paddingLeft: 24 }}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {studios.map((studio, index) => (
                    <Studio
                      key={index}
                      image={studio.image}
                      text={studio.text}
                      subtitle={studio.subtitle}
                    />
                  ))}
                </ScrollView>
                <Row>
                  <Heading3>Eventos recentes</Heading3>
                </Row>
                <ScrollView
                  horizontal={true}
                  style={{ paddingBottom: 24, paddingLeft: 24 }}
                  showsHorizontalScrollIndicator={false}
                >
                  {events.map((event, index) => (
                    <EventCard
                      key={index}
                      title={event.title}
                      coverimage={event.coverimage}
                      location={event.location}
                      subtitle={event.subtitle}
                      price={event.price}
                      attendees={event.attendees}
                    />
                  ))}
                </ScrollView>
                <Row>
                  <Heading3>Ideias recentes</Heading3>
                </Row>
                <ScrollView
                  horizontal={true}
                  style={{ paddingBottom: 24, paddingLeft: 24 }}
                  showsHorizontalScrollIndicator={false}
                >
                  {ideas.map((idea, index) => (
                    <IdeaCard
                      key={index}
                      title={idea.title}
                      coverimage={idea.coverimage}
                      location={idea.location}
                      subtitle={idea.subtitle}
                      price={idea.price}
                      attendees={idea.attendees}
                    />
                  ))}
                </ScrollView>
              </ScrollView>
            </SafeAreaView>
          </Container>
        </AnimatedContainer>
      </RootView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const RootView = styled.View`
  background: #fff;
  flex: 1;
`;

const Heading3 = styled.Text`
  font-size: 16px;
  color: #565656;
  font-weight: 600;
`;

const Heading1 = styled.Text`
  font-size: 24px;
  color: #2457db;
  font-weight: 700;
  line-height: 32px;
  padding: 24px 0px 32px 0px;
  width: 80%;
`;

const Row = styled.View`
  width: 100%;
  padding-left: 24px;
  padding-top: 8px;
`;

const TopBar = styled.View`
  padding-top: 16px;
  padding-left: 24px;
  padding-right: 24px;
  flex-direction: row;
  justify-content: space-between;
  height: 64px;
`;

const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
  border-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(View);

const studios = [
  {
    key: "1",
    image: require("../assets/logo.png"),
    text: "Vinicius Martins",
    subtitle: "Arte fina e minimalista",
  },
  {
    image: require("../assets/logo.png"),
    text: "Jennifer Oliveira",
    subtitle: "Arte fina e minimalista",
  },
  {
    image: require("../assets/logo.png"),
    text: "DaVilla Studio",
    subtitle: "Arte fina e minimalista",
  },
];

const events = [
  {
    key: "1",
    coverimage: require("../assets/logo.png"),
    title: "Flash Day para vender a COVID19 forever",
    location: "Tatuapé, São Paulo",
    subtitle: "a partir de",
    price: "R$150",
    attendees: "126",
  },
  {
    coverimage: require("../assets/logo.png"),
    title: "Flash Day para sobreviver COVID",
    location: "Tatuapé, São Paulo",
    subtitle: "a partir de",
    price: "R$150",
    attendees: "126",
  },
  {
    coverimage: require("../assets/logo.png"),
    title: "Flash Day para sobreviver COVID",
    location: "Tatuapé, São Paulo",
    subtitle: "a partir de",
    price: "R$150",
    attendees: "126",
  },
];

const ideas = [
  {
    key: "1",
    coverimage: require("../assets/logo.png"),
    title: "Flash Day para sobreviver COVID",
    location: "Tatuapé, São Paulo",
    subtitle: "a partir de",
    price: "R$150",
    attendees: "126",
  },
  {
    coverimage: require("../assets/logo.png"),
    title: "Flash Day para sobreviver COVID",
    location: "Tatuapé, São Paulo",
    subtitle: "a partir de",
    price: "R$150",
    attendees: "126",
  },
  {
    coverimage: require("../assets/logo.png"),
    title: "Flash Day para sobreviver COVID",
    location: "Tatuapé, São Paulo",
    subtitle: "a partir de",
    price: "R$150",
    attendees: "126",
  },
];
/*
const avatars = [
  {
    key: "1",
    image: require("../assets/logo.png"),
    name: "Olá Cliente",
  },
];
 */

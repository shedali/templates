import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  Animated
} from "react-native";
import { observer } from "mobx-react";
import { types as t } from "mobx-state-tree";

const Task = t.model({
  description: t.string,
  title: t.string,
  duration: t.string
});

const times = t.model({
  segment: t.array(Task)
});

class AView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0) // Initial value for opacity: 0
  };
  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1000
    }).start();
  }

  render() {
    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: this.state.fadeAnim // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

@observer
export default class App extends React.Component {
  render() {
    return (
      <AView
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <View style={{ flex: 1, backgroundColor: "#4340af" }} />
        <View
          style={{
            flex: 1,
            backgroundColor: "#6f0dea"
          }}
        >
          <ActivityIndicator
            style={{
              top: "45%"
            }}
            size="large"
            color="#0000ff"
          />
        </View>
        <View style={{ flex: 1, backgroundColor: "#e343e0" }} />
      </AView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

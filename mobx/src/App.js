import React, { Component } from "react";
import "./App.css";
import { Provider, inject, Observer, observer } from "mobx-react";
import { types as t } from "mobx-state-tree";

const Users = t
  .model({
    time: t.string
  })
  .actions(self => ({
    updateName: name => {
      self.time = name;
    }
  }));

const user = Users.create({
  time: "2018-10-23-20-45"
});

setInterval(() => user.updateName(new Date().toString()), 1000);

var Main = inject("user")(props => <div>{props.user.time}</div>);

class App extends Component<any> {
  render() {
    return (
      <Provider user={user}>
        <Observer>{() => <div>{user.time}</div>}</Observer>
      </Provider>
    );
  }
}
export default App;

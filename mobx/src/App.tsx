import { inject, Provider } from "mobx-react";
import { HistoryAdapter } from "mobx-state-router";
import React, { Component } from "react";
import { Shell } from "./shell";
import { history } from './stores/history';
import { RootStore } from './stores/RootStore';

// // Create the rootStore
const rootStore = new RootStore();

// Observe history changes
const historyAdapter = new HistoryAdapter(rootStore.routerStore, history);
historyAdapter.observeRouterStateChanges();
class App extends Component {
  render() {
    return (
      <Provider rootStore={rootStore}>
        <Shell />
      </Provider>
    );
  }
}

export default App;

const styles = {
  root: {
    padding: 16
  }
};

export const HomePage = inject("rootStore")(
  class extends React.Component<any> {
    render() {
      return (
        <div style={styles.root}>
          <h1>Home</h1>
        <button onClick={this.handleClick}>Go to Electronics</button>
        </div>
      );
    }

    // const HomePage: React.SFC<WelcomeProps>

    handleClick = () => {
      const { rootStore } = this.props;
      rootStore.routerStore.goTo("department", { id: "electronics" });
    };
  }
);
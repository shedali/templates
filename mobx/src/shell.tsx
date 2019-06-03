import { inject } from "mobx-react";
import { RouterView } from "mobx-state-router";
import React from "react";

const viewMap = {
  home: <div></div>
};

export const Shell = inject("rootStore")(
  class extends React.Component<{ rootStore?: any }> {
    render() {
      const { rootStore } = this.props;
      const { routerStore } = rootStore;
      return <RouterView routerStore={routerStore} viewMap={viewMap} />;
    }
  }
);



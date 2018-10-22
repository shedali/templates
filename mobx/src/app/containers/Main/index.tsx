import * as React from "react";
import { Grid, Responsive } from "semantic-ui-react";
export class Main extends React.Component {
  render() {
    return (
      <Grid style={{ height: "100vh" }}>
        <Grid.Row columns={1}>
          <Grid.Column align="middle">{""}</Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} align="center">
          <Grid.Column>
            {/* Main Content */}
            enter item <input type="text" />
          </Grid.Column>
          {/* RIGHT Side  */}
          <Responsive as={Grid.Column} {...Responsive.onlyComputer}>
            <Grid.Row>{""}</Grid.Row>
          </Responsive>
        </Grid.Row>
      </Grid>
    );
  }
}

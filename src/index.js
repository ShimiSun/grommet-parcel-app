import React from "react";
import ReactDOM from "react-dom";
import { Add } from "grommet-icons";
import { grommet, Button, Box, Heading, Grommet } from "grommet";

import "./scss/app.scss";
import Header from "./components/Header";

class HelloMessage extends React.Component {
  render() {
    return (
      <Grommet full theme={grommet}>
        <Header />
        <Box margin="xlarge">
          <Heading>Hello {this.props.name}</Heading>
        </Box>
        <Button icon={<Add />} label="test" />
      </Grommet>
    );
  }
}

let App = document.getElementById("app");

ReactDOM.render(<HelloMessage name="Grommet + Parcel" />, App);

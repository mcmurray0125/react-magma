import React, { Component } from "react";
import { Input } from "react-magma-dom";

class App extends Component {
  render() {
    console.log(Input);
    return (
      <div>
        <h1>INPUTS</h1>
        <Input id="labeledInput" labelText="Label" />
        <Input id="focusedInput" autoFocus={true} />
        <Input id="defaultInput" />
        <Input id="numberInput" type="number" />
        <Input id="passwordInput" type="password" />
        <Input id="requiredInput" required={true} />
        <Input id="disabledInput" disabled={true} />
      </div>
    );
  }
}

export default App;

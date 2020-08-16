import React from "react";

export default class OtherAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  add = () => {
    // this.state.count = this.state.count++;
    // this.setState(
    //   (prevState) => {
    //     return { count: prevState.count++ };
    //   },
    //   () => console.log("State", this.state)
    // );
    // this.setState({ count: this.state.count++ });
    // this.setState({ count: this.state.count++ });
    this.setState((prevState) => ({
      count: prevState.count++,
    }));
    this.setState((prevState) => ({
      count: prevState.count++,
    }));
  };

  render() {
    return (
      <>
        <span>{this.state.count}</span>
        <button onClick={this.add}>Add</button>
      </>
    );
  }
}

import React from "react";

class LeaksEverywhere extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "You can't really destroy me!"
    };

    this.someMethod = this.someMethod.bind(this);
  }

  someMethod = () => {
    this.props.callback();
    console.log("I could do much worse...redirect? update store? logout?");
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.someMethod, false);
  };

  render = () => <div>{this.state.text}</div>;
}

export default LeaksEverywhere;

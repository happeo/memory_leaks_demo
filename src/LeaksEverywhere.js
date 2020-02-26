import React from "react";
import makeCancelable from "./promiseHelper";

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
    this.cancelablePromise = makeCancelable(fetch("www.happeo.com"));

    this.cancelablePromise.promise
      .then(() => {
        this.someMethod();
        this.setState({
          text: "but you can join Happeo and make the world better/happier"
        });
      })
      .catch(err => err.isCanceled && console.log("all good here"));
  };

  componentWillUnmount = () => {
    this.cancelablePromise.cancel();
  };

  render = () => <div>{this.state.text}</div>;
}

export default LeaksEverywhere;

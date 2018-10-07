import React, { Component } from "react";
import { connect } from "react-redux";
import { chatMessageReceive } from "../actions/socket";
import socket from "../socket";

export default ComposedComponent => {
  class SocketHoc extends Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      socket.on("chat message", res => {
        this.props.chatMessageReceive(res);
      });
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
  const mapDispatchToProps = {
    chatMessageReceive
  };
  return connect(
    () => ({}),
    mapDispatchToProps
  )(SocketHoc);
};

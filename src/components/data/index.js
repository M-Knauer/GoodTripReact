import React from "react";
class Tick extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.atualizar = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.atualizar);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }


  render() {
    return (
      <div>
        <h2>Brasília {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
export default Tick;
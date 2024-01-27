import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="container"></div>
      </div>
    );
  }
}

const props = () => <Header />;

export default props;

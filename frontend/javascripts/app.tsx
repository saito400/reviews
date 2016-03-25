/// <reference path="../../typings/tsd.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';

//import React = require('react')

interface Props {
  content: string;
}

class MyComponent extends React.Component<Props, {}> {
  render() {
    return <div>{this.props.content}</div>
  }
}

ReactDOM.render(
  <MyComponent content="Hello World" />,
  document.body
);
//React.render(<MyComponent content="Hello World" />, document.body);

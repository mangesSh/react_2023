import React, { Component } from "react";
import PropTypes from "prop-types";

export default function Greet({ name, msg='Default Message', age=30, children }) {
  return (
    <div>
      Hello {name} {msg}, you are {age} years old.
      <br />
      {children}
    </div>
  );
}

/* export default class Greet extends Component {
  render() {
    let { name, msg, age } = this.props; // de-structuring
    return (
      <div>
        Hello {name} {msg}, you are {age} years old.
        <br/>
        {this.props.children}
      </div>
    );
  }
} */
Greet.propTypes = {
  name: PropTypes.string.isRequired,
  msg: PropTypes.string,
  age: PropTypes.number,
  children: PropTypes.element,
};








// import React from 'react'

// export default function Greet({name,msg,age}) {
//   return (
//     <div>Hello {name} {msg} you are {age} years old.</div>
//   )
// }

// import React, { Component } from 'react'

// export default class Greet extends Component {
//   render() {
//     // let {name, msg, age}= this.props;  destructuring to avoid repitation of this.props
//     return (
//       <div>
//         hello {this.props.name} {this.props.msg} you are {this.props.age} years old.
//       </div>
//     )
//   }
// }


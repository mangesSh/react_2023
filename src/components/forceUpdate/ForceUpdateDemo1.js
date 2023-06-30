// without using force update for local variable ui not get updated

import React, { Component } from "react";

export default class ForceUpdateDemo1 extends Component {
  render() {
    let count = 0;
    function increment() {
      count = count + 1;
      alert(count);
    }
    return (
      <div>
        <p>The count is: {count}</p>
        <button onClick={() => increment()}>Add one</button>
      </div>
    );
  }
}













// import React, { Component } from "react";

// export default class ForceUpdateDemo1 extends Component {
//   count = 0;
//   render() {
//     const increment =()=> {
//       this.count = this.count + 1;
//       this.forceUpdate()
//       alert(this.count);
//     }
//     return (
//       <div>
//         <p>The count is: {this.count}</p>
//         <button onClick={() => increment()}>Add one</button>
//       </div>
//     );
//   }
// }
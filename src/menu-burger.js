import React from 'react';
import { slide as Menu } from 'react-burger-menu';
// import logo from './menu-alt-512.png';

export default class AppBar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    }
  };
    return (
      <div>
        <Menu styles={ styles } >
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
      </div>
    );
  }
}

// export default class AppBar extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       sidebarOpen: true
//     }
//
//     this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
//   }
//
//   onSetSidebarOpen(open) {
//      this.setState({sidebarOpen: open});
//   }
//
//   render() {
//     var sidebarContent = <b>Sidebar content</b>;
//
//     return (
//
//       <div style={{display: "flex", flexDirection: "column"}}><button onClick={() => { alert("YOOOO")}} >TOGGLE</button>
//       <Sidebar sidebar={sidebarContent}
//                open={this.state.sidebarOpen}
//                onSetOpen={this.onSetSidebarOpen}>
//         <b>Main content</b>
//         <p>Hellooooooo</p>
//       </Sidebar>
//       </div>
//     );
//   }
// };

import React from 'react';
import { withRouter } from 'react-router';
import '../dist/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends React.Component {


  goToHome() {
    this.props.history.push('/home');
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div>
          <div>
            <label className="form-logo" onClick={() => this.goToHome()}>Dolce Margarita</label>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
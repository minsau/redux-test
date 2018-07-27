import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSection } from '../../../js/actions';
import './Header.css'

class HeaderComponent extends Component{
  constructor(props) {
    super(props);
    this.logo = 'Scotiabank';
  }

  changeSection = (section) => {
    this.props.changeSection(section)
  }

  render() {
    return(
      <div className={'navbar-fixed header'}>
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo center">{this.logo}</a>
            <ul className="right hide-on-med-and-down">
              <li onClick={ () => this.changeSection(1)}><a>1</a></li>
              <li onClick={ () => this.changeSection(2)}><a>2</a></li>
              <li onClick={ () => this.changeSection(3)}><a>3</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      ...state
  }
}

const mapDispatchToProps = dispatch => {
  return {
      changeSection: section => dispatch(changeSection(section))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(HeaderComponent);
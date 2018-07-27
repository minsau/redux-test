import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storageGeneralData, changeSection } from '../../js/actions';


export class TercerComponente extends Component {
    componentDidMount() {
    }

    cambiarSeccion = () => {
      this.props.changeSection(1);
    }
    
    render() {
        return (
          <div>
          <div className="row">
            <form className="col offset-s2 s8">
              <div className="row">
                <div className="input-field col s6">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
                  <label htmlFor="first_name">Tarjeta</label>
                </div>
                <div className="input-field col s6">
                  <input id="last_name" type="text" className="validate" />
                  <label htmlFor="last_name">Hipotecario</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate" />
                  <label htmlFor="email">Auto</label>
                </div>
              </div>
            </form>
          </div>
          <div className="row">
            <div className="col offset-s10 s2">
            <a className="btn-floating btn-large waves-effect waves-light red" onClick={ () => this.cambiarSeccion()}>
              <i className="material-icons">arrow_forward</i>
            </a>
            </div>
          </div>
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
        setGeneralData: data => dispatch(storageGeneralData(data)),
        changeSection: section => dispatch(changeSection(section))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TercerComponente);
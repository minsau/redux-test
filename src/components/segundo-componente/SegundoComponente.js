import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storageSecondData, changeSection } from '../../js/actions';


export class SegundoComponente extends Component {
    componentDidMount() {
    }

    cambiarSeccion = () => {
      this.storeData();
      this.props.changeSection(3);
    }

    storeData() {
      const fields = {
        empresa: '',
        sueldo: '',
        antiguedad: ''
      };
      fields.empresa = document.getElementById('empresa').value;
      fields.sueldo = document.getElementById('sueldo').value;
      fields.antiguedad = document.getElementById('antiguedad').value;

      this.props.storageData(fields);
    }

    render() {
        return (
          <div>
          <div className="row">
            <form className="col offset-s2 s8">
              <div className="row">
                <div className="input-field col s6">
                  <input id="empresa" type="text" className="validate" />
                  <label htmlFor="empresa">Empresa</label>
                </div>
                <div className="input-field col s6">
                  <input id="sueldo" type="text" className="validate" />
                  <label htmlFor="sueldo">Sueldo</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="antiguedad" type="email" className="validate" />
                  <label htmlFor="antiguedad">Años de antiguedad</label>
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
        storageData: data => dispatch(storageSecondData(data)),
        changeSection: section => dispatch(changeSection(section))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SegundoComponente);
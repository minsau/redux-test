import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storageFirstData, changeSection } from '../../js/actions';


export class PrimerComponente extends Component {
    componentDidMount() {
      this.setData();
    }

    cambiarSeccion = () => {
      this.storeData();
      this.props.changeSection(2);
    }

    storeData() {
      const fields = {
        nombre: '',
        lastName: '',
        email: ''
      };
      fields.nombre = document.getElementById('first_name').value;
      fields.lastName = document.getElementById('last_name').value;
      fields.email = document.getElementById('email').value;

      this.props.setGeneralData(fields);
    }

    setData = () => {
      if(this.props.firstData){
        document.getElementById('first_name').value = this.props.firstData.nombre;
        document.getElementById('last_name').value = this.props.firstData.lastName;
        document.getElementById('email').value = this.props.firstData.email;

        document.getElementById('last_name').focus();
        document.getElementById('email').focus();
        document.getElementById('first_name').focus();

      }
    }

    render() {
        return (
          <div>
          <div className="row">
            <form className="col offset-s2 s8">
              <div className="row">
                <div className="input-field col s6">
                  <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
                  <label htmlFor="first_name">First Name</label>
                </div>
                <div className="input-field col s6">
                  <input id="last_name" type="text" className="validate" />
                  <label htmlFor="last_name">Last Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate" />
                  <label htmlFor="email">Email</label>
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
        setGeneralData: data => dispatch(storageFirstData(data)),
        changeSection: section => dispatch(changeSection(section))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PrimerComponente);
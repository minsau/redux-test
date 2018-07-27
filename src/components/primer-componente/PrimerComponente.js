import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storageGeneralData } from '../../js/actions';

export class PrimerComponente extends Component {
    componentDidMount() {
        this.props.setGeneralData({url: 'sadadasd',
        nombre: 'asdasd'});
    }
    render() {
        return (
            <div>
                <p> Primer componente </p>
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
        setGeneralData: data => dispatch(storageGeneralData(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PrimerComponente);
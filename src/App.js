import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './js/store';

import PrimerComponente from './components/primer-componente/PrimerComponente';
import SegundoComponente from './components/segundo-componente/SegundoComponente';
import TercerComponente from './components/tercer-componente/TercerComponente';
import HeaderComponent from './components/shared/header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    store.subscribe(this.handleChanges);
    this.state = {
      section: 1
    }
  }

  handleChanges = () => {
    console.log(store.getState());
    if(store.getState().section !== this.state.section){
      this.setState((prevState, props) => ({
        ...prevState,
        section: store.getState().section
    }));
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <HeaderComponent />
          { this.state.section === 1 && <PrimerComponente />}
          { this.state.section === 2 && <SegundoComponente />}
          { this.state.section === 3 && <TercerComponente />}
        </div>
      </Provider>
    );
  }
}

export default App;

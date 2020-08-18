import React, { Component } from 'react';
import './App.css';

import SelectAccounts from './SelectAccounts';

class App extends Component {
  state = {
    loading: true,
    drizzleState: null
  }

  componentDidMount() {
    const { drizzle } = this.props;

    this.unsubscribe = drizzle.store.subscribe(() => {
      const drizzleState = drizzle.store.getState();

      if(drizzleState.drizzleStatus.initialized) {
        this.setState({ loading: false, drizzleState });        
      }
    });    
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    if (this.state.loading) return <h1>Loading Drizzle...</h1>;

    return(
      <div>
        <h1>MetaCoin Wallet</h1>

        <div>
          <h2>Send ETH</h2>

          <SelectAccounts 
            label="From"
            drizzle={this.props.drizzle}
            drizzleState={this.state.drizzleState}
          />
          

          Value: <input type="number" /><br/>
          
          {/* <SelectAccounts label="To" /><br/> */}
          
          
          <button>Send</button>
        
        </div>
        
        
        
      </div>
    );
  }
}

export default App;

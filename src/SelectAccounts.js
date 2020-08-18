import React, { Component } from 'react';

class SelectAccounts extends Component {
    state = { 
        accounts: [],
        balance: 0 
    };

    async componentDidMount() {
        const { drizzle } = this.props
        const { drizzleState } = this.props;
        const contract = drizzle.contracts.MetaCoin;
        
        this.setState({ accounts: drizzleState.accounts });
        
        var balance = await contract.methods.getBalance(drizzleState.accounts[0]).call();
        this.setState({ balance }); 
    }
        
    render() {        
        return (
            <div>                
                {`${this.props.label}: `}
                <select>
                    {Object.values(this.state.accounts).map(item => {
                        return <option key={item} value={item}>{item}</option>
                    })}                    
                </select>

                <div>Balance: {this.state.balance} eth</div>
            </div>
        );
    }
}

export default SelectAccounts;
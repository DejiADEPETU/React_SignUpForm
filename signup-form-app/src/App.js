import React from 'react';
import Input from './components/Input';
// import Bios from './Bios';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      custormerID:'',
      };
  }
//   ------------------------------------------------------------- oooo
trackInputChange = (e)=> {
  this.setState({
    custormerID:e.target.value,
  });
};
//   ------------------------------------------------------------- oooo
trackSubmit = (e)=>{
  e.preventDefault();
  alert(`CustomerID => ${this.state.customerID}`);
};

//   ------------------------------------------------------------- oooo

isValid(){
  if (this.state.customerID === ""){
    return false
  }
  return true
}

//   ------------------------------------------------------------- oooo

  render() { 
    return (  
    <div>
      <h2>SignUp Form with Controlled Compnents</h2>
      <form onSubmit={this.trackSubmit}>
        <Input
          type="text"
          label="Customer ID"
          id="customer-id"
          name="customer-id"
          onChange={this.trackInputChange}
          value={this.state.custormerID}
          errorMessage={this.isValid() ?'' : 'This filed is required.'}
          />
          <button disable={!this.isValid()} type="submit">
            Submit
            </button>
        </form>
          {/* <Link to="summary">Conclusion</Link> */}
    </div>
    );
  }
}
 
export default App;
  
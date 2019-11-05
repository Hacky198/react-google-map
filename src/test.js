import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';


class FromValdition extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        fields: {},
        errors: {}
      }
    }
  
    handleValidation(){
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
  
      //Name
      if(!fields["name"]){
        formIsValid = false;
        errors["name"] = "Cannot be empty";
      }
  
      if(typeof fields["name"] !== "undefined"){
        if(!fields["name"].match(/^[a-zA-Z]+$/)){
          formIsValid = false;
          errors["name"] = "Only letters";
        }      	
      }
  
      //Email
      if(!fields["email"]){
        formIsValid = false;
        errors["email"] = "Cannot be empty";
      }
  
      if(typeof fields["email"] !== "undefined"){
        let lastAtPos = fields["email"].lastIndexOf('@');
        let lastDotPos = fields["email"].lastIndexOf('.');
  
        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
          formIsValid = false;
          errors["email"] = "Email is not valid";
        }
      }
  
  
  
      this.setState({errors: errors});
      return formIsValid;
    }
  
    contactSubmit(e){
      e.preventDefault();
      if(this.handleValidation()){
       
      }
  
    }
  
    handleChange(field, e){    		
      let fields = this.state.fields;
      fields[field] = e.target.value;        
      this.setState({fields});
    }
  
    render(){
        return (
            <div className="form-validation"> 
                <h1>Form Details</h1>       	
                <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
                    <div className="wrapper">
                        <label>Name</label>
                        <input ref="name" type="text" size="30" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
                        <span className="error">{this.state.errors["name"]}</span>
                    </div>
                    <div className="wrapper">
                        <label>Email</label>
                        <input refs="email" type="text" size="30"onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                        <span className="error">{this.state.errors["email"]}</span>
                    </div>
                    <div className="wrapper">
                        <button id="submit" value="Submit">Validate</button>
                    </div>
                </form>
            </div>
        )
    }
}
console.log(JSON.stringify(ReactDOM.render(<FromValdition />, document.getElementById('root1'))))


function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
  
  const numbers = [1, 2, 3, 4, 5];
  ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root3')
  );
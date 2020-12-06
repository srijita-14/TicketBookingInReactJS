import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';



export default class FormEq extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            contact_no: null,
            passenger_name: null,
            start_city: null,
            end_city: null
        }
    }
    idChangeHandler = (event) => {
        this.setState({id: event.target.value});
    }

    submitHandler = (event) => {
        event.preventDefault();
        axios.delete('http://localhost:8080/Cancel/deletePassenger/'+this.state.id)
        .then(response => {
            console.log(response);
            //this.setState({deleted: true});
            //console.log('Latest: '+this.state.contact_no);
            alert("succesfully deleted!")
        });
    }

      render() {
        return (
            <form onSubmit={this.submitHandler}>
              <h1>|| Welcome to Cancellation service ||</h1>
              <p>Enter Passenger ID:</p>
              <input
                type="text"
                onChange={this.idChangeHandler}
              />
               <p>
              <input type='submit'value="Delete"/>
              </p>
            </form>
          );
          
    }

}


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
            end_city: null,
            submitted: false
        }
    }
    idChangeHandler = (event) => {
        this.setState({id: event.target.value});
    }

    submitHandler = (event) => {
        event.preventDefault();
        axios.get('http://localhost:8080/enquiry/passengerDetailsByBrowser/'+this.state.id)
        .then(response => {
            console.log(response);
            this.setState({submitted: true, contact_no: response.data.contact_no, passenger_name: response.data.passenger_name,start_city:response.data.start_city,end_city:response.data.end_city});
            console.log('Latest: '+this.state.contact_no);
            alert("Details fetched!")
        });
      }

      render() {
        return (<div>
            <form onSubmit={this.submitHandler}>
              <h1>|| Welcome to Enquiry service ||</h1>
              <p>Enter Passenger ID:</p>
              <input
                type="text"
                onChange={this.idChangeHandler}
              />
               <p>
              <input type='submit'/>
              </p>
            </form>
            {this.state.submitted && <PassengerInfo value = {this.state}/>}
            </div>
          );
    }

}

function PassengerInfo(props) {
    console.log('Passenger Details: '+props);
    return (
    <div>
      <center>
      <table>
        <tr><td>
    <p>Contact: {props.value.contact_no}</p>
    </td></tr>
    <tr><td>
    <p>Name: {props.value.passenger_name}</p>
    </td></tr>
    <tr><td>
    <p>Start City: {props.value.start_city}</p></td></tr>
    <tr><td><p>End City: {props.value.end_city}</p></td></tr>
    </table>
    </center>
    </div>
    )
}
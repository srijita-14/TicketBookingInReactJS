import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';


export default class FormTic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ticket_no: null,
            price: null,
            start_city: null,
            end_city: null,
            train_no: null,
            submitted: false
        }
    }
    ticketNoChangeHandler = (event) => {
        this.setState({ticket_no: event.target.value});
    }

    submitHandler = (event) => {
        event.preventDefault();
        axios.get('http://localhost:8080/enquiry/ticket2/'+this.state.ticket_no)
        .then(response => {
            console.log(response);
            this.setState({submitted: true,price: response.data.price,start_city:response.data.start_city,end_city:response.data.end_city,train_no:response.data.train_no});
            
        });
      }

      render() {
        return (<div>
            <form onSubmit={this.submitHandler}>
              <h1>|| Welcome to Ticket Enquiry service ||</h1>
              <p>Enter Ticket no:</p>
              <input
                type="text"
                onChange={this.ticketNoChangeHandler}
              />
               <p>
              <input type='submit'/>
              </p>
            </form>
            {this.state.submitted && <TicketInfo value = {this.state}/>}
            </div>
          );
    }

}

function TicketInfo(props) {
    console.log('Ticket Details: '+props);
    return (
    <div>
    <p>Price: {props.value.price}</p>
    <p>Start City: {props.value.start_city}</p>
    <p>End City: {props.value.end_city}</p>
    <p>Train No.:{props.value.train_no}</p>
    </div>
    )
}
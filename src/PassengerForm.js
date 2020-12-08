import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passenger_name: null,
            age: null,
            start_city: null,
            end_city: null,
            contact_no: null   
        }
    }

    passenger_nameChangeHandler = (event) => {
        this.setState({passenger_name: event.target.value});
      }

    ageChangeHandler = (event) => {
        this.setState({age: event.target.value});
      }

    start_cityChangeHandler = (event) => {
        this.setState({start_city: event.target.value});
      }

    end_cityChangeHandler = (event) =>{
        this.setState({end_city: event.target.value});
    }

    contact_noChangeHandler = (event) =>{
        this.setState({contact_no: event.target.value})
    }

   passenger_idChangeHandler = (event) =>{
        this.setState({passenger_id: event.target.value})
    }
    

      submitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/booking/passengers', {
            passenger_name: this.state.passenger_name,
            age: this.state.age,
            start_city: this.state.start_city,
            end_city:  this.state.end_city,
            contact_no: this.state.contact_no
        })
        .then(response => alert("Booking Successful"));
      }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
               <h1><marquee bgcolor="#ADD8E6"> || Passenger Details ||</marquee></h1>
               <center>
               <table>
                 <tr>
                 <td>
                    <p>Enter your Name:</p></td>
              <td><input
                type="text"
                onChange={this.passenger_nameChangeHandler}
              /></td>
               </tr>
               <tr>
              <td><p>Enter your Age:</p></td>
              <td><input
                type="text"
                onChange={this.ageChangeHandler}
              /></td>
              </tr>
              <tr>
              <td>
              <p>Enter starting city:</p></td>
              {/*<input
                type="text"
                onChange={this.start_cityChangeHandler}
              />*/}
              <td>
                < p onChange= {this.start_cityChangeHandler}>
                <select value= {this.state.start_city}>
                <option value="Null">Select</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Pune">Pune</option>
                  <option value="Vizag">Vizag</option>
                  </select></ p></td>
                  </tr>
                  <tr>
                  <td><p> Enter destination city: </p></td>
              {/* <input
                type="text"
                onChange={this.end_cityChangeHandler}
                />
                /> */}
               <td> < p onChange= {this.end_cityChangeHandler}>
                <select value= {this.state.end_city}>
                <option value="Null">Select</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Pune">Pune</option>
                  <option value="Vizag">Vizag</option>
                  </select></ p></td>
                  </tr>
                  <tr>
                  <td>
               <p> Enter contact number: </p></td>
               <td><input
                type="text"
                onChange={this.contact_noChangeHandler}
               /></td>
               </tr>
               <tr><td><p>
              <input type='submit'/>
              </p></td>
              </tr>
              </table>
              </center>
            </form>
        );
}
}
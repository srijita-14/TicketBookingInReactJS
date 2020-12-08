import React from 'react';
import axios from 'axios';

export default class FormUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total_seats: null,
            fare: null,
            train_no:null
            }
    }

    train_noChangeHandler = (event) => {
        this.setState({train_no: event.target.value});
      }

    fareChangeHandler = (event) => {
        this.setState({fare: event.target.value});
      }

    seatsChangeHandler = (event) => {
        this.setState({total_seats: event.target.value});
      }

      submitHandler = (event) => {
        event.preventDefault();
        
        axios.put('http://localhost:8080/update/train', {
            total_seats: this.state.total_seats,
            fare: this.state.fare,
            train_no: this.state.train_no
            
            
        })
        .then(response => alert("Train updated"));
      }

      render() {
        return (<div>
            <form onSubmit={this.submitHandler}>
              <h1>|| Welcome to Train Admin System ||</h1>
              <p>Enter Train no:</p>
              <input
                type="text"
                onChange={this.train_noChangeHandler}
              />
              <p>Enter updated seat no:</p>
              <input
                type="text"
                onChange={this.seatsChangeHandler}
              />
              <p>Enter updated fare:</p>
              <input
                type="text"
                onChange={this.fareChangeHandler}
              />
               <p>
              <input type='submit' value="Update"/>
              </p>
            </form>
            
            </div>
          );
    }
}
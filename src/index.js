/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from './PassengerForm';
import FormEq from './EnquiryForm';
import FormDE from './CancellationForm';
import FormTic from './Ticket';
import Button from 'react-bootstrap/Button';
  import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Train() {
  return (
    <h2 className="train">Train</h2>
  )
}


function Passenger() {
  return (
    <h2 className="paseenger">Passenger</h2>
  )
}

function Ticket() {
  return (
    <h2>Ticket</h2>
  )
}
function Cancellation(){
  return(
    <h2 className="cancellation">Cancellation</h2>
  )
}

function Default() {
  return (<Router>
    <div>
    <ul>
      <Link to="/passenger"><Button variant="/passenger">Passenger Booking</Button>{ '---->'}</Link>           
      <Link to="/train"><Button variant="/train">TrainList</Button>{ '---->'}</Link>
      <Link to="/ticket"><Button variant="/ticket">TicketDetails</Button>{ '---->'}</Link>
      <Link to="/enquiry"><Button variant="/enquiry">Helpline</Button>{ '---->' }</Link>
      <Link to="/cancellation"><Button variant="/cancellation">Cancellation</Button></Link>
    </ul> 
      <Switch>
        <Route path="/train">
          <Train />
        </Route>
        <Route path="/ticket">
          <FormTic/>
        </Route>
        <Route path="/passenger">
          <Form/>
        </Route>
        <Route path="/enquiry">
          <FormEq/>
        </Route>
        <Route path="/cancellation">
          <FormDE/>
          </Route>
      </Switch>
    </div>
  </Router>
);
}

ReactDOM.render(
  <Default />,
  document.getElementById('root')
);
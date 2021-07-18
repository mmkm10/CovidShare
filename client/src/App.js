import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from "./Components/Home/Home";
//import Footer from "./Components/Footer/Footer";
import StudentLog from './Components/Register/Student'
import MentorLog from './Components/Register/Mentor'
import Login from './Components/Register/Login'
import Public from './Components/Chatroom/Pubic/Public'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/student/register" exact component={StudentLog} />
            <Route path="/mentor/register" exact component={MentorLog} />
            <Route path="/login" exact component={Login} />
            <Route path="/chat/public" exact component={Public} />



          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;

import React, { Component } from "react";
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Home from "./homeComponent/HomeComponent";
import About from "./aboutComponent/AboutComponent";
import Flights from "./flightsComponent/FlightComponent";
import Stay from "./stayComponent/StayComponent"
import Todo from "./todoComponent/TodoComponent";
import MainNav from './navbar/Navbar';
import {fetchCheapFlights} from '../redux/ActionCreators';

const mapStateToProps = state => {
    // console.log("This is my cheap flights",state)
    return {
        cheapFlights: state.cheapFlights
    };
  };

  const mapDispatchToProps = {
    fetchCheapFlights: () => (fetchCheapFlights())
  }

class Main extends Component{

// Fetching data from the rapidApi
    componentDidMount(){
        // this.fetchData();
        console.log("This is my cheap flights", this.props.fetchCheapFlights())
    }

    // fetchData(){
    //     console.log("hello from the data")
    //     fetch("https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?destination=-&origin=ATL&currency=USD&page=3", {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
    //             "x-rapidapi-key": "PEounm683BmshmQGQxLrlA0ayOSOp1XiZsFjsnUnn1R61XFu7W",
    //             "x-access-token": "196a25486b8fa53da1d20ebb0d56475c"
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(response => {
    //         console.log("this is the data from the mainComponent", response);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // }

//----------------------




    render(){

        const HomePage = () =>{
            return(
                <Home />
            );
        }

        return(
            <div>
                <MainNav />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/flights' component={Flights}/>
                    <Route exact path='/stay' component={Stay}/>
                    <Route exact path='/todo' component={Todo}/>
                    <Route exact path='/about' component={About}/>
                    <Redirect to='/home' />
                </Switch>
            </div>
        );
    }

    

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

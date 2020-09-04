import React from "react";
// import Jumboimage from '../jumboImage/JumboImage';
import {Jumbotron} from 'reactstrap';
import './JumboImage.css';

function Home(props){
    return(
        <div>
            <Jumbotron className="jumboImage"></Jumbotron>
        </div>
    );
}

export default Home;
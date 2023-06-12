import React, {Component} from "react";
import Message from "./message";
import Exchange from "./exchange";
import Counter from "./counter";
import Gallery from "./gallery";
import Color from "./formColor";
import Movie from "./movie";


 export default class AppHw extends Component{
    render(){
        return(
        <div className="container">
            <Message msg="First 1" bg="red"/>
            <Message msg="Second 2" bg="rgb(0,255,255)"/>
            <hr/>
            <Exchange/>
            <hr/>
            <Counter/>
            <hr/>
            <Gallery/>
            <hr/>
            <Color/>
            <hr/>
            <Movie/>

        </div>
        )
    }
 }
import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
    state = {
        cards,
        score: 0,
        highscore: 0
    };

    endGame = () => {
        if(this.state.score > this.state.highscore) {
            this.setState({highscore: this.state.score}, function(){
                console.log(this.state.highscore);
            });
        }
        this.state.cards.forEach(card => {
            card.count = 0;
        });
        this.setState({score:0});
        return true;
    }
}
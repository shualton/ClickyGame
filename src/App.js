import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";

class App extends Component {
    state = {
        cards,
        score: 0,
        highscore: 0,
        currentMessage: "Click all the characters without any repeats!"
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

    clickCount = id => {
        this.state.cards.find((click,index) => {
            if (click.id === id) {
                if(cards[index].count === 0) {
                    cards[index].count += 1;
                    this.setState({score : this.state.score +1}, function() {
                        console.log(this.state.score);
                    });
                    this.state.cards.sort(() => Math.random() - 0.5)
                    this.setState({currentMessage : "Nice! Keep going"}, function() {
                        console.log(this.state.currentMessage);
                    });
                    return true;
                } else {
                    this.setState({currentMessage : "Game Over: Try Again!"}, function() {
                        console.log(this.state.currentMessage);
                    });
                    this.endGame();
                }
            }
            
        });
    }

    render() {
        return (
          <Wrapper>
            <Header score={this.state.score} highscore={this.state.highscore} currentMessage={this.state.currentMessage}>
                Clicky Time!
                </Header>
            {this.state.cards.map(card => (
              <Card
                clickCount={this.clickCount}
                id={card.id}
                key={card.id}
                image={card.image}
              />
            ))}
          </Wrapper>
        );
      }
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      clickedButtonIndex:1,
      images:[
        "https://www.apa.org/images/2020-03-feature-giraffe_tcm7-269465.png",
        "https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/A-G/cheetah-mom-cubs.adapt.470.1.jpg",
        "https://www.peta.org/wp-content/uploads/2018/05/tiger.jpg",
      ],
    }
  }

  changeButton(index){
    if(this.state.clickedButtonIndex != index){
      this.setState({clickedButtonIndex:index});
    }
  }

  cycleChange(){
    this.setState({clickedButtonIndex:(this.state.clickedButtonIndex % 3) + 1});
  }

  render(){
    return (
      <div>
        <button onClick={() => this.changeButton(1)} style={{marginTop:"50px",marginLeft:"50px",position:"absolute",background:this.state.clickedButtonIndex == 1?"red":"grey"}}>Button 1</button>

        <button onClick={() => this.changeButton(2)} style={{marginTop:"100px",marginLeft:"50px",position:"absolute",background:this.state.clickedButtonIndex == 2?"red":"grey"}}>Button 2</button>

        <button onClick={() => this.changeButton(3)} style={{marginTop:"150px",marginLeft:"50px",position:"absolute",background:this.state.clickedButtonIndex == 3?"red":"grey"}}>Button 3</button>

        <img onClick={() => this.cycleChange()} src={this.state.images[this.state.clickedButtonIndex-1]} height="300" width="300" style={{position:"absolute",marginLeft:"150px",marginTop:"100px"}}/>
      </div>
    );
  }
  
}

import React from 'react';
import logo from './logo.svg';
import axios from "axios";
import './App.css';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      movies:[],
      message:"There are no movies to preview",
    }
  }

  componentDidMount(){
    this.fetchMovies();
  }

  fetchMovies = async () => {
    const response = await axios.get("http://localhost:8088/movies");
    if(response.status == 200){
      this.setState({movies:response.data.movies});
    }else{
      this.setState({message:"Failed to connect to server to fetch movies"})
    }
  }

  render(){
    return(
      this.state.movies.length == 0?
      <p>{this.state.message}</p>
      :
      <ul>
        {
          this.state.movies.map((value,index) => {
            return <li key={index}>{value}</li>
          })
        }
      </ul>
    )
  }
}

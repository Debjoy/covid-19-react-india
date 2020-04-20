import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Overview from './components/overview';
import Statewise from './components/statewise';
import axios from 'axios';


class App extends Component {
  state = { 
    summary:null,
    dataUpdate:0,
    regional:[]
   }

  componentDidMount(){
    axios.get("https://api.rootnet.in/covid19-in/stats/latest")
    .then(response =>{
      if(response.data.success===true){
        let newdataUpdate=this.state.dataUpdate+1;
        this.setState({
          summary:response.data.data.summary,
          dataUpdate:newdataUpdate,
          regional:response.data.data.regional
        })
      }
      
      else
      console.log("error");
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    const {summary,dataUpdate,regional} =this.state;

    return ( <div className="App">
    <h1 className="massive-watermark">COVID-19</h1>
    <h1 className="massive-watermark-bottom">INDIA</h1>
    <Header/>
    <div className="container content">
      <div className="row">
        <Overview summary={summary} key={dataUpdate+"overview"}/>
        <Statewise regional={regional} key={dataUpdate+"regional"}/>
      </div>
    </div>
  </div> );
  }
}
 
export default App;

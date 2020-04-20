import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Overview from './components/overview';
import Statewise from './components/statewise';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = { 
    summary:null,
    dataUpdate:0,
    regional:[],
    lastUpdateMins:0,
    lastUpdateHrs:0
   }

  componentDidMount(){
    this.loadData();
  }

  loadData=()=>{
    axios.get("https://api.rootnet.in/covid19-in/stats/latest")
    .then(response =>{
      if(response.data.success===true){
        let newdataUpdate=this.state.dataUpdate+1;
        let time_in_mins=(new Date()-new Date(response.data.lastOriginUpdate))/(1000*60);
        let time_in_hrs=Math.round(time_in_mins/60);        
        time_in_mins=time_in_mins>60?time_in_mins%60:time_in_mins;
        if(this.state.dataUpdate>0)
        toast.success("Data Refreshed",{
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
          });
        this.setState({
          summary:response.data.data.summary,
          dataUpdate:newdataUpdate,
          regional:response.data.data.regional,
          lastUpdateMins:time_in_mins,
          lastUpdateHrs:time_in_hrs
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
    const {summary,dataUpdate,regional,lastUpdateMins,lastUpdateHrs} =this.state;

    return ( <div className="App">
    <h1 className="massive-watermark">COVID-19</h1>
    <h1 className="massive-watermark-bottom">INDIA</h1>
    <Header/>
    <div className="container content">
      <div className="row">
      <Statewise regional={regional} key={dataUpdate+"regional"}/>
        <Overview summary={summary} onRefresh={this.loadData} lastUpdateHrs={lastUpdateHrs} lastUpdateMins={lastUpdateMins} key={dataUpdate+"overview"}/>
        
      </div>
    </div>
    <ToastContainer />
  </div> );
  }
}
 
export default App;

import React, { Component } from 'react';
import { Line } from 'react-peity';
import Footer from './footer';
import axios from 'axios'

class Overview extends Component {
    state = { 
        summary:this.props.summary,
        total_cases_time_series:[],
        recovered_cases_time_series:[],
        deaths_cases_time_series:[],
        active_cases_time_series:[],
        max:0,
        lastUpdateMins:this.props.lastUpdateMins,
        lastUpdateHrs:this.props.lastUpdateHrs
     }
    componentDidMount(){
        axios.get("https://api.covid19india.org/data.json").then(response => {

            let total_cases=[];
            let recovered=[];
            let deaths=[];
            let active=[];
            let localMax=this.state.max;
            for(var i=0;i<response.data.cases_time_series.length;i++){
                total_cases.push(response.data.cases_time_series[i].dailyconfirmed);
                recovered.push(response.data.cases_time_series[i].dailyrecovered);
                deaths.push(response.data.cases_time_series[i].dailydeceased);
                active.push(total_cases[i]-recovered[i]-deaths[i]);
                if(localMax<total_cases[i])
                localMax=total_cases[i];
            }

            this.setState({
                total_cases_time_series:total_cases,
                recovered_cases_time_series:recovered,
                deaths_cases_time_series:deaths,
                active_cases_time_series:active,
                max:localMax
            })
        }).catch(error => {
            console.log(error);
        })
    }

    
    render() { 
        return ( <div className="col-md-6 section overview">
        <h3 className="section-title">Overview</h3>
        <div className="section-content">
            <div className="card-holder">
                <div className="mcard mcard-primary">
                    <p className="value-label">Confirmed</p>
                    <Line values={this.state.total_cases_time_series} height={32} width={70} fill="none" strokeWidth={2} stroke="#FFF" min={0} max={parseInt(this.state.max+1)} />
                    <p className="main-value">{this.state.summary?this.state.summary.total: 0}</p>
                </div>
                <div className="mcard mcard-success">
                    <p className="value-label">Recoverd</p>
                    <Line values={ this.state.recovered_cases_time_series } height={32} width={70} fill="none" strokeWidth={2} stroke="#FFF" min={0} max={parseInt(this.state.max+1)} />
                    <p className="main-value">{this.state.summary?this.state.summary.discharged: 0}</p>
                </div>
            </div>
            <div className="card-holder">
                <div className="mcard mcard-danger">
                    <p className="value-label">Deaths</p>
                    <Line values={this.state.deaths_cases_time_series } height={32} width={70} fill="none" strokeWidth={2} stroke="#FFF" min={0} max={parseInt(this.state.max+1)} />
                    <p className="main-value">{this.state.summary?this.state.summary.deaths: 0}</p>
                </div>
                <div className="mcard mcard-info">
                    <p className="value-label">Active</p>
                    <Line values={ this.state.active_cases_time_series}  height={32} width={70} fill="none" strokeWidth={2} stroke="#FFF" min={0} max={parseInt(this.state.max+1)} />
                    <p className="main-value">{this.state.summary?this.state.summary.total-this.state.summary.discharged-this.state.summary.deaths: 0}</p>
                </div>
            </div>
        </div>
        <div className="section-content updates">
            <p className="lead last-update">last updated {Math.round(this.state.lastUpdateHrs)} hrs {Math.round(this.state.lastUpdateMins)} minutes ago</p>
            <button className="butn refresh-btn" onClick={this.props.onRefresh}>Refresh <i className="fas fa-redo-alt"></i></button>
        </div>
        <div className="section-content footer-aside">
             <Footer />
        </div>
        
    </div>  );
    }
}
 
export default Overview;
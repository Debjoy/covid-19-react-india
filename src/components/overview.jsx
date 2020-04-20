import React, { Component } from 'react';
import { Line } from 'react-peity';

class Overview extends Component {
    state = {  }
    render() { 
        return ( <div className="col-md-6 section">
        <h3 className="section-title">Overview</h3>
        <div className="section-content">
            <div className="card-holder">
                <div className="mcard mcard-primary">
                    <p className="value-label">Confirmed</p>
                    <Line values={ [5, 7, 12, 20] } height={32} width={70} fill="none" strokeWidth={2} stroke="#FFF" min={0} max={null} />
                    <p className="main-value">15,453</p>
                </div>
                <div className="mcard mcard-success">
                    <p className="value-label">Recoverd</p>
                    <Line values={ [5, 7, 12, 14, 11] } height={32} width={70} fill="none" strokeWidth={2} stroke="#FFF" min={0} max={null} />
                    <p className="main-value">15,453</p>
                </div>
            </div>
            <div className="card-holder">
                <div className="mcard mcard-danger">
                    <p className="value-label">Deaths</p>
                    <Line values={ [5, 7, 12, 14, 11] } height={32} width={70} fill="none" strokeWidth={2} stroke="#FFF" min={0} max={null} />
                    <p className="main-value">15,453</p>
                </div>
                <div className="mcard mcard-info">
                    <p className="value-label">Active</p>
                    <Line values={ [5, 7, 12, 14, 11] } height={32} width={70} fill="none" strokeWidth={2} stroke="#FFF" min={0} max={null} />
                    <p className="main-value">15,453</p>
                </div>
            </div>
        </div>
        <div className="section-content updates">
            <p className="lead last-update">last updated 12hrs ago</p>
            <button className="refresh-btn">Refresh <i className="fas fa-redo-alt"></i></button>
        </div>
    </div>  );
    }
}
 
export default Overview;
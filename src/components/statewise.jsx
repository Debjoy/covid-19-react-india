import React, { Component } from 'react';
class Statewise extends Component {
    state = { 
        regional:this.props.regional
     }
    render() { 
        const {regional} =this.state;
        return (
            <div className="col-md-6 section statewise">
            <h3 className="section-title">State-wise</h3>
            <div className="table-responsive">
            <table className="section-content table table-borderless">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th >Confirmed</th>
                        <th>Recoverd</th>
                        <th >Deaths</th>
                        <th >Active</th>
                      </tr>
                </thead>
                <tbody>
                    {regional.length>0?regional
                    .sort((a,b)=>b.totalConfirmed-a.totalConfirmed)
                    .map((data)=>
                        <tr className="mcard-inline" key={data.loc}>
                            <td className="cell-text">{data.loc}</td>
                            <td className="cell cell-primary">{data.totalConfirmed}</td>
                            <td className="cell cell-success">{data.discharged}</td>
                            <td className="cell cell-danger">{data.deaths}</td>
                            <td className="cell cell-info">{data.totalConfirmed-data.discharged-data.deaths}</td>
                        </tr>   
                    ): 
                    <tr className="mcard-inline">
                    </tr>}
                    
                </tbody>
                
            </table>
        </div>
        </div> );
    }
}
 
export default Statewise;
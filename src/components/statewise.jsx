import React, { Component } from 'react';
class Statewise extends Component {
    state = {  }
    render() { 
        return (
            <div className="col-md-6 section ">
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
                    <tr className="mcard-inline">
                        <td className="cell-text">Andaman and Nicobar Islands</td>
                        <td className="cell cell-primary">15,632</td>
                        <td className="cell cell-success">534</td>
                        <td className="cell cell-danger">236</td>
                        <td className="cell cell-info">10012</td>
                    </tr>
                    <tr className="mcard-inline">
                        <td className="cell-text">Andaman and Nicobar Islands</td>
                        <td className="cell cell-primary">0</td>
                        <td className="cell cell-success">0</td>
                        <td className="cell cell-danger">0</td>
                        <td className="cell cell-info">0</td>
                    </tr>                        
                    <tr className="mcard-inline">
                        <td className="cell-text">Andaman and Nicobar Islands</td>
                        <td className="cell cell-primary">15,632</td>
                        <td className="cell cell-success">534</td>
                        <td className="cell cell-danger">236</td>
                        <td className="cell cell-info">10012</td>
                    </tr>
                    <tr className="mcard-inline">
                        <td className="cell-text">Andaman and Nicobar Islands</td>
                        <td className="cell cell-primary">0</td>
                        <td className="cell cell-success">0</td>
                        <td className="cell cell-danger">0</td>
                        <td className="cell cell-info">0</td>
                    </tr>
                    <tr className="mcard-inline">
                        <td className="cell-text">Andaman and Nicobar Islands</td>
                        <td className="cell cell-primary">15,632</td>
                        <td className="cell cell-success">534</td>
                        <td className="cell cell-danger">236</td>
                        <td className="cell cell-info">10012</td>
                    </tr>
                    <tr className="mcard-inline">
                        <td className="cell-text">Andaman and Nicobar Islands</td>
                        <td className="cell cell-primary">15,632</td>
                        <td className="cell cell-success">534</td>
                        <td className="cell cell-danger">236</td>
                        <td className="cell cell-info">10012</td>
                    </tr>
                </tbody>
                
            </table>
        </div>
        </div> );
    }
}
 
export default Statewise;
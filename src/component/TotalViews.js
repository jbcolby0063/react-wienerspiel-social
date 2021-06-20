import React, {Component, useState, useEffect} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

//npm install create-react-app reactcharts
//create-react-app reactcharts
//npm install react-chartjs-2
//npm i bootstrap react-bootstrap
//npm install react-router-dom

/*

class TotalViews extends Component {

    constructor(props) { // run when component is initialized
        super(props);
    
        this.state = { // to keep data (an object)
            barChartData: props.barChartData, // from main file
        }
    }
    

    render() {
        return (
            <div className="chart">
                <Bar
                  data={this.state.barChartData} // this.state is object
                  options={{
                      responsive:false
                  }}
                >
                </Bar>
            </div>
        )
    }
}
*/

function TotalViews() {
    const [totalViews, setTotalViews] = useState({})

    const views = () => {
        setTotalViews({
            labels: ['Instagram','Facebook','Twitter'],
            datasets: [
                {
                    label: 'Total Views',
                    data: [50, 70, 40],
                }
            ]
        })
    }

    useEffect(() => {
        views()
    }, [])

    return (
        <div className="chart">
            <Bar
                data={totalViews} // this.state is object
                options={{
                    responsive:false
                }}
            >
            </Bar>
        </div>
    )

}

export default TotalViews;
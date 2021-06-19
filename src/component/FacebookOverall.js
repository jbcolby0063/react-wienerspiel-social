import React, { Component, useState, useEffect } from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2';

function FacebookOverall() {
    const [overallViews,setOverallViews] = useState({})
    const [gender, setGender] = useState({})

    const data = () => {
        setOverallViews({
            labels: ["1/6/2021","8/6/2021","15/6/2021","22/6/2021","29/6/2021","6/7/2021","13/7/2021"],
            datasets:[
                {
                label: 'Facebook Views Per Week',
                data: [10,20,30,25,35,50,55]        
                }
            ]
        })

        setGender({
            labels: ["Men","Women"],
            datasets:[
                {
                label: "Views by Gender",
                data: [40,60]
                }
            ]
        })

    }

    useEffect(() => {
        data()
    }, [])

    return(
        <div className="facebook">
            <Line
                data={overallViews} // this.state is object
                options={{
                    responsive:false
                }}
            >
            </Line> 
            <Pie
                data={gender}
                options={{
                    responsive:false
                }}
            >
            </Pie>                           
        </div>
    )
}

export default FacebookOverall

/*

class FacebookOverall extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            lineChartData: props.lineChartData,
            pieChartData: props.pieChartData
        }
    }
    
    render() {
        return (
            <div className="facebook">
                <Line
                  data={this.state.lineChartData} // this.state is object
                  options={{
                      responsive:false
                  }}
                >
                </Line> 
                <Pie
                  data={this.state.pieChartData}
                  options={{
                      responsive:false
                  }}
                >
                </Pie>                           
            </div>
        )
    }
}

export default FacebookOverall
*/

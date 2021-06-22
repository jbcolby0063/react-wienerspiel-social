import React, { Component, useState, useEffect } from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2';
import {Card} from 'react-bootstrap'

function FacebookOverall() {
    //const [overallViews,setOverallViews] = useState({})
    const [gender, setGender] = useState({})
    const [ageImpressions, setAgeImpressions] = useState({})
    const [engagement, setEngagement] = useState(15)

    const data = () => {
        /*
        setOverallViews({
            labels: ["1/6/2021","8/6/2021","15/6/2021","22/6/2021","29/6/2021","6/7/2021","13/7/2021"],
            datasets:[
                {
                    label: 'Facebook Views Per Week',
                    data: [10,20,30,25,35,50,55],
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(187, 1, 1, 0.3)",
                    borderColor: "red", // The main line color
                    borderDashOffset: 0.0,
                    pointBackgroundColor: "white",
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 10,   
                }
            ]
        })
        */

        setGender({
            labels: ["Men","Women"],
            datasets:[
                {
                data: [40,60],
                backgroundColor: [
                    "#3b5998","rgba(187, 1, 1, 0.5)"],
                borderColor: "white",
                },

            ]
        })

        setAgeImpressions({
            labels: ["Under 18", "18 to 25", "25 to 34", "35 to 44", "45 to 54","55 to 64","65 and above"],
            datasets:[
                {
                    label: "Views by Age",
                    data: [14,30,50,16,15,8,4],
                    backgroundColor: "#3b5998",
                   
                }
            ]
        })
    }
    

    useEffect(() => {
        data()
    }, [])

    return(
        <div className="facebook">
            <h3 style={{textAlign: 'center', color:'grey', textDecoration:'underline'}}> Weekly Engagement: {engagement}</h3> <br></br>
            {/* <Line
                data={overallViews} // this.state is object
                options={{
                    responsive:false
                }}
            >
            </Line> */}
            <Pie
                data={gender}
                options={{
                    responsive:false,
                    plugins: {
                        title: {
                            display:true,
                            text: "Views by Gender"
                        }
                    }
                }}
            >
            </Pie>    
            <br></br>
            <Bar
                data={ageImpressions}
                options={{
                    responsive:false,
                    scales: {
                        y: {
                            min: 0,
                            max: 50
                        }
                    }
                }}
            ></Bar>                       
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

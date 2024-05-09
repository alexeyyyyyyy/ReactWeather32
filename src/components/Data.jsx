import {Component} from 'react';
import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {API_KEY, BASE_URL} from "../utils/constants.js";

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherInfo:{},
            message:'Enter city name'
        }
    }
    getWeather = (city) => {

        fetch(`${BASE_URL}/data/2.5/` + `weather?q= ${city}&appid=${API_KEY}&units=metric`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    weatherInfo: {
                        country: data.sys.country,
                        city: data.name,
                        temp:data.main.temp ,
                        pressure:data.main.pressure,
                        weather1:data.weather[0].main
                    },
                    message: null
                })

            })
            .catch(error => {
                console.error('Ошибка при загрузке данных:', error);
                this.setState({
                    weatherInfo:{
                    errorFound: "City not found,Try again"
                }
                });
            });

    } //Todo Create Styles +++
    //todo catch Error with if country doesnt exists
    //Todo create adaptive*
    //Todo ** create web site
    // todo *** clean code book
    render() {
        return (
                <div>
                    <Form getWeather ={this.getWeather}/>
                    <Weather message={this.state.message} weatherInfo={this.state.weatherInfo}/>
                </div>
        );
    }
}

export default Data;

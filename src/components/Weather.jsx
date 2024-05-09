const Weather = ({ message, weatherInfo }) => {
    const imageStyles = {
        width: '230px',
        height: '170px',
        marginRight: '10px'
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '20px' }}>Weather Information</h2>
            {weatherInfo.errorFound &&
                <p style={{ color: 'red', fontSize: '18px', fontWeight: 'bold' }}>{weatherInfo.errorFound}</p>
            }
            {!weatherInfo.errorFound &&
                <div>
                    <p><strong>Location:</strong> {weatherInfo.country} {weatherInfo.city}</p>
                    <p><strong>Temperature:</strong> {weatherInfo.temp}°C</p>
                    <p><strong>Pressure:</strong> {weatherInfo.pressure}</p>
                    <p><strong>Weather Condition:</strong></p>
                    {weatherInfo.weather1 === "Clear" && <img src='../../Images/Solnecnho.png' alt='Sunshine' style={imageStyles} />}
                    {weatherInfo.weather1 === "Lightning" && <img src='../../Images/Groza.png' alt='Groza' style={imageStyles} />}
                    {weatherInfo.weather1 === "Rain" && <img src='../../Images/Rain.png' alt='Rain' style={imageStyles} />}
                    {weatherInfo.weather1 === "Snow" && <img src='../../Images/Winter.png' alt='Snow' style={imageStyles} />}
                    {weatherInfo.weather1 === "Clouds" && <img src='../../Images/Clouds.png' alt='Clouds' style={imageStyles} />}
                </div>
            }
        </div>
    );
};

export default Weather;

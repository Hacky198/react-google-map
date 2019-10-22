import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import './styles/styles.css';


class GoogleMapWithState extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            lat:'',
            long:''
        }
    }
    

    handleChange =(event, key) => {
        this.setState(state => {
            state[key] = event.target.value
            return state;
        });
    }
    
    getLocation = (event) => {
        
        let lng = this.state.lat;
        let lat = this.state.long;
        mapboxgl.accessToken = 'pk.eyJ1IjoiaGl0ZW4xOTgiLCJhIjoiY2sxdWtyN2cxMDV6eDNtbzZ6YmdtdHUzOSJ9.sBZjpWTcXAon-rEX3uG0nA';
                const map = new mapboxgl.Map({
                    container: this.mapContainer,
                    style: 'mapbox://styles/mapbox/streets-v11'
                });
                var setMapCordinates = new mapboxgl.Popup({closeOnClick: true})
                .setLngLat([lng,lat]).setHTML("AMAN")
                .addTo(map);
                console.log(map.transform.latRange)
                event.preventDefault();
    }

    render(){
        const style = {
            width: '100%',
            height:'500px'
        };
        return(
            <div>
                <form onSubmit={this.getLocation}>
                    <label>Lat</label><br/><input type="text" value={this.state.lat} onChange={() => this.handleChange(event, 'lat')}></input><br/><br/><br/>
                    <label>Lng</label><br/><input type="text" value={this.state.long} onChange={() => this.handleChange(event ,'long')}></input><br/><br/><br/>
                    <input type="submit" value="Get Details" /><br/><br/>
                    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css' rel='stylesheet' />
                    <div style={style} ref={el => this.mapContainer = el} />
                </form>
            </div>
            
        )
    }
}

export default GoogleMapWithState
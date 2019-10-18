import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import './styles/styles.css';


class GoogleMap extends React.Component{
    

    
    getLocation = () => {
        let lng = parseFloat(this._name1.value)
        let lat = parseFloat(this._name2.value)
        mapboxgl.accessToken = 'pk.eyJ1IjoiaGl0ZW4xOTgiLCJhIjoiY2sxdWtyN2cxMDV6eDNtbzZ6YmdtdHUzOSJ9.sBZjpWTcXAon-rEX3uG0nA';
                const map = new mapboxgl.Map({
                    container: this.mapContainer,
                    style: 'mapbox://styles/mapbox/streets-v11'
                });
                var setMapCordinates = new mapboxgl.Popup({closeOnClick: true})
                .setLngLat([lng,lat]).setHTML("AMAN")
                .addTo(map);
                debugger;
                console.log(map.transform.latRange)
    }

    render(){
        const style = {
            
            width: '100%',
            height:'500px'

          };
        return(
            <div>
                <label>Lat</label><br/><input type="text" ref={input => this._name1 = input}></input><br/><br/><br/>
                <label>Lng</label><br/><input type="text" ref={input => this._name2 = input}></input><br/><br/><br/>
                <button onClick={this.getLocation}>Get Details</button><br/><br/>
                <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css' rel='stylesheet' />
                <div style={style} ref={el => this.mapContainer = el} />
            </div>
            
        )
    }
}

ReactDOM.render(<GoogleMap/>, document.getElementById('root'));
import React, { Component } from 'react';
import { Dimensions,View, StyleSheet } from 'react-native';
import MapView,{ PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-google-maps-directions';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 17.371610;
const LONGITUDE = 78.500061;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;







const GOOGLE_MAPS_APIKEY = 'AIzaSyCmdTRPhJZi5ThWQqKNKyZyk9Sxt_MSUvY';

class locationA extends Component {

  constructor(props) {
    super(props);

    // AirBnB's Office, and Apple Park
    this.state = {
      coordinates: [
        {
          latitude: 37.3317876,
          longitude: -122.0054812,
        },
        {
          latitude: 37.771707,
          longitude: -122.4053769,
        },
      ],
    };

    this.mapView = null;
  }

  onMapPress = (e) => {
    this.setState({
      coordinates: [
        ...this.state.coordinates,
        e.nativeEvent.coordinate,
      ],
    });
  }


  
  render() {
    return (
      <View style={{flex:1}}>
      <MapView 
     
      showsUserLocation={true}
          showsMyLocationButton={true}
					showsUserLocation={true}
					showsMyLocationButton={true}
					showsCompass={true}
					followsUserLocation={true}
					loadingEnabled={true}
					toolbarEnabled={true}
					zoomEnabled={true}
					rotateEnabled={true}
      provider={ PROVIDER_GOOGLE }
      
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        style={[StyleSheet.absoluteFill,{flex: this.state.flex}]}
        ref={c => this.mapView = c}
        onPress={this.onMapPress}
        
      >
        {this.state.coordinates.map((coordinate, index) =>
          <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} key={`coordinate_${index}`} coordinate={coordinate} />
        )}
        {(this.state.coordinates.length >= 10) && (
          <MapViewDirections
            origin={this.state.coordinates[2]}
            waypoints={ (this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1): null}
            destination={this.state.coordinates[this.state.coordinates.length-1]}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="red"
            optimizeWaypoints={true}
            onStart={(params) => {
              console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
            }}
            onReady={result => {
              console.log('Distance: ${result.distance} km')
              console.log('Duration: ${result.duration} min.')

              this.mapView.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: (width / 20),
                  bottom: (height / 20),
                  left: (width / 20),
                  top: (height / 20),
                }
              });
            }}
            onError={(errorMessage) => {
              // console.log('GOT AN ERROR');
            }}
          />
        )}
        
      </MapView>
      </View>
      
    );
  }
}

export default locationA ;

const styles = StyleSheet.create ({
  mapstyle: {
    flex:1,
     height: 400,
     marginTop: 80,
     margin:20,
  }
})
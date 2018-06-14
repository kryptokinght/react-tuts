import React, {Component} from 'react';

class GoogleMap extends Component {
	componentDidMount() { //this method will render our map
		new google.maps.Map(this.refs.map, { //takes in a reference element and options object
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}
	//here div is the element where we want to render our Google map
	render() {
		return <div ref="map" />;
	}
}

export default GoogleMap;

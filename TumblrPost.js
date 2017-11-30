//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';


// create a component
class TumblrPost extends Component {
    render() {

        const img = {
            uri: this.props.post.photos[0].original_size.url
        }
        return (
            <TouchableHighlight onPress={() => {alert()}}>
                <Image style={styles.image} source={img} />
            </TouchableHighlight>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    image: {
        height: 300,
        width: 150
    }
});

//make this component available to the app
export default TumblrPost;

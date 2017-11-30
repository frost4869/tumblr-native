//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import TumblrPost from './TumblrPost'

// create a component
class TumblrList extends Component {
    render() {
        const props = this.props.screenProps;
        return (
            <FlatList
                data={props.posts}
                keyExtractor={(post) => post.id}
                renderItem={(postItem) => {
                    return <TumblrPost post={postItem.item} />
                }}
                onEndReached={props.handleLoadmore}
                onEndReachedThreshold={0.05}
                ListFooterComponent={() => 
                    <View>
                        <ActivityIndicator size="large"/>
                    </View>
                }
            />
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
});

//make this component available to the app
export default TumblrList;

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    Button,
    TouchableOpacity,
    Dimensions
} from 'react-native';
var { height, width } = Dimensions.get('window');

export default class Home extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('ExpoScan')
                        }}>
                        <Text style={styles.text}>掃描</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        marginTop: 15,
        padding: 15,
        backgroundColor: 'black',
        marginTop: 20,
        width: width * 0.8,
    },
    text:{
        color:'white',
        fontSize: 25,
        textAlign: 'center',
    }
});
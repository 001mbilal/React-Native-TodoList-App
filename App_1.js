import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {

    return (
        <View style={{padding:50,width:'80%', height:200,width:'80%'}}>
        <View style={{
        backgroundColor:'red',
        alignItems:'stretch',
        justifyContent:'center',
        flex:1}}>
            <Text>1</Text>
        </View>
        <View style={{
        backgroundColor:'yellow',
        alignItems:'stretch',
        justifyContent:'center',
        flex:1}}>
        <Text>2</Text>
        </View>
        <View style={{
        backgroundColor:'blue',
        alignItems:'stretch',
        justifyContent:'center',
        flex:1}}>
        <Text>3</Text>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
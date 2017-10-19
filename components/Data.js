import React from 'react';
import { Text, View } from 'react-native';

export default Data = (data) => {
    return (
        <View style={{ marginBottom: 15, marginTop: 15 }}>
            <Text>Date: {data.date}</Text>
            <Text>Time: {data.time}</Text>
            <Text>Destination: {data.destination}</Text>
            <Text>Origin Location: {data.location}</Text>
            <Text>Issue: {data.issue}</Text>
        </View>
    );
}
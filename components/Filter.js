import React, {Component} from 'react';
import {Picker, Button, View, Text} from 'react-native';
import {filterChanged, filterSelected} from '../reducers/counter';
import {connect} from 'react-redux';
import Data from './Data';

const mapStateToProps = (state) => ({
    filter: state.data.filter,
    filterSelected: state.data.filterSelected,
    postInfo: state.data.postInfo,
});

class Filter extends Component {
    componentWillMount() {
        this.filter = {};
        this.setState({
            destination: ''
        });
    }

    handleSubmit() {
        this.props.dispatch(filterSelected(true));
    }
    handleChange(text, field) {
        if (text !== 'destination') {
            this.props.dispatch(filterChanged(text));
        }
    }
    render() {
        console.log('check this HERE: ', this.props.filterSelected);
        if (!this.props.filterSelected) {
            return (
                <View>
                    <Picker
                        style={{ marginBottom: 3 }}
                        selectedValue={this.props.filter}
                        onValueChange={(itemValue, itemIndex) => this.handleChange(itemValue, 'destination')}>
                        <Picker.Item label="Please select a destination to filter by" value="destination" />
                        <Picker.Item label="Port Authority" value="port-authority" />
                        <Picker.Item label="Red Bank" value="red-bank" />
                        <Picker.Item label="Monmouth" value="monmouth" />
                        <Picker.Item label="PNC Arts Center" value="pnc" />
                        <Picker.Item label="Forked River" value="forked-river" />
                    </Picker>
                    <Button
                        title="Submit Filter"
                        onPress={() => this.handleSubmit()} />
                </View>
            )
        } else {
            let pulled = [];
            let k = 0;
            for (let datum of this.props.postInfo) {
                let format = datum.destination.split(' ');
                format = format.join('-');
                format = format.toLowerCase();
                if (this.props.filter === format) {
                    datum.k = k;
                    pulled.push(datum);
                }
                k++;
            }

            return (
                <View>
                {pulled.map(info => 
                    <Data key={info.k} {...info} />
                )}
                </View>
            );
        }

    }
}

export default connect(mapStateToProps)(Filter);
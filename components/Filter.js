import React, {Component} from 'react';
import {Picker, Button, View, Text} from 'react-native';
import {filterChanged, filterSelected, resetFilter} from '../reducers/counter';
import {connect} from 'react-redux';
import Data from './Data';

const mapStateToProps = (state) => ({
    filter: state.data.filter,
    filterSelected: state.data.filterSelected,
    postInfo: state.data.postInfo,
});

class Filter extends Component {
    componentDidMount() {
        this.filterShouldExist(false);
    }

    handleSubmit() {
        this.props.dispatch(filterSelected(true));
    }
    handleChange(text, field) {
        if (text !== 'destination') {
            this.props.dispatch(filterChanged(text));
        }
    }
    filterShouldExist(data) {
        this.props.dispatch(resetFilter(data));
    }
    render() {
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
            console.log('this.props.postInfo: ', this.props.postInfo);
            for (let datum of this.props.postInfo) {
                if (datum.destination) {
                    let format = datum.destination.split(' ');
                    format = format.join('-');
                    format = format.toLowerCase();
                    if (this.props.filter === format) {
                        datum.k = k;
                        pulled.push(datum);
                    }
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
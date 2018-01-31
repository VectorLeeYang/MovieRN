import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class MovieDetail extends Component {
    // 设置默认属性
    static  defaultProps = {
        name:'liyang',
    };
    static navigationOptions = {
        title:'详情页',
    };

    render() {
        const {state,goBack} = this.props.navigation;
        return (
            <View>
                <Text>Hello {this.props.name}!</Text>
                <Text>{state.params.id}</Text>
                <Text onPress={() => {
                    state.params.callback('2134');
                    goBack();
                }}> goback</Text>
            </View>
        );
    }
}

export default MovieDetail;
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
} from 'react-native';

import MovieItem from '../components/MovieItem';
import movies from '../../movies.json';

const styles = StyleSheet.create({
    row:{
        paddingHorizontal:15,
    }
});


export default class MovieList extends Component<{}> {
    static navigationOptions = {
        title:'列表页',
    };
    render() {
        const {navigate} = this.props.navigation;
        state = ({
            childstate:'22'
        })
        return (
            <View >
                <Text>{this.childstate}</Text>
                <FlatList
                    numColumns = {3}
                    columnWrapperStyle = {styles.row}
                    keyExtractor={item => item.id}
                    data = {movies.subjects}
                    renderItem = {({item}) => <MovieItem
                        title={item.title}
                        image={item.images.medium}
                        stars={item.rating.stars}
                        onPress={()=> navigate('Detail',{
                            id:item.id,
                            callback:(datas)=>{
                                this.setState({
                                    childstate:datas
                                })
                            }
                        })}
                    />}
                />

            </View>
        );
    }
}

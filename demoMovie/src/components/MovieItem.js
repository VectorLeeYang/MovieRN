import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const thirdWidth = width / 3;
const imageWidth = thirdWidth - 10 * 2;
const imageHeight = imageWidth / 0.697;


const style = StyleSheet.create({
    root:{
        marginTop:20,
        width:imageWidth,
       // alignItems:'center',
        marginRight:15,
    },
    image:{
        width:imageWidth,
        height:imageHeight
     },
    title:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:5,
    },
    starsWrapper:{
        flexDirection:'row',
    },
    stars:{
        width:10,
        height:10,
    }
});


// class MovieItem extends Component {
//     render(){
//         const {title, image} = this.props;
//         return (
//             <View style={style.root}>
//                 <Image
//                     source={{uri:image}}
//                     style={style.image}
//                 />
//                 <Text
//                     style={style.title}
//                     numberOfLines={1}
//                 >
//                     {title}
//                 </Text>
//             </View>
//         )
//     }
// }

const  renderStars = (stars) => {
    if (stars === '00'){
        return undefined;
    }
    const total = 5;
    let full,half,empty;
    full =  parseInt(stars[0]) -1 ;
    if (stars[1] === '5'){
        full++;
        half = 0;
        empty = total - full;
    }else {
        half = 1;
        empty = total -full - half;
    }
    const resArray = [];
    let  i ;
    for (i = 0;i < full;i++) {
        resArray.push(<Image
            key = {i}
            style={style.stars}
            source={ require('../img/star-full.png')}
        />)
    }
    if (half) {
        i++;
        resArray.push(<Image
            key = {i}
            style={style.stars}
            source={ require('../img/star-half.png')}
        />)
    }
    for (let j = 0;j < empty;i++) {
        resArray.push(<Image
            key = {j+i+1}
            style={style.stars}
            source={ require('../img/star-empty.png')}
        />)
    }

    return (
        <View style={style.starsWrapper}>
            {resArray}
        </View>
    );
}

// 纯函数组件，不依赖state，性能高
 const MovieItem = (props) => {
        const {title, image, stars, onPress} = props;
        return (
            <TouchableOpacity style={style.root} onPress={onPress}>
                <Image
                    source={{uri:image}}
                    style={style.image}
                />
                <Text
                    style={style.title}
                    numberOfLines={1}
                >
                    {title}
                </Text>
            </TouchableOpacity>
        );
}



export default MovieItem;
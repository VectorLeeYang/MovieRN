/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {
    StackNavigator,
} from 'react-navigation';

import MovieList from './pages/MovieList'
import MovieDetail from './pages/MovieDetail'


const App = StackNavigator({
    List: { screen: MovieList },
    Detail: { screen: MovieDetail },
});

export default App;
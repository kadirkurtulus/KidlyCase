import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import * as screens from '../screens';
import { MovieDetailHeader } from '../component';
import { MovieHeader } from '../component/header/movie/movie-header';

const Stack = createStackNavigator();


function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'screen',
      }}
    >
      <Stack.Screen name="Movie" component={screens.MovieScreen}
        options={{
          header: (props) => <MovieHeader title="Watchlist" {...props} />
        }} />

      <Stack.Screen name="MovieDetail" component={screens.MovieDetailScreen}
        options={{
          header: (props) => <MovieDetailHeader {...props} />
        }}
      />

      <Stack.Screen name="Favorite" component={screens.FavoriteScreen}
        options={{
          header: (props) => <MovieHeader title="Favorites" {...props} />
        }} />

    </Stack.Navigator>
  )
}

export { MainNavigator }
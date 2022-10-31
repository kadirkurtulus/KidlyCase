import React from 'react';
import { FlatList, Pressable, View } from 'react-native';
import { Container, MovieCard } from '../../component';
import { useSelector, useDispatch } from 'react-redux';
import { SvgHeartFill, SvgHeartOutline } from '../../assets/svg';

const FavoriteScreen = () => {

  const { favoriData } = useSelector(({ favori }) => favori);
  const dispatch = useDispatch();

  const renderItem = ({ item }) => {
    return (
      <MovieCard
        item={item}
        dispatch={dispatch}
        favoriStatus={true}
      />
    )
  };

  return (
    <Container>

      <FlatList
        keyExtractor={item => item.id}
        data={favoriData}
        renderItem={renderItem}
      />

    </Container>
  )
}

export { FavoriteScreen };
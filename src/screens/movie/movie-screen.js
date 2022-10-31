import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import api from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { Container, MovieCard } from '../../component';

const MovieScreen = () => {

  const insets = useSafeAreaInsets();
  const { favoriData } = useSelector(({ favori }) => favori);
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {

    const getData = async () => {
      api.getMovieList(10).then(res => {
        setData(res);
      }).catch(e => {
        console.log(JSON.stringify(e))
      })
    };

    getData();

  }, []);

  const getFavoriStatus = useCallback((id) => {
    return favoriData.find(x => x.id == id);
  }, [favoriData]);


  const renderItem = ({ item }) => {
    return (
      <MovieCard
        item={item}
        dispatch={dispatch}
        favoriStatus={getFavoriStatus(item.id)}
      />
    )
  };

  const seperator = () => (
    <View style={styles.seperator} />
  )

  return (
    <Container style={[styles.container, { paddingTop: insets.top }]}>

      <FlatList
        keyExtractor={item => item.id.toString()}
        data={data.results}
        renderItem={renderItem}
        ItemSeparatorComponent={seperator()}
      />

    </Container>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  seperator: {
    marginTop: 15
  },
  renderView: {
    flexDirection: 'row'
  },
})

export { MovieScreen };
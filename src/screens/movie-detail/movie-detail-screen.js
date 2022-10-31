import React, { useEffect, useState } from 'react';
import { Image, View, StyleSheet, ScrollView, Text, Pressable } from 'react-native';
import { SvgPlus } from '../../assets/svg';
import { Container } from '../../component';
import { IMAGE_URL } from '../../constants';
import { getMovieDetail } from '../../services/movie';


const MovieDetailScreen = ({ route }) => {

  const { item } = route.params;
  const [data, setData] = useState({});

  useEffect(() => {
    getMovieDetail(item.id).then(res => {
      setData(res);
    }).catch(e => {
      console.log(JSON.stringify(e))
    });
  }, []);

  return (
    <Container padding>

      <ScrollView>

        <Image source={{ uri: IMAGE_URL + data?.poster_path }}
          style={styles.img}
        />

        <View style={{ marginTop: 20, alignItems: 'center' }}>
          <Text style={styles.genres}>{data?.title}</Text>

          <View style={{ marginTop: 5 }}>
            <Text>
              <Text style={styles.subGenres}>{data?.genres?.map(x => x.name).join(", ")}</Text>
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>

          <Text style={styles.title}>{data?.title}</Text>
          <Text style={styles.overview}>{data?.overview}</Text>

        </View>

      </ScrollView>

      <View style={styles.buttonView}>

        <Pressable style={styles.watchList}>
          <SvgPlus />
          <Text>Add to watchlist</Text>
        </Pressable>

        <Pressable style={styles.watchNow}>
          <Text style={{ color: "white" }}>Watch Now</Text>
        </Pressable>

      </View>

    </Container>
  )
}

const styles = StyleSheet.create({
  img: {
    width: '80%',
    alignSelf: 'center',
    height: 400,
    marginTop: 50,
    borderRadius: 30
  },
  genres: {
    fontSize: 18,
    fontWeight: "700"
  },
  subGenres: {
    fontSize: 16,
    fontWeight: "400",
    color: "gray"
  },
  title: {
    fontSize: 17,
    fontWeight: "500"
  },
  overview: {
    marginTop: 10,
    lineHeight: 20,
    color: "gray",
  },
  buttonView: {
    position: 'absolute',
    bottom: 15,
    width: "100%",
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  watchList: {
    borderRadius: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'flex-start',
    width: "48%",
    borderWidth: 1,
    borderColor: "gray",
    padding: 20,
    flexDirection: 'row',
  },
  watchNow: {
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    width: "48%",
    padding: 20,
    backgroundColor: 'rgb(255,46,46)',
    opacity: .6
  }
})

export { MovieDetailScreen };
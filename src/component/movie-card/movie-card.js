import React from 'react';
import { Pressable, View, Text, StyleSheet, Image } from 'react-native';
import { SvgHeartFill, SvgHeartOutline } from '../../assets/svg';
import { IMAGE_URL } from '../../constants';
import { navigate } from '../../utils';
import { handleFavori } from '../../utils/helpers/redux';

const MovieCard = ({ item, dispatch, favoriStatus }) => {
  return (
    <Pressable onPress={() => {
      navigate('MovieDetail', {
        item: item
      })
    }}
      style={styles.renderView}>

      <Image style={styles.img}
        source={{
          uri: item.poster_path ? IMAGE_URL + item.poster_path : "https://www.wellgro.com.tr/Scripts/images/resim-hazirlaniyor/tr.jpg"
        }}
      />

      <View style={styles.renderContent}>

        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.listType}>{item.list_type}</Text>

        <Pressable onPress={() => handleFavori(dispatch, favoriStatus, item)}
          style={styles.favoriView}>
          {
            favoriStatus ?
              <SvgHeartFill fill="red" width={20} height={20} />
              :
              <SvgHeartOutline fill="red" width={20} height={20} />
          }
          <Text style={styles.favoriText}>Add to Favorite</Text>
        </Pressable>

      </View>

    </Pressable>
  )
}

const styles = StyleSheet.create({
  renderView: {
    flexDirection: 'row'
  },
  img: {
    height: 150,
    width: 120,
    borderRadius: 10
  },
  renderContent: {
    height: 150,
    marginLeft: 20,
    justifyContent: 'center'
  },
  nameText: {
    fontSize: 16,
    fontWeight: "600"
  },
  listType: {
    fontSize: 15,
    fontWeight: '600',
    color: "gray",
    marginTop: 10
  },
  favoriView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  favoriText: {
    marginLeft: 10,
    fontWeight: '300',
    color: "rgb(255,46,46)"
  }
})

export { MovieCard };
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgArrowLeft, SvgHeartFill, SvgHeartOutline } from '../../../assets/svg';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '../../container';
import { handleFavori } from '../../../utils/helpers/redux';
import { goBack } from '../../../utils';


const MovieDetailHeader = (props) => {
  const { item } = props.route.params;
  const insets = useSafeAreaInsets();
  const { favoriData } = useSelector(({ favori }) => favori);
  const [favorite, setFavorite] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    favoriData.find(x => x.id == item.id) ? setFavorite(true) : setFavorite(false);
  }, [favoriData, item]);

  return (
    <Container style={[styles.view, { paddingTop: insets.top + 10 }]}>

      <Pressable onPress={goBack}
        style={styles.press}>
        <SvgArrowLeft fill="black" width={24} height={24} />
      </Pressable>

      <Text style={styles.title}>{item.title}</Text>

      <Pressable onPress={() => handleFavori(dispatch, favorite, item)}
        style={styles.press}>
        {
          favorite ?
            <SvgHeartFill fill="red" width={20} height={20} />
            :
            <SvgHeartOutline fill="red" width={20} height={20} />
        }
      </Pressable>

    </Container>
  )
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    color: "black",
    height: 20,
    fontSize: 16,
    fontWeight: "600"
  },
  press: {
    width: 30
  }
})

export { MovieDetailHeader };
import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgHeartOutline } from '../../../assets/svg';
import { navigate } from '../../../utils';
import { Container } from '../../container';


const MovieHeader = (props) => {
  const insets = useSafeAreaInsets();

  return (
    <Container style={[styles.view, { paddingTop: insets.top + 10 }]}>

      <Text style={styles.title}>{props.title}</Text>

      <Pressable style={{ width: 30 }} onPress={() =>navigate('Favorite') }>
        <SvgHeartOutline width={20} fill="red" />
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
    fontSize: 18,
    fontWeight: "600"
  },
})

export { MovieHeader };
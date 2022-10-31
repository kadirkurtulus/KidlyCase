import React from 'react';
import { View, StyleSheet } from 'react-native';
import { mergeStyle } from '../../utils';


const Container = (props) => {

  const _style = mergeStyle(styles.container, props.padding && { padding: 10 }, props.style);

  return (
    <View style={_style}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export { Container };
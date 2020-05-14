import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, TouchableWithoutFeedback } from 'react-native';

const CategoryGridTile = props => {

  let TouchableComp = TouchableOpacity;
  if(Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComp = TouchableWithoutFeedback
  }
    return (
        <View style={styles.gridItem}>
        <TouchableComp style={{flex: 1}} onPress={props.onClick}>
          <View
            style={{
              ...styles.gridContainer,
              ...{backgroundColor: props.data.item.color},
            }}>
            <Text style={styles.title}>
              {props.data.item.title}
            </Text>
          </View>
        </TouchableComp>
      </View>
    )
}

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    shadowOpacity: 0.26,
  },
  gridItem: {
    flex: 1,
    height: 150,
    borderRadius: 10,
    margin: 10,
    overflow: 'hidden',
    elevation: 5,
  },
  title: {
    fontSize: 22,
    textAlign: 'right',
  },
});

export default CategoryGridTile
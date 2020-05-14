import React, {useState, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

const FavoritesScreen = ({navigation, route}) => {
  const [postText, setPostText] = useState('');

 
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button  title="Update count" />
      ),
    });
  }, [navigation]);

  return (
    <View>
      <TextInput
        value={postText}
        onChangeText={value => setPostText(value)}
        multiline
        style={{ height: 300, backgroundColor: 'white', padding: 5}}
        
      />
      <Button
        title="Done"
        onPress={() => {
          navigation.navigate('Favorite', {post: postText});
        }}
      />
      <Button
        title="Update options with setOption"
        onPress={() => {
          navigation.setOptions({ title: 'Nurudeen Olajobi'});
        }}
      />
    </View>

   
  );
 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FavoritesScreen;

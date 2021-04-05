import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements';

export default ({ navigation }) => {
  return (<View flex='1' justifyContent='center' alignItems='center'>
    <Text category='h2'>About</Text>
    <Button
      title='Press me!'
      onPress={() => {navigation.navigate('Home')}}
    />
  </View>)
}
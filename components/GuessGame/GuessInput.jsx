import {TextInput, Button, View, Text} from 'react-native';
import React from 'react';
import {styles} from './style';
const GuessInput = ({guess, setGuess, verify}) => {
  return (
    <View>
      <View style={styles.textInputContainer}>
        <Text style={styles.text}>Your guess:</Text>
        <TextInput
          style={styles.input}
          value={guess}
          placeholder="type your guess"
          onChangeText={setGuess}
        />
      </View>
      <Button title="GO!" onPress={verify} />
    </View>
  );
};
export default GuessInput;

/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';
import GuessGame from './components/GuessGame';
import Win from './components/GuessGame/Win';
function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [color, _] = useState('white');
  const [gameState, setGameState] = useState('playing');

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View
        style={{
          backgroundColor: color,
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {gameState === 'playing' ? (
          <GuessGame setGame={setGameState} />
        ) : (
          <Win setGame={setGameState} />
        )}
      </View>
    </SafeAreaView>
  );
}

export default App;

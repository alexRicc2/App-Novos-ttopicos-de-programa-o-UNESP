import React, {useState} from 'react';
import {Text, View} from 'react-native';
import GuessInput from './GuessInput';
import {styles} from './style';
const GuessGame = ({setGame}) => {
  const [guess, setGuess] = useState(-1);
  const [guesses, setGuesses] = useState([]);
  const randomNo = Math.floor(Math.random() * 100);
  const [numberToGuess, setNumberToGuess] = useState(randomNo);
  const [tip, setTip] = useState('');

  const verifyGuess = async () => {
    setGuesses(prev => [...prev, guess]);
    if (Number(guess) === numberToGuess) {
      setTip(
        `You won the number was: ${numberToGuess}\nRedirectin in 3 seconds`,
      );
      setTimeout(() => setGame('WIN'), 3000);
    } else if (guess < numberToGuess) {
      setTip("You're low");
    } else {
      setTip("You're up");
    }
    setGuess(-1);
  };

  return (
    <View>
      <Text style={styles.title}>Guess Game!</Text>
      {/* <Text>Number to Guess = {numberToGuess}</Text> */}
      <GuessInput guess={guess} setGuess={setGuess} verify={verifyGuess} />
      {tip !== '' && (
        <Text style={styles.tip}>
          <Text style={{color: 'green', fontWeight: 'bold'}}>Tip:</Text> {tip}
        </Text>
      )}
      {guesses.length > 0 && (
        <Text style={styles.text}>
          Your guesses:{' '}
          {guesses.map((value, index) => {
            return (
              <Text
                key={index}
                style={{color: value >= numberToGuess ? 'blue' : 'red'}}>
                {index === 0 ? value : `, ${value}`}
              </Text>
            );
          })}
          <Text style={{fontSize: 16, Top: 12}}>
            {'\n\n'}Red number you're lower{'\n'}blue you're greater
          </Text>
        </Text>
      )}
    </View>
  );
};
export default GuessGame;

import {Text, Button, View} from 'react-native';
import {styles} from './style';
const Win = ({setGame}) => {
  return (
    <View>
      <Text style={styles.won}>you won!</Text>
      <Button
        title="Play again"
        onPress={() => setGame('playing')}
        color={'green'}
      />
    </View>
  );
};
export default Win;

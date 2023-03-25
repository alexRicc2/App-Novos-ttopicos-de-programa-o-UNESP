import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  textInputContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  tip: {
    fontSize: 18,
  },
  won: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'green',
  },
});

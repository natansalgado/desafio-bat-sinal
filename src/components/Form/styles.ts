import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20
  },
  title: {
    fontSize: 24,
    marginTop: 15,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  label: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: '500'
  },
  input: {
    padding: 10,
    borderWidth: 3,
    borderRadius: 5,
    width: '100%',
    fontSize: 18
  },
  textArea: {
    height: 110,
    textAlignVertical: 'top'
  },
  button: {
    textTransform: 'uppercase',
    marginTop: 20,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: '#333',
    padding: 10,
    width: '100%'
  }
});
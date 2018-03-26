import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          ログイン
        </Text>
        <TextInput style={styles.input} value="Email Address" />
        <TextInput style={styles.input} value="Password" />
        <TouchableHighlight style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonTitle}>ログインする</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#E31676',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 4,
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle: {
    fontSize: 18,
    color: '#fff',
  },
  input: {
    backgroundColor: '#eee',
    height: 40,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
});

export default LoginScreen;

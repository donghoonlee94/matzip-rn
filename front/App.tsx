import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

function App(): React.JSX.Element {
  const [name, setName] = useState('');

  const handleChangeInput = (text: string) => {
    setName(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          onChangeText={handleChangeInput}
          value={name}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    flex: 1,
  },
  inputContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    margin: 10,
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    margin: 10,
  },
});

export default App;

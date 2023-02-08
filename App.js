
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';


const imageBG = require('./images/bgImage.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={imageBG} resizeMode="cover" style={styles.image}>
        <View style={styles.form}>
          <Text style={styles.text}>Registration</Text>
          <TextInput 
              style={styles.input}
              placeholder="Login"
              placeholderTextColor='#BDBDBD' />
          <TextInput 
              style={styles.input} 
              placeholder="Email" 
              placeholderTextColor='#BDBDBD' />
          <TextInput 
              style={styles.input} 
              secureTextEntry={true}
              placeholder="Password" 
              placeholderTextColor='#BDBDBD' />
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTitle}>SING UP</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  form: {
    backgroundColor: '#ffffff',
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  input: {
    height: 50,
    lineHeight: 19,
    borderWidth: 1,
    marginTop: 16,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
  },
  text: {
    marginBottom: 17,
    color: '#212121',
    fontSize: 30,
    lineHeight: 35.16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btn: {
    marginTop: 43,
    height: 51,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 19,
  }
});

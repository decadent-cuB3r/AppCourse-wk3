import { StyleSheet, Text, View, SafeViewArea } from 'react-native';
import Navigator from './src/routes/homeStack';
import Home from './src/screens/home';

export default function App() {
  return (
    <Navigator />
  );
}

const styles = StyleSheet.create({
  
});

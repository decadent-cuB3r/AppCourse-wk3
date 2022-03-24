import { StyleSheet, Text, View, SafeViewArea } from 'react-native';
import Navigator from './src/routes/homeStack'

export default function App() {
  return (
    <View>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  
});

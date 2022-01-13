import { StyleSheet} from 'react-native';
import Router from './screens/NavigationSetup/Router';

export default function App() {
  return (
    <Router/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

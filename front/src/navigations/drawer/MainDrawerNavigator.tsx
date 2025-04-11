import {createDrawerNavigator} from '@react-navigation/drawer';
import {authNavigations} from '../../constants';
import MapHomeScreen from '../../screens/MapHomeScreen';

const Drawer = createDrawerNavigator();

function MainDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={authNavigations.AUTH_HOME}
        component={MapHomeScreen}
      />
    </Drawer.Navigator>
  );
}

export default MainDrawerNavigator;

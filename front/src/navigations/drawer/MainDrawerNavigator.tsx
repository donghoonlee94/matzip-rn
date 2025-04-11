import {createDrawerNavigator} from '@react-navigation/drawer';
import FeedHomeScreen from '../../screens/feed/FeedHomeScreen';
import MapHomeScreen from '../../screens/map/MapHomeScreen';
import CalendarHomeScreen from '../../screens/calendar/CalendarHomeScreen';

const Drawer = createDrawerNavigator();

function MainDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MapHomeScreen" component={MapHomeScreen} />
      <Drawer.Screen name="FeedHomeScreen" component={FeedHomeScreen} />
      <Drawer.Screen name="CalendarHomeScreen" component={CalendarHomeScreen} />
    </Drawer.Navigator>
  );
}

export default MainDrawerNavigator;

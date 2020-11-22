import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from 'C:/Users/asus/Documents/XYZ/XYZ Application/XYZ_application/screens/HomeScreen.html';
import MembersScreen from 'C:/Users/asus/Documents/XYZ/XYZ Application/XYZ_application/screens/MembersScreen.html';
import SeniorsScreen from 'C:/Users/asus/Documents/XYZ/XYZ Application/XYZ_application/screens/SeniorsScreen.html';
import VolunteersScreen from 'C:/Users/asus/Documents/XYZ/XYZ Application/XYZ_application/screens/VolunteersScreen.html';
import DonorScreen from 'C:/Users/asus/Documents/XYZ/XYZ Application/XYZ_application/screens/DonorScreen.html';
import AAScreen from 'C:/Users/asus/Documents/XYZ/XYZ Application/XYZ_application/screens/AAScreen.html';
import PPScreen from 'C:/Users/asus/Documents/XYZ/XYZ Application/XYZ_application/screens/PPScreen.html';
import XIScreen from 'C:/Users/asus/Documents/XYZ/XYZ Application/XYZ_application/screens/XIScreen.html';
import SideBar from 'C:/Users/asus/Documents/XYZ/XYZ Application/XYZ_application/screens/SideBar.html';
import ContactUs from 'C:/Users/asus/Documents/XYZ/XYZ Application/XYZ_application/screens/ContactUs.html';
import Robot_run from 'C:/Users/asus/Documents/XYZ/XYZ Application/XYZ_application/screens/Robot_run.html';
import AboutUsOvLy from 'C:/Users/asus/Documents/XYZ/XYZ Application/XYZ_application/screens/AboutUsOvLy.html';
import GroupOvLy from 'C:/Users/asus/Documents/XYZ/XYZ Application/XYZ_application/screens/Groups/GroupOvLy.html';
import GameSelect from 'C:/Users/asus/Documents/XYZ/XYZ Application/XYZ_application/screens/GameSelect.html';
import LogoAU from 'C:/Users/asus/Documents/XYZ/XYZ Application/XYZ_application/screens/LogoAU.html';
import PointsTable from 'C:/Users/asus/Documents/XYZ/XYZ Application/XYZ_application/screens/PointsTable.html';
import BBScreen from 'C:/Users/asus/Documents/XYZ/XYZ Application/XYZ_application/screens/Groups/BBScreen.html';
import CSScreen from 'C:/Users/asus/Documents/XYZ/XYZ Application/XYZ_application/screens/Groups/CSScreen.html';
import DDScreen from 'C:/Users/asus/Documents/XYZ/XYZ Application/XYZ_application/screens/Groups/DDScreen.html';
import JGScreen from 'C:/Users/asus/Documents/XYZ/XYZ Application/XYZ_application/screens/Groups/JGScreen.html';
import KCScreen from 'C:/Users/asus/Documents/XYZ/XYZ Application/XYZ_application/screens/Groups/KCScreen.html';
import NKScreen from 'C:/Users/asus/Documents/XYZ/XYZ Application/XYZ_application/screens/Groups/NKScreen.html';
import RRScreen from 'C:/Users/asus/Documents/XYZ/XYZ Application/XYZ_application/screens/Groups/RRScreen.html';
import TTScreen from 'C:/Users/asus/Documents/XYZ/XYZ Application/XYZ_application/screens/Groups/TTScreen.html';


export default class App extends React.Component {
  render() {
    return (

      <AppContainer />

    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Members: { screen: MembersScreen },
  Home: { screen: HomeScreen },
  Seniors: { screen: SeniorsScreen },
  Volunteers: { screen: VolunteersScreen },
  Donor: { screen: DonorScreen },
  AA: { screen: AAScreen },
  PP: { screen: PPScreen },
  XI: { screen: XIScreen },
  BB: { screen: BBScreen },
  CS: { screen: CSScreen },
  DD: { screen: DDScreen },
  JG: { screen: JGScreen },
  KC: { screen: KCScreen },
  NK: { screen: NKScreen },
  RR: { screen: RRScreen },
  TT: { screen: TTScreen },
  SideB: { screen: SideBar },
  Contact: { screen: ContactUs },
  Runner: { screen: Robot_run },
  AboutOvLy: { screen: AboutUsOvLy },
  Groups: { screen: GroupOvLy },
  GameSelecter: { screen: GameSelect },
  Logo: { screen: LogoAU },
  Points: { screen: PointsTable },
  Themes: { screen: ThemesScreen }
}
/*
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        console.log(routeName)
        if (routeName === "Members") {
          return (
            <Image
              style={{ width: 40, height: 40 }}
            />
          )
        }
        else if (routeName === "Search") {
          return (
            <Image
              style={{ width: 40, height: 40 }}
            />)

        }
      }
    })
  }*/
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
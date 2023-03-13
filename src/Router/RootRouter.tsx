import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';

import COLORS from '../constants/colors';
import ArticleDetail from '../Screens/ArticleDetail/ArticleDetail';
import NewsFeed from '../Screens/NewsFeed/NewsFeed';

type RootStackParamList = {
  NewsFeed: undefined;
  ArticleDetail: {url: string; headerTitle: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootRouter: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.red,
          },
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            fontFamily: 'Montserrat-Medium',
            fontSize: 20,
          },
        }}>
        <Stack.Screen
          name="NewsFeed"
          component={NewsFeed}
          options={{title: 'News Feed'}}
        />
        <Stack.Screen
          name="ArticleDetail"
          component={ArticleDetail}
          options={({route}) => ({title: route?.params?.headerTitle || ''})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootRouter;

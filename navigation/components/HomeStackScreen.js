const HomeStack = createStackNavigator();
function HomeStackScreen() {
 return (
   <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />             <HomeStack.Screen name="Details" component={DetailsScreen} />
   </HomeStack.Navigator>
  );
}
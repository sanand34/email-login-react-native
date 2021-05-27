import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Register from "./Register";
import Login from "./Login";
const MainNavigator = createSwitchNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
});
const Navigator = createAppContainer(MainNavigator);

export default Navigator;

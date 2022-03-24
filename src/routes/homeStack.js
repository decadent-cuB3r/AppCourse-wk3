import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../screens/home';
import reviewDetails from "../screens/reviewDetails";


const screens = {
    BookDetails: {
        screen: reviewDetails,
    },
    Home: {
        screen: Home,
    },
    
}

const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack);

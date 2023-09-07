import styles from "../../screens/styles/screens_styles";
import {View} from "react-native";

const ButtonContainer = ({children}) => {
    return <View style={styles.buttonContainer}>{children}</View>
}

export default ButtonContainer;

import {View} from "react-native";
import styles from "../../screens/styles/screens_styles";
const ButtonContainerWrapper = ({children}) => {
    return (
        <View style={styles.wrapperButtonsContainer}>{children}</View>
    )
}

export default ButtonContainerWrapper;

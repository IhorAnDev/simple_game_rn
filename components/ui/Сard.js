import styles from "../../screens/styles/screens_styles";
import {View} from "react-native";

function Card({children}) {
    return <View style={styles.card}>{children}</View>
}

export default Card;

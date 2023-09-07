import {Text} from "react-native";
import styles from "../../screens/styles/screens_styles";

function InstructionText({children, style}) {
    return <Text style={[styles.guideText, style]}>{children}</Text>
}

export default InstructionText;

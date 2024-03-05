import { BottomNavigationCustom } from "../../components/BottomTabs"
import LoginScreen from "../Auth/Login"

export const Navigator = ({ token }) => {
    if (token) {
        return (
            <BottomNavigationCustom />
        )
    } else {
        <LoginScreen />
    }
}
import DashboardDesktopComponent from "@/components/dashboard/DashboardDesktop";
import { useState } from "react";
import { View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen"
import "tailwindcss-react-native";

export default function DashboardPage(){
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [session, setSession] = useState(null)

    const isDesktop = wp("100%") >= 768

    return (isDesktop ? <DashboardDesktopComponent /> : <View></View>)

}
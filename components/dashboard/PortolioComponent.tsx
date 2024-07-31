import { Text, View, ViewComponent } from "react-native";
import { useEffect, useState } from "react";
import PortfolioChart from "./PortfolioChart";
import { exampleUser } from "@/tests/getPortolio";

type ViewOption = "1D" | "1W"

export default function PortfolioComponent(){
    const [view, setView] = useState<ViewOption>("1D")
    const userData = exampleUser


    return <View>
        <Text> Your Porfolio</Text>
        <PortfolioChart userData={userData}/>

    </View>
}
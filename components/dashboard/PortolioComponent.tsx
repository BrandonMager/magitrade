import { Text, View, ViewComponent } from "react-native";
import { useEffect, useState } from "react";
import PortfolioChart from "./PortfolioChart";
import { exampleUser } from "@/tests/getPortolio";
import PortfolioBar from "./PortfolioBar";

type ViewOption = "1D" | "1W"

export default function PortfolioComponent(){
    const [view, setView] = useState<ViewOption>("1D")

    const [livePrice, setLivePrice] = useState(128.329)
    const userData = exampleUser


    return <View style={{
        padding: 12
    }}>
        <Text style={{
            fontSize: 20,
            marginBottom: 8
        }}>Portfolio Balance</Text>
        <Text style={{
            fontSize: 28
        }}>${livePrice.toFixed(2)}</Text>

        <PortfolioChart userData={userData} />
        <PortfolioBar view = {view} setView={setView}/>

    </View>
}
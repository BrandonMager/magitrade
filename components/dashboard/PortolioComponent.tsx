import { Text, View, ViewComponent } from "react-native";
import { useEffect, useState } from "react";

type ViewOption = "1D" | "1W"
export default function PortfolioComponent(){
    const [view, setView] = useState<ViewOption>("1D")

    return <View>
        <Text> Your Porfolio</Text>
    </View>
}
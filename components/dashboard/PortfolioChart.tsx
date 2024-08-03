import { formatDataToPrices, formatDataToPricesDaily } from "@/functions/porfolioFunctions"
import { Chart, CategoryScale, LinearScale, PointElement, LineElement} from "chart.js"
import { useEffect, useState } from "react"
import { Line } from "react-chartjs-2"
import { View } from "react-native"
import tw from "twrnc"

Chart.register(CategoryScale, LinearScale, PointElement, LineElement)

export default function PortfolioChart({ userData, view } : any){
    const [component, setComponent] : any = useState(null)

    useEffect(() => {    
        var formattedData;    
        if(view == "1D"){
            formattedData = {
                labels: formatDataToPricesDaily(userData),
                    datasets: [{
                        label: "Price",
                        data: formatDataToPricesDaily(userData),
                        fill: false,
                        pointRadius: 2,
                        borderColor: 'rgba(10, 55, 201, 1)',
                        borderWidth: 1
                    }]
            }

        } else {
            formattedData = {
                    labels: formatDataToPrices(userData),
                    datasets: [{
                        label: "Price",
                        data: formatDataToPrices(userData),
                        fill: false,
                        pointRadius: 2,
                        borderColor: 'rgba(10, 55, 201, 1)',
                        borderWidth: 1
                    }]
            }
        }

        const component = <Line data = {formattedData} 
            options={{
                scales: {
                    x: {display: false},
                    y: {display: false}
                }, 
                plugins: {
                    legend: {display: false},
                    tooltip: {enabled: false}
                },
                responsive: true
            }}
            />

         

        setComponent(component)

    }, [view])

    

    return component && <View style={tw`h-[250px] bg-slate-100 my-[12px] p-[12px]`}>
        {component}
    </View>

}
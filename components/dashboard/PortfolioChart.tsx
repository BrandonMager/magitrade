import { formatDataToPrices } from "@/functions/porfolioFunctions"
import { Chart, CategoryScale, LinearScale, PointElement, LineElement} from "chart.js"
import { Line } from "react-chartjs-2"
import { View } from "react-native"
import tw from "twrnc"

Chart.register(CategoryScale, LinearScale, PointElement, LineElement)

export default function PortfolioChart({ userData }: any){

    const formattedData = {
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

    return <View style={tw`h-[250px]`}>
        <Line data = {formattedData} 
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
    </View>

}
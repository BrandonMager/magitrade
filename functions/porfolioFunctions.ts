import { exampleUser } from "@/tests/getPortolio";

const formatDataToPrices = (userData: any) => {
    var prices = []
    for(var i = 0; i < userData.balanceHistory.length; i++){
        const entry = userData.balanceHistory[i]
        prices.push(entry.balance)
    }

    return prices
}      


export { formatDataToPrices }
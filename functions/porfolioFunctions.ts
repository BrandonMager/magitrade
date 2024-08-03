import { exampleUser } from "@/tests/getPortolio";

const formatDataToPrices = (userData: any) => {
    var prices = []
    for(var i = 0; i < userData.weekBalanceHistory.length; i++){
        const entry = userData.weekBalanceHistory[i]
        prices.push(entry.balance)
    }

    return prices
}      

const formatDataToPricesDaily = (userData: any) => {
    var prices = []
    for(var i = 0; i < userData.dailyBalanceHistory.length; i++){
        const entry = userData.dailyBalanceHistory[i]
        prices.push(entry.balance)
    }

    return prices
}
export { formatDataToPrices, formatDataToPricesDaily }
import { useSession } from "@/contexts/authctx"
import Sidebar from "@/contexts/Sidebar"
import { Redirect, Slot, Stack } from "expo-router"
import { Text, View } from "react-native"
import tw from "twrnc"

export default function AppLayout(){
    const { session, isLoading } = useSession()
    if(isLoading){
        return <Text>Loading...</Text>
    }

    if(session){
        return <Redirect href="/sign-in" />
    }

    return <View style={tw`flex flex-row h-screen`}>
            <Sidebar/>
            <Slot />
           
        </View>
}
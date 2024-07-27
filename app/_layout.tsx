import { SessionProvider } from "@/contexts/authctx";
import { Slot } from "expo-router"
export default function Root(){
    return (
        <SessionProvider>
            <Slot />
        </SessionProvider>
    )
}
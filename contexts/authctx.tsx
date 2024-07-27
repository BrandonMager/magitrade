import { useContext, createContext, type PropsWithChildren } from "react";

const AuthContext = createContext<{
    signIn: () => void;
    signOut: () => void;
    session?: string | null;
    isLoading: boolean;
}>({
    signIn: () => null,
    signOut: () => null,
    session: null,
    isLoading: false,
})

export function useSession(){
    const value = useContext(AuthContext)
    return value;
}

export function SessionProvider({children} : PropsWithChildren){
    const [[isLoading, session], setSession] = useStorageState("session")
    return (
        <AuthContext.Provider value = {{
            signIn: () => {},
            signOut: () => {},
            session,
            isLoading
        }}>
            {children}
        </AuthContext.Provider>
    )
}
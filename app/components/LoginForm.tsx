import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";


export function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const {error} = await authClient.signIn.email(
            {
                email,
                password,
                callbackURL: "/dashboard",
            },
            {
                onSuccess: () => router.push("/dashboard"),
            }
        );
        if(error) alert(error.message);
    };
    return (
        <div className="flex flex-col gap-2">
            <input
            className="text-2xl rounded-xl p-2 border-2"
            placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
            <input 
            className="text-2xl rounded-xl p-2 border-2"
            type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)} />
            <button
            className="bg-emerald-500 hover:cursor-pointer text-2xl rounded-xl p-2"
            onClick={handleLogin}>Login</button>
        </div>
    )
}
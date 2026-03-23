"use client";

import { useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { LoginForm } from "../components/LoginForm";

export default function LoginPage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && session) router.push("/dashboard");
  }, [session, isPending]);
    return(
        <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl">Login</h1>
            <LoginForm/>
        </div>
    )
}
"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export function SignupForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignup = async () => {
    const { error } = await authClient.signUp.email(
      {
        email,
        password,
        name,
        callbackURL: "/dashboard",
      },
      {
        onSuccess: () => router.push("/dashboard"),
      }
    );

    if (error) alert(error.message);
  };

  return (
    <div className="flex flex-col gap-2">
        <input 
        className="text-2xl rounded-xl p-2 border-2"
        placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input
        className="text-2xl rounded-xl p-2 border-2"
        placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input
        className="text-2xl rounded-xl p-2 border-2"
        type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button
        className="bg-emerald-500 hover:cursor-pointer text-2xl rounded-xl p-2"
        onClick={handleSignup}>Sign Up</button>
    </div>
  );
}
"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const signInSocial = async (provider: "google" | "github") => {
    try {
      await authClient.signIn.social({
        provider,
        callbackURL: "/dashboard",
        disableRedirect: false, // redirect to provider site
      });
    } catch (err: any) {
      alert(err?.message || "Error signing in with social provider");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-2 ">
      <h1 className="text-3xl bg-blue-500">Welcome to Auth App</h1>
      <p className="text-xl">Please login or signup to continue.</p>

      <div className="flex gap-3">
        <button
        className="bg-amber-300 text-2xl rounded-xl p-2 hover: cursor-pointer" 
        onClick={() => router.push("/login")}>Login</button>
        <button 
        className="text-blue-700 text-2xl rounded-2xl underline hover: cursor-pointer" 
        onClick={() => router.push("/signup")}>Sign Up</button>
      </div>

      <h2 className="text-xl">Or sign in with:</h2>
      <div className="flex gap-3">
        <button
        className="bg-red-500 hover:cursor-pointer text-2xl rounded-xl p-2"
        onClick={() => signInSocial("google")}>Sign in with Google</button>
        <button
        className="bg-emerald-500 hover:cursor-pointer text-2xl rounded-xl p-2"
        onClick={() => signInSocial("github")}>Sign in with GitHub</button>
      </div>
    </div>
  );
}
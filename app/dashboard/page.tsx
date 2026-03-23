"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Logout } from "../components/Logoutbtn";

export default function Dashboard() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/");
    }
  }, [session, isPending]);

  if (isPending) return <p>Loading...</p>;

  return (
    <div>
        <div className="flex justify-end items-end">
            <Logout />
        </div>
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl">Dashboard</h1>
            <p className="text-2xl font-bold text-violet-600">Welcome {session?.user?.name}!!</p>
        </div>
    </div>
  );
}
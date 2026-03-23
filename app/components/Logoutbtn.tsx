"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export function Logout() {
  const router = useRouter();

  const logout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.push("/login"),
      },
    });
  };

  return <button
  className="bg-black text-white rounded-1xl flex flex-row-reverse p-2 text-xl hover:cursor-pointer rounded-xl mt-0.5"
  onClick={logout}>Logout</button>;
}
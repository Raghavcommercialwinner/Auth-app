"use client";

import { SignupForm } from "../components/SignupForm";

export default function SignupPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <h1 className="text-2xl">Sign Up</h1>
      <SignupForm />
    </div>
  );
}
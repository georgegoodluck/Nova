import React from "react";
import AuthForm from "@/components/AuthForm";

const SignIn = () => {
  return (
    <section className="flex-center size-full ax-sm:px-6">
      <AuthForm type="sign-in" />
    </section>
  );
};

export default SignIn;

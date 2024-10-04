import { PropsWithChildren } from "react";

import Button from "../atoms/Button";
import AppLogo from "../molecules/AppLogo";

type AuthLayoutProps = PropsWithChildren<{
  image: string;
  showSignUp?: boolean;
}>;

export default function AuthLayout({image, children, showSignUp}: AuthLayoutProps) {
  return (
    <main className="w-[100%] h-[100vh] flex items-center md:justify-center lg:items-stretch">
      <article className="basis-[100%] md:basis-[430px] lg:basis-[50%] py-8 px-3 lg:flex lg:items-center">
        <div className="w-[93%] mx-auto mb-4 lg:w-[450px]">
          <div className="flex items-center justify-between">
            <AppLogo />
            {showSignUp && <Button variant="outline">Sign Up</Button>}
          </div>
          <div className="mt-10">
            { children }
          </div>
        </div>
      </article>
      <section className="hidden lg:block lg:basis-[50%] bg-gray-800">
        <img src={image} className="w-[100%] h-[100%] object-cover"/>
      </section>
    </main>
  );
}
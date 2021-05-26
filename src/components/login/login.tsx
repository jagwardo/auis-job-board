import React from "react";
import Image from "next/image";
import { Button } from "@components/button";
import { Input } from "@components/form";

type IDiv = React.DetailedHTMLProps<
  React.HtmlHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const LoginScreen: React.FC<IDiv> = ({className=""}) => {
    const login = async event => {
        event.preventDefault(); // prevents page redirection
        const res = await fetch(
            'https://hooks.zapier.com/hooks/catch/123456/abcde',
            {
              body: JSON.stringify({
                name: event.target.name.value
              }),
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST'
            }
          )
      
          const result = await res.json()
          console.log(result);
          // result.user => 'Ada Lovelace'

    }
    return (
        <div className={`w-full bg-landing-texture bg-center h-screen bg-no-repeat bg-cover px-5 py-5`}>
            <div className="w-max-screen-lg mx-auto my-20">
                <div className="text-center my-20 mx-auto">
                    <Image
                            data-test="icon"
                            src="/icons/brand-logo-lg.png"
                            alt="logo"
                            width="628"
                            height="97"
                    />
                </div>

                <div className="md:w-6/12 lg:w-6/12 my-20 mx-auto">
                    <form onSubmit={login}>
                        <div className="grid grid-cols-1 gap-12 justify-center">
                            <div className="grid grid-cols-1 gap-8 text-center">
                                <Input className="shadow-sm rounded-lg py-3" name="search" type="email" placeholder="Email" />
                                <Input className="shadow-sm rounded-lg py-3" name="location" type="password" placeholder="Password" />                        
                            </div>
                            <Button className="shadow-sm bg-blue-500 text-gray-50 flex-shrink rounded-lg" type="submit">
                                Sign in
                            </Button>
                        </div>
                    </form>  
                </div>
            </div>

        </div>
    );
};

export default LoginScreen;
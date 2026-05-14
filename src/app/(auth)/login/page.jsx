
"use client";


import { authClient } from "@/lib/auth-client";
import {Envelope, EyeSlash, FloppyDisk} from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  InputGroup,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";

import { Eye } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
const Login = () => {
   
      const [isVisible, setIsVisible] = useState(false);
            const onSubmit =async (e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const newUser =Object.fromEntries(formData.entries())
          console.log(newUser);
          const { data, error } = await authClient.signIn.email({
          // required
          email:newUser.email, // required
          password: newUser.password, // required
         
        
      });
       if(data){
        toast.success("Login successfully")
       }else{
        toast.error("Login failed")
       }
       console.log(error);
        };
          const googleSinIn =async()=>{
            const data = await authClient.signIn.social({
    provider: "google",
  });
  if(data){
        toast.success("Login successfully")
       }
          }
          return (
              <div className="max-w-2xl mx-auto p-5 bg-white shadow my-5">
                <div className="text-center">
      <h3 className="text-3xl font-semibold">Login Account</h3>
      <p className="text-zinc-600">Start your adventure with Wanderlust</p>
                  </div>
      
                  <div className="">
                     <Form onSubmit={onSubmit} className="w-full  mx-auto mt-10" onSubmit={onSubmit}>
            <Fieldset>
              
              <FieldGroup>
                
           <TextField isRequired className="w-full " name="email">
              <Label>Email address</Label>
              <InputGroup>
                <InputGroup.Prefix>
                  <Envelope className="size-4 text-muted" />
                </InputGroup.Prefix>
                <InputGroup.Input className="w-full max-w-[280px]" placeholder="name@email.com" />
              </InputGroup>
            </TextField>
            
            
      
               <TextField className="w-full " name="password">
            <Label>Password</Label>
            <InputGroup>
              <InputGroup.Input
                className="w-full"
                type={isVisible ? "text" : "password"}
                value={isVisible ? "87$2h.3diua" : "••••••••"}
              />
              <InputGroup.Suffix className="pr-0">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
          </TextField>
                
              </FieldGroup>
              <Fieldset.Actions>
                <Button className="w-full" type="submit">
                  <FloppyDisk />
                  Login
                </Button>
                
              </Fieldset.Actions>
            </Fieldset>
          </Form>  
                  </div>
                            <hr className="my-4 border border-zinc-300"></hr>
                            <p className="text-center">or</p>
                  <div onClick={googleSinIn} className="flex items-center justify-center gap-2 mt-3 border border-zinc-300 py-2">
                    <Image src="/assets/google.png" width={20} height={20} alt="google image"></Image>  
                    <p>Login  With Google</p>
                  </div>
              </div>
    );
};

export default Login;
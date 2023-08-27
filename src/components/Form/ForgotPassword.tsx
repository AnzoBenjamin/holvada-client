import React, { useRef, useState } from "react";
import { useAuth } from "../../store/auth-context";
import { Form } from "./Form";
import FormHeader from "./FormHeader";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import classes from './ForgotPassword.module.scss'

export const ForgotPassword: React.FC = () => {
  const emailRef = useRef<HTMLInputElement | null>(null)
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const {forgotPassword} = useAuth();

  const resetHandler = async (e: any)=>{
    e.preventDefault()
    try{
      setError("")
      setLoading(true)
      console.log("first")
      if(emailRef.current) await forgotPassword(emailRef.current?.value)
      setMessage("Check your email for further instructions")
    }
    catch(error: any){
      console.log(error)
      setError(error.code)
      setMessage("")
    }
  }
  const linkItems = ["Login", "Signup"]
  return (
    <Form>
      <FormHeader linkContent={linkItems}/>
      <form action="" onSubmit={resetHandler} className={classes.forgot}>
      <h2>Forgot Password</h2>
      {message && <p className={classes.message}>{message}</p>}
      {error && <p>{error}</p>}
      <Input type="email" placeholder="Email" ref={emailRef} />
      <Button text="Reset" disabled={loading} type="submit" className="" />
      </form>
    </Form>
  );
};

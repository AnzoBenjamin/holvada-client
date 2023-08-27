import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import { Form } from "./Form";
import { useAuth } from "../../store/auth-context";
import classes from "./Login.module.scss";
import FormHeader from "./FormHeader";

const Login = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { logIn, currentUser } = useAuth();

  const loginHandler = async (e: any) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      if (emailRef.current && passwordRef.current)
        await logIn(emailRef.current.value, passwordRef.current.value);
      setMessage("Success, you are being redirected");
      navigate("/account/add");
      console.log(currentUser?.emailVerified);
    } catch (error: any) {
      setMessage("");
      setError(error.code);
      setLoading(false);
    }
  };

  const linkItems = ["Signup", "Forgot-password"];

  return (
    <Form>
      <FormHeader linkContent={linkItems} />
      <form className={classes["form-login"]} onSubmit={loginHandler}>
        <h2>Login</h2>
        {error && <p className={classes.error}>{error}</p>}
        {message && <p className={classes.message}>{message}</p>}

        <Input type="email" ref={emailRef} placeholder="Email" />
        <Input type="password" ref={passwordRef} placeholder="Password" />

        <Button text="Login" disabled={loading} type="submit" className="" />
      </form>
    </Form>
  );
};

export default Login;

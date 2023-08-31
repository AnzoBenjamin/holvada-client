import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button";
import { Form } from "./Form";
import { useAuth } from "../../store/auth-context";
import classes from "./Login.module.scss";
import FormHeader from "./FormHeader";
import { TextField } from "@mui/material";
import { Toast } from "primereact/toast";

const Login = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const toast = useRef(null);
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { logIn } = useAuth();

  const loginHandler = async (e: any) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      if (emailRef.current && passwordRef.current)
        await logIn(emailRef.current.value, passwordRef.current.value);
      setMessage("Success, you are being redirected");
      navigate("/account/add");
    } catch (error: any) {
      setMessage("");
      setError(error.code);
      setLoading(false);
    }
  };

  const linkItems = ["Signup", "Forgot-password"];

  useEffect(() => {
    if (error && !message) {
      if (toast.current) {
        (toast.current as any).show({
          severity: "error",
          summary: "Error",
          detail: error,
          life: 3000,
        });
      }
    } else if (message && !error) {
      if (toast.current) {
        (toast.current as any).show({
          severity: "success",
          summary: "Success",
          detail: message,
          life: 3000,
        });
      }
    }
  }, [loginHandler]);
  return (
    <Form>
      <FormHeader linkContent={linkItems} />
      <form className={classes["form-login"]} onSubmit={loginHandler}>
        <h2>Login</h2>
        {(error || message) && <Toast ref={toast} />}

        <TextField type="email" inputRef={emailRef} label="Email" />
        <TextField type="password" inputRef={passwordRef} label="Password" />

        <Button text="Login" disabled={loading} type="submit" className="" />
      </form>
    </Form>
  );
};

export default Login;

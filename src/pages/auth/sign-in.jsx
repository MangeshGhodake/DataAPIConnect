import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
  button,
} from "@material-tailwind/react";
import { useState } from "react";
import { SimpleFooter, Navbar } from "@/widgets/layout";
import { useAuth } from "@/auth-context/auth.context";
import AuthApi from "@/api/auth";
import { useNavigate } from "react-router-dom";
import routes from "@/routes";

export function SignIn() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const { user } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);
  const [buttonText, setButtonText] = useState("Sign in");

  const login = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if (user && user.token) {
      return navigate("/dashboard");
    }
    if (email === "") {
      return setError("You must enter your email.");
    }
    if (password === "") {
      return setError("You must enter your password");
    }
    setButtonText("Signing in");
    try {
      let response = await AuthApi.Login({
        email,
        password,
      });
      if (response.data && response.data.success === false) {
        return setError(response.data.msg);
      }
      return setProfile(response);
    } catch (err) {
      console.log(err);
      setButtonText("Sign in");
      if (err.response) {
        return setError(err.response.data.msg);
      }
      return setError("There has been an error.");
    }
  };

  const setProfile = async (response) => {
    let user = { ...response.data.user };
    user.token = response.data.token;
    user = JSON.stringify(user);
    setUser(user);
    localStorage.setItem("user", user);
    return navigate("/dashboard");
  };

  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes} />
      </div>
      <img
        src="/img/background-2.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute left-2/4 top-2/4 w-full max-w-[24rem] -translate-x-2/4 -translate-y-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            {user && user.token ? (
              <div>
                <h3 style={{ textAlign: "center" }}>{`Let's go`}</h3>
              </div>
            ) : (
              <>
                <Input
                  variant="standard"
                  type="email"
                  label="Email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setError(undefined);
                  }}
                  size="lg"
                />
                <Input
                  variant="standard"
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setError(undefined);
                  }}
                  size="lg"
                />
                <div className="-ml-2.5">
                  <Checkbox label="Remember Me" />
                </div>
              </>
            )}
          </CardBody>
          <CardFooter className="pt-0">
            <Typography variant="h6">{error}</Typography>
            <Button variant="gradient" onClick={login} fullWidth>
              {buttonText}
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link to="/sign-up">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div>
    </>
  );
}

export default SignIn;

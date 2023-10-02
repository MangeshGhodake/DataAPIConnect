import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { SimpleFooter, Navbar } from "@/widgets/layout";
import AuthApi from "@/api/auth";
import { useState } from "react";
import routes from "@/routes";

export function SignUp() {
  const navigate = useNavigate();
  const [agreement, setAgremment] = useState(true);
  const [firstName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm] = useState("");
  const [buttonText, setButtonText] = useState("Sign up");
  const [error, setError] = useState(undefined);
  const handleSetAgremment = () => setAgremment(!agreement);

  const register = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if (firstName === "") {
      return setError("You must enter your first name.");
    } else if (/^[A-Za-z]{3,16}$/.test(firstName) == false) {
      return setError(
        "Name should be 3-16 characters and shouldn't include any special characters!"
      );
    }
    var email_pattern = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (email === "") {
      return setError("You must enter your email.");
    } else if (email_pattern.test(email) == false) {
      return setError("Invalid Email Address");
    }

    var pattern = new RegExp(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{8,20}$/
    );
    if (password === "") {
      return setError("You must enter a password.");
    } else if (pattern.test(password) == false) {
      return setError(
        "Password should be 8-20 characters and includes at least 1 letter, 1 number and 1 special character!"
      );
    }
    if (confirm_password != password) {
      return setError("Password does not match");
    }
    try {
      setButtonText("Signing up");
      setError(undefined);
      let response = await AuthApi.Register({
        username: firstName,
        email,
        password,
      });
      if (response.data && response.data.success === false) {
        setButtonText("Sign up");

        return setError(response.data.msg);
      }
      const stateID = response.data.userID;
      console.log(response.data);
      return navigate(`/authentication/email_verify/${stateID}`);
    } catch (err) {
      console.log(err);
      setButtonText("Sign up");
      if (err.response) {
        return setError(err.response.data.msg);
      }
      return setError("There has been an error.");
    }
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
              Sign Up
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              variant="standard"
              label="Name"
              value={firstName}
              onChange={(event) => {
                setName(event.target.value);
                setError(undefined);
              }}
              size="lg"
            />
            <Input
              variant="standard"
              type="email"
              label="Email"
              onChange={(event) => {
                setEmail(event.target.value);
                setError(undefined);
              }}
              value={email}
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
            <Input
              variant="standard"
              type="password"
              label="Confirm Password"
              onChange={(event) => {
                setConfirm(event.target.value);
                setError(undefined);
              }}
              value={confirm_password}
              size="lg"
            />
            <div className="-ml-2.5">
              <Checkbox
                label="I agree the Terms and Conditions"
                checked={agreement}
                onChange={handleSetAgremment}
              />
            </div>
            <h6
              style={{
                fontSize: ".8em",
                color: "red",
                textAlign: "center",
                fontWeight: 400,
                transition: ".2s all",
              }}
            >
              {error}
            </h6>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={register} fullWidth>
              {buttonText}
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign in
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

export default SignUp;

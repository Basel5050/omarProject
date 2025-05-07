import React, { useEffect, useState } from 'react';
import { Input, Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { getUsers, loginValid } from '../redux/slices/firstSlice';

const Login = () => {
  const [logginData, setLogginData] = useState({ email: "", password: "" });
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [hasTriedToLogin, setHasTriedToLogin] = useState(false);

  const dispatch = useDispatch();
  const { adminIsLogged, userErrMsg, userLoading } = useSelector(state => state.omar);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    if (!hasTriedToLogin) return;

    if (adminIsLogged) {
      Swal.fire("Success", "Login successful", "success");
    } else if (userErrMsg) {
      Swal.fire("Error", userErrMsg, "error");
    }
  }, [adminIsLogged, userErrMsg, hasTriedToLogin]);

  const emailValidation = (e) => {
    const email = e.target.value;
    setLogginData(prev => ({ ...prev, email }));
    if (!email.includes("@")) {
      Swal.fire("Error", "Please enter a valid Email!", "error");
      setEmailCheck(false);
    } else {
      setEmailCheck(true);
    }
  };

  const passwordValidation = (e) => {
    const password = e.target.value;
    setLogginData(prev => ({ ...prev, password }));
    if (password.length < 7) {
      Swal.fire("Error", "Please enter a valid Password!", "error");
      setPasswordCheck(false);
    } else {
      setPasswordCheck(true);
    }
  };

  const handleLogin = () => {
    if (!emailCheck || !passwordCheck) return;

    if (userLoading) {
      Swal.fire("Please wait", "Still loading users...", "info");
      return;
    }

    setHasTriedToLogin(true);
    dispatch(loginValid({
      email: logginData.email,
      password: logginData.password
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <Card className="bg-gray-900 border border-gray-800 shadow-xl rounded-2xl">
          <CardBody className="p-8">
            <Typography variant="h4" color="white" className="text-center mb-6 font-bold">
              Sign In
            </Typography>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <Input
                  size="lg"
                  label="Email"
                  type="email"
                  color="white"
                  className="text-white"
                  onBlur={emailValidation}
                />
              </div>
              <div>
                <Input
                  size="lg"
                  label="Password"
                  type="password"
                  color="white"
                  className="text-white"
                  onBlur={passwordValidation}
                />
              </div>

              <div className="pt-2">
                <Button
                  fullWidth
                  color="white"
                  className="text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
                  onClick={handleLogin}
                  
                >
                  Sign In
                </Button>
              </div>
            </form>

            <Typography className="mt-6 text-center text-sm text-gray-400">
              Don't have an account?{' '}
              <a href="/signup" className="text-blue-400 hover:underline">
                Sign up
              </a>
            </Typography>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;

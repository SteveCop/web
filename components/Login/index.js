import { useState, useEffect } from 'react'
import Router from 'next/router'
import { loginUser } from '../../lib/auth'
import { removeToken } from '../../lib/token'

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Remove the User's token which saved before.
    removeToken();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setIsLoading(true);
      // API call:
      const data = await loginUser(username, password);
      // console.log("Data is :", data);
      // console.log("Payload is :" , data.payload);
      // console.log("Token is :" , data.payload.token);
      if (data.payload && data.payload.token) {
        if (rememberMe) {
          window.localStorage.setItem("token", data.payload.token);
        } else {
          window.sessionStorage.setItem("token", data.payload.token);
        }
        setTimeout(() => {
          Router.push("/dashboard");
        }, 1000);
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div className="p-0 w-96 py-3">
          <div className="p-4 max-w-sm rounded border overflow-hidden shadow-lg px-10 py-8  ">
            <legend className="text-2xl py-5" >Login</legend>
            <div className="mb-3">
              <label htmlFor="usernameInput" className="form-label block mb-2 text-sm font-medium">
                Username
              </label>
              <input
                type="text"
                id="usernameInput h-96 border"
                className="border-gray-300 border-2 rounded-lg text-sm block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="passwordInput" className="form-label block mb-2 text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="passwordInput"
                className="border-gray-300 border-2 rounded-lg text-sm block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input mr-2"
                  type="checkbox"
                  id="RememberMeInput"
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="RememberMeInput">
                  Remember Me
                </label>
                <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500 px-10 text-left">Lost Password?</a>
              </div>
            </div>
            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            )}
            <button type="submit" className="btn btn-primary w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled={isLoading}>
              Login
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
}

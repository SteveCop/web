import { useState } from "react";
import { registerUser } from "../../lib/auth";
import Router from "next/router";

export function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = await registerUser({
        username,
        password,
        email,
      });
      console.log(data);

      if (data.isSuccessful) {
        Router.push("/auth/login");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div class="p-0 w-96 py-3">
          <div class="p-4 max-w-sm rounded border overflow-hidden shadow-lg px-10 py-8 ">
            <legend className="text-2xl py-5">Register</legend>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label block mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="emailInput"
                className="border-gray-300 border-2 rounded-lg text-sm block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="usernameInput" className="form-label block mb-2 text-sm font-medium">
                Username
              </label>
              <input
                type="text"
                id="usernameInput"
                className="border-gray-300 border-2 rounded-lg text-sm block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3 pb-2">
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
            <button type="submit" className="btn btn-primary w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Submit
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
}

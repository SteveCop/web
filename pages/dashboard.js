import React, { useState } from 'react'
import Router from 'next/router'
import { whoAmI } from '../lib/auth'
import styles from '../styles/Home.module.css'
import { removeToken } from '../lib/token'
import { Navbar } from '../components/Navbar'

export default function Dashboard() {
  const [user, setUser] = useState({});

  // Watchers
  React.useEffect(() => {
    const token = window.localStorage.getItem("token") || window.sessionStorage.getItem("token");

    if (!token) {
      redirectToLogin();
    } else {
      (async () => {
        try {
          const data = await whoAmI();
          if (data.error === "Unauthorized") {
            // User is unauthorized and there is no way to support the User, it should be redirected to the Login page and try to logIn again.
            redirectToLogin();
          } else {
            setUser(data.payload);
          }
        } catch (error) {
          // If we receive any error, we should be redirected to the Login page
          redirectToLogin();
        }
      })();
    }
  }, []);

  function redirectToLogin() {
    Router.push("/auth/login");
  }

  function handleLogout(e) {
    e.preventDefault();

    removeToken();
    redirectToLogin();
  }

  if (user.hasOwnProperty("username")) {
    return (
      <>
      <div className={styles.container}>
      <Navbar />
        <nav className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Welcome {user.username}!
            </a>
            <button
              className="btn btn-info"
              type="button"
              style={{ color: "white", backgroundColor: "#0d6efd" }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </nav>
        <h3>{user.username}&apos;s Profile </h3>
        </div>
      </>
    );
  }
  return <div>Welcome back soldier. Welcome to your empty profile.</div>;
  
}

// Fojan side notes :
// class A extends React.Component {
//     componentDidUpdate() {
//         React.useEffect(() => {

//         }) // with no second param
//     }
//     componentDidMount() {
//         React.useEffect(() => {

//         }, []) // the Second param should be empty
//     }
//     componentWillReceiveProps() {
//         React.useEffect(() => {

//         }, [props.name]) // The Second param is everything what you want
//     }
//     componentWillUnmount() {
//         React.useEffect(() => {
//             document.querySelectorAll("button").addEventListener("click", (e) => {

//             }, {})
//             return () => {
//                 // This function will be called before raise the Component's Destroy Event
//                 document.querySelectorAll("button").removeEventListener("click", (e) => {

//                 })
//             }
//         })
//     }
//     render() {
//         return (
//             <div>salam</div>
//         )
//     }
// }

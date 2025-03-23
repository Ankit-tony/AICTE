// import "./AuthForm.css"; // Import the CSS file
// import { useState, useEffect } from "react";

// function AuthForm() {
//   const [isSignup, setIsSignup] = useState(false);
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // Check if the user is logged in by verifying JWT in localStorage
//     const token = localStorage.getItem("token");
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const url = isSignup
//       ? "http://localhost:4000/signup"
//       : "http://localhost:4000/login";
//     const body = isSignup ? { username, email, password } : { email, password };

//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert(isSignup ? "User signed up successfully!" : "Login successful!");
        
//         // Store JWT token in localStorage
//         localStorage.setItem("token", data.token);
//         setIsLoggedIn(true); // Update state

//         // Clear input fields
//         setUsername("");
//         setEmail("");
//         setPassword("");
//       } else {
//         alert(data.error || "Something went wrong!");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Error submitting form!");
//     }
//   };

//   const handleNavigate = () => {
//     window.location.href = "/dashboard"; // Redirect to a new page
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-buttons">
//         <button
//           className={`login-btn ${!isSignup ? "login-active" : ""}`}
//           onClick={() => setIsSignup(false)}
//         >
//           Login
//         </button>
//         <button
//           className={`signup-btn ${isSignup ? "signup-active" : ""}`}
//           onClick={() => setIsSignup(true)}
//         >
//           Signup
//         </button>
//       </div>
//       <div className="auth-box">
//         <h2 className="auth-title">{isSignup ? "Create an Account" : "Welcome Back"}</h2>
//         <form onSubmit={handleSubmit} className="auth-form">
//           {isSignup && (
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           )}
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
//         </form>
        
//         {/* Show the button only if the user is logged in */}
//         {isLoggedIn && (
//           <button className="dashboard-btn" onClick={handleNavigate}>
//             Go to Dashboard
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AuthForm;

// import "./AuthForm.css"; // Import the CSS file
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// function AuthForm() {
//   const [isSignup, setIsSignup] = useState(false);
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate(); // Initialize useNavigate

//   useEffect(() => {
//     // Check if the user is logged in by verifying JWT in localStorage
//     const token = localStorage.getItem("token");
//     if (token) {
//       setIsLoggedIn(true);
//       navigate("/dashboard"); // Redirect to Dashboard if already logged in
//     }
//   }, [navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const url = isSignup
//       ? "http://localhost:4000/signup"
//       : "http://localhost:4000/login";
//     const body = isSignup ? { username, email, password } : { email, password };

//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert(isSignup ? "User signed up successfully!" : "Login successful!");

//         // Store JWT token in localStorage
//         localStorage.setItem("token", data.token);
//         setIsLoggedIn(true); // Update state

//         // Clear input fields
//         setUsername("");
//         setEmail("");
//         setPassword("");

//         // Redirect to Dashboard
//         navigate("/dashboard");
//       } else {
//         alert(data.error || "Something went wrong!");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Error submitting form!");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-buttons">
//         <button
//           className={`login-btn ${!isSignup ? "login-active" : ""}`}
//           onClick={() => setIsSignup(false)}
//         >
//           Login
//         </button>
//         <button
//           className={`signup-btn ${isSignup ? "signup-active" : ""}`}
//           onClick={() => setIsSignup(true)}
//         >
//           Signup
//         </button>
//       </div>
//       <div className="auth-box">
//         <h2 className="auth-title">{isSignup ? "Create an Account" : "Welcome Back"}</h2>
//         <form onSubmit={handleSubmit} className="auth-form">
//           {isSignup && (
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           )}
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AuthForm;


// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./AuthForm.css";

// function AuthForm() {
//   const [isSignup, setIsSignup] = useState(false);
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate(); // Initialize navigation

//   useEffect(() => {
//     // Check if the user is already logged in
//     const token = localStorage.getItem("token");
//     if (token) {
//       navigate("/dashboard"); // Redirect to dashboard if logged in
//     }
//   }, [navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const url = isSignup
//       ? "http://localhost:4000/signup"
//       : "http://localhost:4000/login";
//     const body = isSignup ? { username, email, password } : { email, password };

//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert(isSignup ? "Signup successful!" : "Login successful!");
        
//         // Store JWT token in localStorage
//         localStorage.setItem("token", data.token);

//         // Redirect to Dashboard
//         navigate("/dashboard");
//       } else {
//         alert(data.error || "Something went wrong!");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Error submitting form!");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-buttons">
//         <button
//           className={`login-btn ${!isSignup ? "login-active" : ""}`}
//           onClick={() => setIsSignup(false)}
//         >
//           Login
//         </button>
//         <button
//           className={`signup-btn ${isSignup ? "signup-active" : ""}`}
//           onClick={() => setIsSignup(true)}
//         >
//           Signup
//         </button>
//       </div>
//       <div className="auth-box">
//         <h2 className="auth-title">{isSignup ? "Create an Account" : "Welcome Back"}</h2>
//         <form onSubmit={handleSubmit} className="auth-form">
//           {isSignup && (
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           )}
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AuthForm;


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthForm.css";

function AuthForm() {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Function to validate token
  const checkToken = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await fetch("http://localhost:4000/verify-token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Sending token in headers
          },
        });

        const data = await response.json();
        if (response.ok) {
          navigate("/dashboard"); // Redirect only if token is valid
        } else {
          localStorage.removeItem("token"); // Remove invalid token
        }
      } catch (error) {
        console.error("Error verifying token:", error);
      }
    }
  };

  useEffect(() => {
    checkToken();
  }, []); // Runs once on component mount

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isSignup
      ? "http://localhost:4000/signup"
      : "http://localhost:4000/login";
    const body = isSignup ? { username, email, password } : { email, password };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      if (response.ok) {
        alert(isSignup ? "Signup successful!" : "Login successful!");

        // Store JWT token in localStorage
        localStorage.setItem("token", data.token);

        // Redirect to Dashboard
        navigate("/dashboard");
      } else {
        alert(data.error || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form!");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-buttons">
        <button
          className={`login-btn ${!isSignup ? "login-active" : ""}`}
          onClick={() => setIsSignup(false)}
        >
          Login
        </button>
        <button
          className={`signup-btn ${isSignup ? "signup-active" : ""}`}
          onClick={() => setIsSignup(true)}
        >
          Signup
        </button>
      </div>
      <div className="auth-box">
        <h2 className="auth-title">{isSignup ? "Create an Account" : "Welcome Back"}</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          {isSignup && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>
      </div>
    </div>
  );
}

export default AuthForm;

// import AuthForm from "./AuthForm.jsx";
// function App() {
//  return (
//   <div>
//     <AuthForm/>
//   </div>
//  );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from "./AuthForm.jsx";
import Dashboard from "./components/Dashboard.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;


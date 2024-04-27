import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Route } from 'react-router-dom';
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import PrivateOutlet from "./PrivateOutlet";
// import PublicRoute from "./PublicRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/*" element={<PrivateOutlet/>}/>
              <Route path="/quiz/:id" element={<Quiz/>} />
              <Route path="/result/:id" element={<Result/>} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

// function App() {
//   return (
//     <div>
//     <MainNavigation/>
//       <Routes>
//         <Route exact path="/" component={Home} />
//         <PublicRoute exact path="/signup" component={Signup} />
//         <PublicRoute exact path="/login" component={Login} />
//         <PrivateRoute exact path="/quiz/:id" component={Quiz} />
//         <PrivateRoute exact path="/result/:id" component={Result} />
//       </Routes>
//     </div>
//   );
// }

export default App;

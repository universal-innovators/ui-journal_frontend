import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import Home from './pages/Home';
import Ijdpn from './pages/Ijdpn'
import Contact from './pages/Contact'
import About from './pages/About';
import Journals from './pages/Journals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
// import Register from './pages/Register';
import JournalTemplate from './pages/JournalTemplate';
// import NoFootLayout from './components/NoFootLayout';
// import { AuthProvider } from "./wrappers/AuthProvider"
// import ProtectedRoute from './pages/ProtectedRoute';
// import SubmitPaperForm from './pages/SubmitPaperForm';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
// import MySubmissions from './pages/MySubmissions';
// const dotenv = require("dotenv");
const router = createBrowserRouter([
  {
    path: "/", // Parent route
    element: <Layout />, // Layout component with Navbar and Footer
    children: [ // Child routes
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/journals",
        element: <Journals />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/ijdpn",
        element: <Ijdpn />
      },

      // {
        
      //   path: "/upload",
      //   element: 
      //   <ProtectedRoute>
      //     if not logged in then redirect to login page else to paper submission form
      //     <SubmitPaperForm />
      //   </ProtectedRoute>
      // },
      {
        path: "/journals/:id",
        element: <JournalTemplate />
      },
      {
        path: "/terms",
        element: <Terms />
      },
      {
        path: "/privacy",
        element: <Privacy />
      },
      // {
      //   path: "/submissions",
      //   element: <ProtectedRoute>

      //     <MySubmissions />
      //   </ProtectedRoute>
      // },
    ],
  },
  // {
  //   path: "/",
  //   element: <NoFootLayout />,

  //   children: [
  //     {
  //       path: "/register",
  //       element: <Register />
  //     },
  //     {
  //       path: "/login",
  //       element: <Login />
  //     }
  //   ]
  // },
]);

function App() {
  // console.log(process.env.REACT_APP_FIREBASE_APIKEY)
  return (
    // <AuthProvider>
      // <Navbar/> 
      <RouterProvider router={router} />
    // </AuthProvider> 
  );
}

export default App;

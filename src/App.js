import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import AddService from "./Pages/AddService/AddService";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import ManageServices from "./Pages/ManageServices/ManageServices";
import Register from "./Pages/Register/Register";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header />

      <Routes>

        <Route path='/' element={
          <Home />
        } />
        <Route path='/home' element={
          <Home />
        } />
        <Route path='/about' element={<About />} />
        <Route path='/service/:serviceId' element={<ServiceDetail />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>

        <Route path='/add-service' element={

          <RequireAuth>
            <AddService />
          </RequireAuth>



        }></Route>
        <Route path='/manage' element={

          <RequireAuth>
            <ManageServices/>
          </RequireAuth>



        }></Route>

        <Route path='/checkout' element={

          <RequireAuth>
            <CheckOut />
          </RequireAuth>

        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>

      <Footer />
    </div>
  );
}

export default App;

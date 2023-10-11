import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Header from './Components/Header';
import PrivateRoute from './Components/PrivateRoute';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter >
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route exact path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

//Outlet is used to render nested routes/Child routes
//Navigate is used to redirect to a specific route

export default function PrivateRoute() {
    const { currentUser } = useSelector((state) => state.user);
    return currentUser ? <Outlet /> : <Navigate to='/sign-in' />;
}
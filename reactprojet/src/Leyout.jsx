
import { Outlet } from 'react-router-dom'
import Test from "./pages/Test";
export default function Leyout() {
    return (
        <div className="p-4 flex flex-col min-h-screen">
            <Test />
            <Outlet />
        </div>
    );
}
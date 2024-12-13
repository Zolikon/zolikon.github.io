import Footer from "./Footer";
import { NavLink, Outlet } from "react-router";

function App() {
  return (
    <div className="flex flex-col h-full w-full text-stone-300">
      <header className="h-[10%] flex items-center justify-center bg-gradient-to-b from-teal-700 to-teal-950">
        <div className="text-center m-auto font-bold text-3xl text-stone-300">WorkDesk</div>
      </header>
      <main className="flex flex-grow bg-stone-950">
        <menu className="w-[20%] h-full bg-teal-950 text-stone-400 p-2">
          <ul className="flex flex-col gap-2 w-full items-center text-xs md:text-2xl">
            <NavLink to="/" className={({ isActive }) => (isActive ? "font-extrabold" : "")}>
              <p className="select-none">Home</p>
            </NavLink>
            <NavLink to="/gitalias" className={({ isActive }) => (isActive ? "font-extrabold" : "")}>
              <p className="select-none">Git alias</p>
            </NavLink>
          </ul>
        </menu>
        <div className="w-[80%] p-2">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

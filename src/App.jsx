import Footer from "./Footer";
import { NavLink, Outlet } from "react-router";

function App() {
  return (
    <div className="flex flex-col h-full w-full text-stone-300">
      <header className="h-[10%] flex items-center justify-center bg-gradient-to-b from-teal-700 to-teal-800">
        <NavLink to="/">
          <div className="text-center m-auto font-bold text-5xl select-none text-stone-300">WorkDesk</div>
        </NavLink>
      </header>
      <main className="flex flex-grow bg-stone-950">
        <menu className="w-[20%] h-full flex flex-col  text-stone-400">
          <div className="w-full h-[25%] bg-gradient-to-b from-teal-800 to-teal-950"></div>
          <ul className="flex flex-col gap-2 w-full flex-grow items-center pt-12 text-xs md:text-2xl bg-teal-950">
            <NavLink to="/" className={({ isActive }) => (isActive ? "font-extrabold" : "")}>
              <p className="select-none">Home</p>
            </NavLink>
            <NavLink to="/gitalias" className={({ isActive }) => (isActive ? "font-extrabold" : "")}>
              <p className="select-none">Git alias</p>
            </NavLink>
            <NavLink to="/design" className={({ isActive }) => (isActive ? "font-extrabold" : "")}>
              <p className="select-none">Design</p>
            </NavLink>
          </ul>
          <div className="w-full h-[25%] bg-gradient-to-b from-teal-950 to-teal-800"></div>
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

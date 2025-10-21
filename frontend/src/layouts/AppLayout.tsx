import { Outlet, NavLink } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 font-sans">
      <header className="bg-white border-b">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center gap-6">
          <div className="font-bold text-xl">Thrive</div>
          <nav className="flex items-center gap-4 text-sm">
            <NavLink to="/login" className="hover:underline">Login</NavLink>
            <NavLink to="/signup" className="hover:underline">Signup</NavLink>
            <NavLink to="/home" className="hover:underline">Home</NavLink>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}

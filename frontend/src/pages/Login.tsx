import PhoneInput from "@/components/PhoneInput";

export default function Login() {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-start">
      <section className="bg-white rounded-2xl p-8 shadow-card">
        <div className="w-28 h-28 rounded-full bg-amber-100 mb-6" />
        <h1 className="text-4xl font-bold">Welcome back!</h1>
        <p className="text-neutral-600">Login to your account.</p>

        <div className="mt-6 space-y-3 max-w-md">
          <PhoneInput />
          <input type="password" placeholder="Enter Password"
                 className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm placeholder:text-neutral-400 outline-none" />
          <div className="text-right text-xs text-neutral-500">Forgot Your Password?</div>
          <button className="w-full rounded-pill bg-black text-white py-3 text-sm font-semibold">Continue</button>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button className="px-6 py-2 rounded-pill border bg-white text-sm">Register</button>
          <button className="px-6 py-2 rounded-pill border bg-blue-50 text-sm font-medium">Login</button>
        </div>

        <div className="mt-10 text-[12px] text-neutral-500">Powered by <span className="font-semibold">Thrive</span></div>
      </section>

      <aside className="hidden lg:block">
        <div className="w-full h-[420px] rounded-2xl bg-amber-100 shadow-card"></div>
      </aside>
    </div>
  );
}

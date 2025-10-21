import PhoneInput from "../components/PhoneInput";
import SocialButton from "../components/SocialButton";

export default function Signup() {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-start">
      <section className="bg-white rounded-2xl p-8 shadow-card">
        <h1 className="text-4xl font-bold leading-tight">
          Be part of the<br/>Thrive Fam<br/>Register now!
        </h1>
        <p className="mt-3 text-neutral-600">Register an account!</p>

        <div className="mt-6 space-y-4 max-w-md">
          <PhoneInput />
          <button className="w-full rounded-pill bg-black text-white py-3 text-sm font-semibold">Continue</button>
          <p className="text-[12px] text-neutral-500">
            By proceeding from here, I agree to Vroom’s <a className="underline" href="#">Terms of Use</a> and <a className="underline" href="#">Privacy Policy</a>.
          </p>
        </div>

        <div className="mt-6 space-y-3 max-w-md">
          <SocialButton>Retrieve MyInfo with <span className="font-semibold text-red-600">singpass</span></SocialButton>
          <SocialButton icon={<img alt="" src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5"/>}>
            Continue with Google
          </SocialButton>
          <SocialButton icon={<img alt="" src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-5 h-5"/>}>
            Continue with Facebook
          </SocialButton>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button className="px-6 py-2 rounded-pill border bg-white text-sm font-medium">Register</button>
          <button className="px-6 py-2 rounded-pill border bg-white text-sm">Login</button>
        </div>

        <div className="mt-10 text-[12px] text-neutral-500">Powered by <span className="font-semibold">Thrive</span></div>
      </section>

      <aside className="hidden lg:block">
        <div className="w-full h-[420px] rounded-2xl bg-amber-100 shadow-card"></div>
      </aside>
    </div>
  );
}

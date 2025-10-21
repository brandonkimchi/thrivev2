export default function PhoneInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-4 py-3">
      <button type="button" className="flex items-center gap-1 text-sm">
        <span className="text-lg">🇸🇬</span>
        <span className="text-sm font-medium">+65</span>
        <svg width="14" height="14" viewBox="0 0 20 20" className="opacity-70">
          <path d="M5 7l5 6 5-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </svg>
      </button>
      <input {...props} className="flex-1 outline-none text-sm placeholder:text-neutral-400" placeholder="Enter Mobile Number"/>
    </div>
  );
}

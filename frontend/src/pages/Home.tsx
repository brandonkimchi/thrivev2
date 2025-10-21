import DealCard from "../components/DealCard";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="bg-white rounded-2xl p-6 shadow-card">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-100" />
            <div className="text-sm text-neutral-700">Find near</div>
          </div>
          <div className="text-xs text-neutral-500">11:30</div>
        </div>

        <div className="mt-4 max-w-md">
          <button className="w-full flex items-center justify-between rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm">
            Thomson Plaza
            <svg width="18" height="18" viewBox="0 0 20 20" className="opacity-70">
              <path d="M5 7l5 6 5-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {["Groceries","Food & Beverage","Snacks","Desserts"].map((t)=>(
            <div key={t} className="flex flex-col items-center gap-2 rounded-xl border bg-white py-4">
              <div className="w-12 h-12 rounded-full bg-amber-100" />
              <div className="text-sm font-medium text-center">{t}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-2xl p-6 shadow-card">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Snatch these deals before its too late!</h2>
          <button className="text-sm text-neutral-500">See All</button>
        </div>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <DealCard title="Blind Box of 6" price="$13.50" distance="2.33 km" />
          <DealCard title="Hawaiian Pizza" price="$4.90" distance="2.01 km" />
          <DealCard title="Chicken Rice" price="$4.76" distance="1.96 km" />
          <DealCard title="Salmon Sushi Set" price="$3.56" distance="1.22 km" />
        </div>
      </section>

      <section className="bg-white rounded-2xl p-6 shadow-card">
        <h3 className="text-lg font-semibold">Order Again</h3>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {["Pizza Hut","FairPrice","Crave","KFC","McD","Subway","BK","Starbucks"].map((b)=>(
            <div key={b} className="aspect-square rounded-full bg-neutral-200 flex items-center justify-center text-xs text-center p-2">{b}</div>
          ))}
        </div>
      </section>

      <div className="fixed right-6 bottom-6 w-[180px] h-[44px] rounded-pill bg-black text-white flex items-center justify-between px-5 text-sm shadow-lg">
        <span>Thrive Points</span><span className="font-semibold">3720</span>
      </div>
    </div>
  );
}

type Props = { title: string; price: string; distance?: string; tag?: string; image?: string };
export default function DealCard({ title, price, distance="2.0 km", tag="60% OFF", image }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-card overflow-hidden">
      <div className="h-40 bg-neutral-200">
        {image ? <img src={image} alt={title} className="w-full h-full object-cover"/> : null}
      </div>
      <div className="p-3 space-y-1">
        <div className="flex items-center gap-1 text-xs text-red-600">
          <svg width="12" height="12" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a7 7 0 017 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 017-7zm0 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/></svg>
          <span>{distance}</span>
          <span className="ml-auto text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded">{tag}</span>
        </div>
        <div className="text-sm font-medium leading-tight line-clamp-2">{title}</div>
        <div className="text-sm text-neutral-700">
          <span className="line-through mr-1 opacity-60">$22.90</span>
          <span className="font-semibold">{price}</span>
        </div>
      </div>
    </div>
  );
}

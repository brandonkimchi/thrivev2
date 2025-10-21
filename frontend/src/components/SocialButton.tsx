type Props = { icon?: React.ReactNode; children: React.ReactNode; onClick?: () => void };
export default function SocialButton({ icon, children, onClick }: Props) {
  return (
    <button onClick={onClick}
      className="w-full flex items-center justify-center gap-3 rounded-xl border border-neutral-300 bg-white py-3 text-sm font-medium hover:bg-neutral-50">
      {icon}{children}
    </button>
  );
}

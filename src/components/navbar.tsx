import DividerIcon from "@/components/icons/divider-icon";

export default function Navbar() {
  return (
    <div className="mb-8 flex items-center justify-center gap-4">
      <button className="hover:animate-glow flex cursor-pointer flex-col items-center justify-center gap-0.5 bg-transparent text-xl text-white">
        Home
        <DividerIcon className="h-auto w-24" />
      </button>
    </div>
  );
}

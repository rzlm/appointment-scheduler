import Link from "next/link";
import NextLogo from "./next-logo";
import SupabaseLogo from "./supabase-logo";

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      
      <p className="px-8  font-semibold text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
      Streamline Your Scheduling with Ease
      </p>
      <p className="px-8 text-lg lg:text-xl !leading-tight mx-auto max-w-xl text-center text-opacity-80">
      Say goodbye to endless back-and-forth emails. Set your availability, share your link, and let clients book appointments effortlessly.
      </p>
      <Link href='/scheduler'> <button className="button relative min-w-[120px] cursor-pointer px-4 py-3 border-0 rounded-[7px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] bg-[radial-gradient(ellipse_at_bottom,rgba(71,81,92,1)_0%,rgba(11,21,30,1)_45%)] text-white text-opacity-66 transition-all duration-1000 ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:scale-110 hover:-translate-y-0.5 hover:text-opacity-100">
Get started for free
  <span className="button-before absolute bottom-0 left-[15%] w-[70%] h-[1px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_50%,rgba(255,255,255,0)_100%)] opacity-20 transition-all duration-1000 ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:opacity-100"></span>
</button>
</Link>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}

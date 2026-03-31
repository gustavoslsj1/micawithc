"use client";

import Link from "next/link";
import { Search, Trophy, Home, Star } from "lucide-react";
import { usePathname } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function NavbarClient({ user }: { user: any }) {
  const pathname = usePathname();

  const FALLBACK_AVATAR = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%234f46e5'/%3E%3Cpath d='M50 45c7.5 0 13.64-6.14 13.64-13.64S57.5 17.72 50 17.72s-13.64 6.14-13.64 13.64S42.5 45 50 45zm0 6.82c-9.09 0-27.28 4.56-27.28 13.64v3.41c0 1.88 1.53 3.41 3.41 3.41h47.74c1.88 0 3.41-1.53 3.41-3.41v-3.41c0-9.08-18.19-13.64-27.28-13.64z' fill='%23fff'/%3E%3C/svg%3E`;
  const { isLoading } = useUser();

  const navItems = [
    { id: "/", label: "Home", icon: Home },
    { id: "/ranking", label: "Ranking", icon: Trophy },
    { id: "/Search", label: "Search", icon: Search },
    { id: "/salvos", label: "Salvos", icon: Star },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center gap-3 w-full bg-white/[0.03] rounded-2xl p-4 border border-white/[0.06]">
        <div className="w-12 h-12 rounded-full bg-white/10 animate-pulse shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="h-3.5 bg-white/10 rounded-full animate-pulse w-2/3" />
          <div className="h-3 bg-white/10 rounded-full animate-pulse w-1/2" />
        </div>
      </div>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-cyan-300 hover:via-purple-300 hover:to-pink-300 transition-all"
            >
              CyberReview
            </Link>
          </div>

          <div className="flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.id;

              return (
                <Link
                  key={item.id}
                  href={item.id}
                  className={`
                    flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all
                    ${
                      isActive
                        ? "bg-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                        : "text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10"
                    }
                  `}
                >
                  <Icon size={18} />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>
          <div className="flex flex-row gap-10">
            <a
              className="ring-1 font-bold ring-red-500/30 rounded-xl  py-2 px-5 bg-red-500/10 hover:bg-red-500/20  hover:ring-red-400/40"
              href="/auth/logout"
            >
              Logout
            </a>
            <img
              src={user.picture || FALLBACK_AVATAR}
              alt={user.name || "User"}
              referrerPolicy="no-referrer"
              className="w-11 h-11 rounded-full object-cover bg-slate-900 block"
              onError={(e) => {
                (e.target as HTMLImageElement).src = FALLBACK_AVATAR;
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

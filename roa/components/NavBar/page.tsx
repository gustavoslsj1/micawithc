"use client";
import Link from "next/link";
import { Search, Trophy, Home } from "lucide-react";

export default function Navbar() {
  const page =
    typeof window !== "undefined"
      ? window.location.pathname.replace("/", "")
      : "/";

  const currentPage = page === "" ? "/" : page;

  const navItems = [
    { id: "/", label: "Home", icon: Home },
    { id: "/ranking", label: "Ranking", icon: Trophy },
    { id: "/Search", label: "Search", icon: Search },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              //   onClick={() => onNavigate('home')}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-cyan-300 hover:via-purple-300 hover:to-pink-300 transition-all"
            >
              <Link href="/">CyberReview</Link>
            </button>
          </div>

          <div className="flex space-x-1  ">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;

              return (
                <button
                  key={item.id}
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
                  <a href={item.id} className="hidden sm:inline">
                    {item.label}
                  </a>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

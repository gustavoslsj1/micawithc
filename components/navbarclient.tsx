"use client";

import Link from "next/link";
import { Search, Trophy, Home, Star, Menu, X, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

type Props = {
  user?: {
    picture?: string;
    name?: string;
  };
};
export default function NavbarClient({ user }: Props) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const FALLBACK_AVATAR = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%234f46e5'/%3E%3Cpath d='M50 45c7.5 0 13.64-6.14 13.64-13.64S57.5 17.72 50 17.72s-13.64 6.14-13.64 13.64S42.5 45 50 45zm0 6.82c-9.09 0-27.28 4.56-27.28 13.64v3.41c0 1.88 1.53 3.41 3.41 3.41h47.74c1.88 0 3.41-1.53 3.41-3.41v-3.41c0-9.08-18.19-13.64-27.28-13.64z' fill='%23fff'/%3E%3C/svg%3E`;

  const navItems = [
    { id: "/", label: "Home", icon: Home },
    { id: "/ranking", label: "Ranking", icon: Trophy },
    { id: "/Search", label: "Search", icon: Search },
    { id: "/salvos", label: "Salvos", icon: Star },
  ];

  return (
    <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-cyan-300 hover:via-purple-300 hover:to-pink-300 transition-all"
        >
          DC
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.id;

            return (
              <Link
                key={item.id}
                href={item.id}
                className={`
                  flex items-center space-x-2 px-3 lg:px-4 py-2 rounded-lg font-medium transition-all text-sm lg:text-base
                  ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                      : "text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10"
                  }
                `}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          <a href="/auth/logout">
            <Button
              variant="outline"
              size="sm"
              className=" text-gray-700 border-red-500/30 hover:bg-secondary hover:text-secondary-foreground hover:ring-red-500/80 cursor-pointer neon-border-pink text-xs lg:text-sm"
            >
              <LogOut className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
              Logout
            </Button>
          </a>
          <a href="/perfil" className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-60 group-hover:opacity-80 transition-opacity" />
            <Avatar className="relative h-9 w-9 lg:h-10 lg:w-10 border-2 border-background">
              <AvatarImage
                src={user?.picture || FALLBACK_AVATAR}
                alt={user?.name || "User"}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = FALLBACK_AVATAR;
                }}
              />
              <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-background font-bold text-sm">
                {user?.name?.charAt(0) || "U"}
              </AvatarFallback>
            </Avatar>
          </a>
        </div>

        {/* Mobile Right Section */}
        <div className="flex md:hidden items-center gap-2 sm:gap-3">
          <a href="/perfil" className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-60" />
            <Avatar className="relative h-8 w-8 sm:h-9 sm:w-9 border-2 border-background">
              <AvatarImage
                src={user?.picture || FALLBACK_AVATAR}
                alt={user?.name || "User"}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = FALLBACK_AVATAR;
                }}
              />
              <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-background font-bold text-xs">
                {user?.name?.charAt(0) || "U"}
              </AvatarFallback>
            </Avatar>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-cyan-500/20 animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.id;

              return (
                <Link
                  key={item.id}
                  href={item.id}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all w-full
                    ${
                      isActive
                        ? "bg-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                        : "text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10"
                    }
                  `}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <div className="pt-2 mt-2 border-t border-cyan-500/20">
              <a
                href="/auth/logout"
                className="flex items-center justify-center gap-2 ring-1 font-bold ring-red-500/30 rounded-xl py-3 px-4 bg-red-500/10 hover:bg-red-500/20 hover:ring-red-400/40 text-red-400 w-full transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                <LogOut size={18} />
                <span>Logout</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

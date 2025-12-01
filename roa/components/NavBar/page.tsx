"use client";
import Link from "next/link";
import { Film, Tv, Trophy, Home } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const page =
    typeof window !== "undefined"
      ? window.location.pathname.replace("/", "")
      : "/";

  const currentPage = page === "" ? "/" : page;

  const navItems = [
    { id: "/", label: "Home", icon: Home },
    { id: "Ranking", label: "Ranking", icon: Trophy },
    { id: "animes", label: "Animes", icon: Tv },
    { id: "movies", label: "Movies", icon: Film },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/30">
      <div className="max-w-7xl flex justify-between flex-row mx-auto px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex  ">
          <Link
            href="/"
            className="flex items-center justify-center font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-cyan-300 hover:via-purple-300 hover:to-pink-300 transition-all"
          >
            <h1 className="text-2xl">CyberReview</h1>
          </Link>
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
    </nav>
  );
}

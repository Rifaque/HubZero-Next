// components/CommandTerminal.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { PortfolioData } from "@/types/portfolio";

interface CommandTerminalProps {
  data: PortfolioData;
  show: boolean;
  onToggle: () => void;
  history: string[];
  setHistory: React.Dispatch<React.SetStateAction<string[]>>;
}

const ALL_COMMANDS = [
  "help", "skills", "projects", "contact", "clear", "whoami", "theme", "exit", "ls",
  "about", "open", "cd", "resume", "version", "uptime", "logs", "env", "fortune",
  "neofetch", "date", "ascii", "coffee", "sudo", "hack", "echo", "man", "install",
  "matrix", "vim", "rm"
];

const TEAM_USERNAMES = ["rifaque", "iyad", "sultan", "junaid", "abdul"];

const COMMAND_ALIASES: Record<string, string> = {
  ls: "projects"
};

const MANUALS: Record<string, string> = {
  help: "Displays all available commands",
  skills: "Lists developer's skills",
  projects: "Shows featured projects",
  contact: "Shows contact information",
  cd: "Usage: cd [username] — navigates to teammate's portfolio",
  open: "Usage: open [github | linkedin | resume] — opens respective link",
  sudo: "Pretends to run command with elevated privileges",
  echo: "Usage: echo [text] — prints text",
  hack: "Fun command. Try it!",
  man: "Usage: man [command] — prints help for command",
  install: "Simulates package installation (e.g., install react)",
  matrix: "Simulates the Matrix...",
  vim: "Good luck exiting...",
  rm: "Pretends to delete everything (harmless)"
};

export default function CommandTerminal({ data, show, onToggle, history, setHistory }: CommandTerminalProps) {
  const [input, setInput] = useState("");
  const [, setCommandIndex] = useState<number>(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onToggle();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onToggle]);

  useEffect(() => {
    if (show && history.length === 0) {
      setHistory([
        "Hub Zero Portfolio Terminal [Version 1.0]",
        "(c) 2025 HubZero. All rights reserved.",
        "Type `help` to get started.\n",
        "[Tip] Press ESC to close terminal."
      ]);
    }
  }, [show, history.length, setHistory]);

  useEffect(() => {
    terminalRef.current?.scrollTo({ top: terminalRef.current.scrollHeight });
  }, [history]);

  const getRandomFortune = () => {
    const quotes = [
      "Code never lies, comments sometimes do.",
      "There’s no place like 127.0.0.1",
      "To understand recursion, you must first understand recursion.",
      "Git push and pray.",
      "It works on my machine!"
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  const handleCommand = (cmd: string) => {
    const args = cmd.trim().split(" ");
    let command = args[0].toLowerCase();

    if (COMMAND_ALIASES[command]) command = COMMAND_ALIASES[command];

    switch (command) {
      case "help":
        return `Available commands:\n\n${ALL_COMMANDS.join(", ")}`;
      case "skills":
        return data.skills.map(g => `${g.category}: ${g.items.join(", ")}`).join("\n");
      case "projects":
        return data.projects.map(p => `${p.name} (${p.start}) - ${p.desc}`).join("\n\n");
      case "contact":
        return `Email: ${data.socials.email.replace("mailto:", "")}, Phone: ${data.phone}`;
      case "clear":
        setHistory([]);
        setSuggestions([]);
        return "";
      case "whoami":
        return `You are visiting ${data.name}'s portfolio.`;
      case "theme":
        return "Dark mode active. Terminal is already on theme. ☕️";
      case "about":
        return data.about.join("\n\n");
      case "resume":
        window.open(data.resume, "_blank");
        return "Opening resume...";
      case "open": {
        const site = args[1]?.toLowerCase();
        if (site === "github") window.open(data.socials.github, "_blank");
        else if (site === "linkedin") window.open(data.socials.linkedin, "_blank");
        else if (site === "resume") window.open(data.resume, "_blank");
        else return `Usage: open [github | linkedin | resume]`;
        return `Opening ${site}...`;
      }
      case "cd": {
        const target = args[1];
        if (target) {
          router.push(`/${target}`);
          onToggle();
          return `Navigating to ${target}'s portfolio...`;
        }
        return `Usage: cd [username]`;
      }
      case "exit":
        onToggle();
        return "Closing terminal...";
      case "version":
        return "HubZero Portfolio Terminal v1.0.0 (build 2025.07.14)";
      case "uptime":
        return `Portfolio has been running for ${Math.floor(Math.random() * 100)} days.`;
      case "logs":
        return `[INFO] Loaded config\n[INFO] Fetched profile\n[WARN] Portfolio too awesome to handle 😎`;
      case "env":
        return "Stack: Next.js + Tailwind + TypeScript + MongoDB";
      case "fortune":
        return getRandomFortune();
      case "neofetch":
        return `Name: ${data.name}\nRole: ${data.title}\nLocation: ${data.location}\nProjects: ${data.projects.length}\nSkills: ${data.skills.length} categories`;
      case "date":
        return new Date().toString();
      case "ascii":
        return `     _____           \n    |__  /___ _ __ \n      / // _ \ '_ \ \n     / /|  __/ | | |\n    /____\___|_| |_|`;
      case "coffee":
        return "Brewing coffee... ☕️ Done!";
      case "sudo":
        return "Permission denied. You are not root 😄";
      case "hack":
        return "Accessing secret files...\nBypassing firewall...\nJust kidding. Stay ethical 💻";
      case "echo":
        return args.slice(1).join(" ") || "";
      case "install": {
        const pkg = args[1];
        return pkg ? `Installing ${pkg}... Done!` : "Usage: install [package]";
      }
      case "man": {
        const target = args[1]?.toLowerCase();
        if (target && MANUALS[target]) return `${target}:\n${MANUALS[target]}`;
        return "Usage: man [command]";
      }
      case "matrix":
        return "Wake up, Neo... The Matrix has you. (Simulation mode only)";
      case "vim":
        return "You're now stuck in vim. Just kidding. 😄";
      case "rm":
        return "Simulated rm -rf /... All files deleted. Wait... just kidding. 💣";
      default:
        return `Command not found: ${cmd}`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const output = handleCommand(trimmed);
    setHistory(prev => [...prev, `<span class='text-[#3ABEFF]'>~/portfolio/${data.username}&gt;</span> ${trimmed}`, output]);
    setCommandHistory(prev => [...prev, trimmed]);
    setCommandIndex(-1);
    setInput("");
    setSuggestions([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setCommandIndex(i => {
        const newIndex = Math.min(i + 1, commandHistory.length - 1);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
        return newIndex;
      });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setCommandIndex(i => {
        const newIndex = Math.max(i - 1, -1);
        setInput(newIndex === -1 ? "" : commandHistory[commandHistory.length - 1 - newIndex] || "");
        return newIndex;
      });
    } else if (e.key === "Tab") {
      e.preventDefault();
      if (suggestions.length > 0) {
        setInput(suggestions[0]);
        setSuggestions([]);
      }
    }
  };

  const handleInputChange = (val: string) => {
    setInput(val);
    const parts = val.trim().split(" ");
    if (parts[0] === "cd" && parts.length === 2) {
      const matches = TEAM_USERNAMES.filter(user => user.startsWith(parts[1].toLowerCase()));
      setSuggestions(matches);
    } else {
      const matches = ALL_COMMANDS.filter(cmd => cmd.startsWith(val.toLowerCase()));
      setSuggestions(val.trim() === "" ? [] : matches);
    }
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [show]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center animate-fade-in px-2 sm:px-0"
      onClick={onToggle}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          inputRef.current?.focus();
        }}
        className="w-full sm:w-[90vw] h-[80vh] sm:h-[75vh] max-w-5xl bg-[#1e1e1e]/80 text-[#d4d4d4] font-mono border border-[#3ABEFF] rounded-lg shadow-2xl flex flex-col overflow-hidden animate-slide-in"
        ref={terminalRef}
      >
        <div className="bg-[#2d2d2d]/80 text-white px-4 py-2 flex justify-between items-center text-sm">
          <span className="truncate">~/portfolio/{data.username} - Terminal</span>
          <button onClick={onToggle} className="hover:text-red-500">✕</button>
        </div>

        <div className="flex-1 overflow-y-auto whitespace-pre-wrap text-sm p-4 scrollbar-thin scrollbar-thumb-[#3ABEFF40] scrollbar-track-transparent hover:scrollbar-thumb-[#3ABEFF80] scrollbar-hide">
          {history.map((line, i) => (
            <div key={i} dangerouslySetInnerHTML={{ __html: line }} />
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-wrap sm:flex-nowrap items-center gap-2 border-t border-[#3ABEFF40] px-4 py-3">
          <span className="text-[#3ABEFF] shrink-0">~/portfolio/{data.username}&gt;</span>
          <input
            ref={inputRef}
            autoFocus
            type="text"
            value={input}
            onKeyDown={handleKeyDown}
            onChange={(e) => handleInputChange(e.target.value)}
            className="flex-1 bg-transparent outline-none caret-[#3ABEFF] text-white min-w-0"
          />
        </form>

        {suggestions.length > 0 && (
          <div className="text-xs text-white/50 px-4 pb-3 break-words">
            Suggestions: {suggestions.join(", ")}
          </div>
        )}
      </div>
    </div>
  );
}

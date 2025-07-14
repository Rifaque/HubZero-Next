"use client";

import { PiTerminalWindowFill } from "react-icons/pi";

export default function CmdButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full border border-[#3ABEFF] bg-[#0e0e10]/80 text-[#3ABEFF] hover:bg-[#3ABEFF] hover:text-black shadow-md backdrop-blur-md transition-all duration-200 active:scale-95"
    >
      <PiTerminalWindowFill className="text-lg" />
      <span className="text-sm font-semibold">CMD</span>
    </button>
  );
}

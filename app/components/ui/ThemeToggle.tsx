"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        setMounted(true);
        console.log(mounted);
    }, []);


    if (!mounted) return null;

    const isDark = resolvedTheme === "dark";
    function handleThemeChange() {
        setTheme( isDark ? "light" : "dark")
    }
    return (
        <button
            onClick={handleThemeChange}
            className="relative w-14 h-6 rounded-full text-sm
        bg-gray-200 dark:bg-gray-700
        transition-colors
           "
            aria-label="Toggle dark mode"
        >
            {/* Toggle knob */}
            <span
                className={clsx(
                    "absolute top-1 left-1 h-4 w-6 rounded-full",
                    "bg-white dark:bg-black",
                    "flex items-center justify-center",
                    "transition-transform duration-300",
                    isDark ? "translate-x-6" : "translate-x-0"
                )}
            >
        {
            isDark ? (
            <Moon size={14} className="text-black dark:text-black-500 dark:backgroud-gray-800" />
        ) : (
            <Sun size={14} className="text-yellow-500" />
        )}
      </span>
        </button>
    );
}
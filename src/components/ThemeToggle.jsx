import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/Utils";

export const ThemeToggle = () => {
  
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme=localStorage.getItem("theme");
    if(storedTheme ==="dark"){
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
    }else {
        localStorage.setItem("theme","light");
        setIsDarkMode(false);
        
    }
  },[]);


  const toggleTheme = () => {
    if (isDarkMode) {
        
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme","light");
        setIsDarkMode(false);
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme","dark");
        setIsDarkMode(true);
    }
  }

  
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-none",
         "sm:p-2 p-1 sm:top-5 top-3 sm:right-5 right-3"
      )}
    >
       {isDarkMode ? (
         <Sun className="h-6 w-6 text-yellow-300 sm:h-6 sm:w-6 h-5 w-5" />
        ) : (
         <Moon className="h-6 w-6 text-blue-900 sm:h-6 sm:w-6 h-5 w-5" />
       )}
    </button>

  );
};
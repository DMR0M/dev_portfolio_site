"use client";

import { useEffect, useState } from "react";

export function DayBackground() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const htmlClass = document.documentElement.classList;
    setIsDarkMode(htmlClass.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  if (isDarkMode) return null;

  return (
    <div className="fixed inset-0 z-0 bg-gradient-to-b from-blue-100 via-white to-yellow-50 animate-dayfade" />
  );
}

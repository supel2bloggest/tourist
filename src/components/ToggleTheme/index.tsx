"use client";
import { useContext } from "react";
import { ThemeContext, ThemeValue } from "@/components/Theme";

export default function ToggleTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <a
      onClick={() => {
        if (theme === ThemeValue.DEFAULT) {
          setTheme(ThemeValue.BLUESKY);
        } else if (theme === ThemeValue.BLUESKY) {
          setTheme(ThemeValue.DARKGOLD);
        } else {
          setTheme(ThemeValue.DEFAULT);
        }
      }}
      href="#"
      className="text-sm font-semibold leading-6 text-gray-900 border p-1 rounded"
    >
      Theme: {theme}
    </a>
  );
}

"use client";
import clsx from "clsx";
import React from "react";

interface Props {
  className: string;
  children: React.ReactNode;
}

export enum ThemeValue {
  DEFAULT = "default",
  BLUESKY = "bluesky",
  DARKGOLD = "dark-gold",
}

export const ThemeContext = React.createContext<{
  theme: ThemeValue;
  setTheme: (theme: ThemeValue) => void;
}>({
  theme: ThemeValue.DEFAULT,
  setTheme: (theme: ThemeValue) => {},
});

export default function Theme({ className, children }: Props) {
  const [theme, setTheme] = React.useState<ThemeValue>(ThemeValue.DEFAULT);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <main className={clsx(theme, className)}>{children}</main>
    </ThemeContext.Provider>
  );
}

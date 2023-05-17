"use client";
import { useContext, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ToggleTheme from "../ToggleTheme";
import { ThemeContext } from "../Theme";
import clsx from "clsx";

interface Props {
  isAuth: boolean;
}

export default function Header({ isAuth }: Props) {
  const { theme } = useContext(ThemeContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        className="mx-auto flex items-center place-items-center justify-between p-6 lg:px-8 bg-primary"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 font-semibold">
            <span>Tourist</span>
          </Link>
        </div>
        {!mobileMenuOpen && (
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        )}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
          <ToggleTheme />
          {!isAuth && (
            <Link
              className="text-sm font-semibold leading-8 text-gray-900"
              href="/auth/login"
            >
              Log in
            </Link>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel
          className={clsx(
            theme,
            "fixed w-80 bg-primary/80 bg-opacity-80 inset-y-0 right-0 z-10 overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          )}
        >
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 font-semibold">
              <span className="sr-only">Tourist</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6">
                <ToggleTheme />
                {!isAuth && (
                  <Link
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    href="/auth/login"
                  >
                    Log in
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

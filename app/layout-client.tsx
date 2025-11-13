"use client";

import { useEffect } from "react";
import { useLanding } from "@/app/context/LandingContext";

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isLandingVisible } = useLanding();

  // Disable scroll when landing quiz is visible
  useEffect(() => {
    if (isLandingVisible) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isLandingVisible]);

  return <>{children}</>;
}

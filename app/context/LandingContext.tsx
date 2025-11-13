'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface LandingContextType {
  isLandingVisible: boolean;
  setIsLandingVisible: (visible: boolean) => void;
}

const LandingContext = createContext<LandingContextType | undefined>(undefined);

export function LandingProvider({ children }: { children: React.ReactNode }) {
  const [isLandingVisible, setIsLandingVisible] = useState(true);

  useEffect(() => {
    try {
      const seen = localStorage.getItem('landingQuizSeen');
      setIsLandingVisible(!seen);
    } catch (e) {
      // localStorage might be unavailable in some environments
      setIsLandingVisible(true);
    }
  }, []);

  return (
    <LandingContext.Provider value={{ isLandingVisible, setIsLandingVisible }}>
      {children}
    </LandingContext.Provider>
  );
}

export function useLanding() {
  const context = useContext(LandingContext);
  if (!context) {
    throw new Error('useLanding must be used within LandingProvider');
  }
  return context;
}

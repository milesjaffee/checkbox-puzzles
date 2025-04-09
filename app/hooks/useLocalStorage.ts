import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const item = localStorage.getItem(key);
        setStoredValue(item ? JSON.parse(item) : initialValue);
      } catch (error) {
        console.error("Error reading localStorage:", error);
        setStoredValue(initialValue);
      }
    }
  }, [key, initialValue]);

  const setValue = (value: T) => {
    try {
        setStoredValue(value);
        if (typeof window !== "undefined") {
            localStorage.setItem(key, JSON.stringify(value));
        }
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };

  return [storedValue, setValue] as const;
}
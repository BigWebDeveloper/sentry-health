"use client";
import { useEffect } from "react";
// Register the service worker
// This file should be placed in the src/components/service-worker directory
export default function ServiceWorker() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js").catch((err) => {
        // Optional: handle errors
        console.error("Service Worker registration failed:", err);
      });
    }
  }, []);
  return null;
}

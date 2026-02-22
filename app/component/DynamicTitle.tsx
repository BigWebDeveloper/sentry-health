"use client";
import { useEffect, useMemo, useState } from "react";

const DynamicTitle = () => {
  const [title, setTitle] = useState("Santrys Healthcare");
  const titles = useMemo(
    () => [
      "Healthcare, Simplified",
      "Empowering Your Health Journey",
      "🖱️💡Santrys",
      "✨Innovating Healthcare, One Click at a Time",
      "✨Revolutionizing Healthcare, One Click at a Time",
    ],
    [],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const currentIndex = titles.indexOf(title);
      const nextIndex = (currentIndex + 1) % titles.length;
      setTitle(titles[nextIndex]);
    }, 3000);
    return () => clearInterval(timer);
  }, [title, titles]);
  return <title>{title}</title>;
};
export default DynamicTitle;

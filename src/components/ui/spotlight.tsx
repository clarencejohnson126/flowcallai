import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const Spotlight = ({
  className = "",
  fill = "white",
}: {
  className?: string;
  fill?: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const updatePosition = (event: MouseEvent) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  useEffect(() => {
    setOpacity(1);
  }, []);

  return (
    <div
      ref={divRef}
      onMouseMove={updatePosition}
      className={cn(
        "relative overflow-hidden rounded-md",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 transition duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${fill}, transparent 40%)`,
        }}
      />
    </div>
  );
};
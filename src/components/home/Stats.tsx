import React, { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 1200000,
    suffix: "",
    label: "Lives Insured",
    format: (val: number) => `${(val / 1000000).toFixed(1)} M`,
  },
  {
    value: 10,
    suffix: "+",
    label: "Years Of Service",
    format: (val: number) => `${val}+`,
  },
  {
    value: 550000000,
    suffix: "",
    label: "Worth of Insurance",
    format: (val: number) => `${val / 1000000}M`,
  },
];

const AnimatedCounter = ({
  end,
  duration = 200,
  format,
}: {
  end: number;
  duration?: number;
  format: (val: number) => string;
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = Date.now();
          const animate = () => {
            const currentTime = Date.now();
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOutQuart * end);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div ref={counterRef} className="text-4xl font-bold text-foreground mb-20">
      {format(count)}
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-8 bg-background">
      <div className="container-width px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AnimatedCounter end={stat.value} format={stat.format} />
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

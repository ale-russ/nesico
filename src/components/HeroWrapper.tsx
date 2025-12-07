import { cn } from "@/lib/utils";

interface HeroWrapperProps {
  children: React.ReactNode;
  className?: string;
}
const HeroWrapper = ({ children, className }: HeroWrapperProps) => {
  return (
    <div className="bg-primary text-primary-foreground  rounded-b-3xl ">
      <div className={cn("pt-0", className)}>{children}</div>
    </div>
  );
};

export default HeroWrapper;

const HeroWrapper = ({ children }) => {
  return (
    <div className="bg-primary from-primary to-accent text-primary-foreground  rounded-b-3xl pb-12 ">
      {children}
    </div>
  );
};

export default HeroWrapper;

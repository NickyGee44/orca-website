import { ComponentPropsWithoutRef, ReactNode } from "react";

type BentoGridProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
  className?: string;
};

type BentoCardProps = ComponentPropsWithoutRef<"div"> & {
  name: string;
  className?: string;
  background?: ReactNode;
  Icon?: React.ElementType;
  description?: string;
  href: string;
  cta?: string;
};

export const BentoGrid = ({ children, className = "", ...props }: BentoGridProps) => {
  return (
    <div
      className={`grid w-full auto-rows-[22rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  name,
  className = "",
  background,
  Icon,
  description,
  href,
  cta = "Learn more",
  ...props
}: BentoCardProps) => (
  <a
    href={href}
    className={`group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl bg-background border border-foreground/10 shadow-sm hover:shadow-md transition-shadow ${className}`}
    {...props}
  >
    {background && <div>{background}</div>}
    <div className="p-4">
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-2 transition-all duration-300 lg:group-hover:-translate-y-4">
        {Icon ? (
          <Icon className="h-10 w-10 origin-left transform-gpu text-foreground/70 transition-all duration-300 ease-in-out group-hover:scale-95" />
        ) : null}
        <h3 className="text-lg font-semibold text-foreground">{name}</h3>
        {description ? (
          <p className="max-w-lg text-foreground/60 text-sm">{description}</p>
        ) : null}
      </div>
      <div className="flex w-full items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="mt-3 inline-flex text-sm text-foreground/70 group-hover:text-foreground">
          {cta} →
        </span>
      </div>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-foreground/[.03]" />
  </a>
);



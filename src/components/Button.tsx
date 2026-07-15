import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "outline" | "ghost";
  className?: string;
  external?: boolean;
};

export function Button({
  children,
  href,
  onClick,
  variant = "outline",
  className = "",
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md px-6 py-3 font-mono text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/50";

  const variants = {
    outline:
      "border border-green text-green hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#64ffda]",
    ghost: "text-green hover:bg-green-tint",
  };

  const combined = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combined}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combined}>
      {children}
    </button>
  );
}

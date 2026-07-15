type SectionHeadingProps = {
  title: string;
  className?: string;
};

export function SectionHeading({ title, className = "" }: SectionHeadingProps) {
  return (
    <div className={`flex items-center gap-4 md:gap-7 ${className}`}>
      <h2 className="whitespace-nowrap text-2xl font-bold text-lightest-slate md:text-3xl">
        {title}
      </h2>
      <div className="h-px flex-1 max-w-xs bg-lightest-navy md:max-w-sm" />
    </div>
  );
}

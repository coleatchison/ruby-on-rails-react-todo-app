interface SectionProps {
  children: React.ReactNode;
}

export default function Section({ children }: SectionProps) {
  return (
    <section className="flex w-full">
      <div className="flex grow mx-auto max-w-4xl">{children}</div>
    </section>
  );
}

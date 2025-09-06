export function ScrollingBanner() {
  const items = [
    "Strategy",
    "Social",
    "Content",
    "Website",
    "Agency",
    "Solution",
    "Writing",
    "Digital",
    "Interaction",
    "Typography",
    "Mobile Apps",
    "Audit",
  ];

  return (
    <section className="py-12 bg-primary overflow-hidden">
      <div className="whitespace-nowrap">
        <div className="scrolling-text inline-flex items-center space-x-16 text-primary-foreground text-2xl font-bold">
          {/* Repeat items twice for seamless loop */}
          {[...items, ...items].map((item, index) => (
            <span key={index} className="flex items-center space-x-16">
              <span>{item}</span>
              <span>•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

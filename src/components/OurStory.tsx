import { motion } from "framer-motion";

const timeline = [
  { year: "2019", title: "First Meeting", desc: "A chance encounter at a friend's celebration." },
  { year: "2020", title: "First Date", desc: "Coffee turned into hours of conversation." },
  { year: "2022", title: "Moving Together", desc: "Building a home full of love and laughter." },
  { year: "2025", title: "The Proposal", desc: "Under the stars, a question that changed everything." },
  { year: "2026", title: "Forever Begins", desc: "The day we say 'I do' before the world." },
];

const OurStory = () => {
  return (
    <section className="py-20 px-6">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-script text-2xl text-gold-light">How It Happened</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mt-2">Our Story</h2>
      </motion.div>

      <div className="max-w-sm mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

        <div className="space-y-8">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              className="relative pl-16"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              {/* Dot */}
              <div className="absolute left-4 top-1 w-4 h-4 rounded-full border-2 border-gold bg-background" />

              <p className="text-xs uppercase tracking-[0.2em] text-gold font-body">{item.year}</p>
              <h3 className="font-display text-lg font-semibold text-cream mt-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-body mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;

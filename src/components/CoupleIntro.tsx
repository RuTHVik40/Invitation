import { motion } from "framer-motion";
import coupleImg from "@/assets/couple-hero.jpg";

const CoupleIntro = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={coupleImg} alt="" className="w-full h-full object-cover opacity-30" width={800} height={1024} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="relative z-10 text-center max-w-lg mx-auto">
        <motion.p
          className="font-script text-2xl md:text-3xl text-gold-light mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Together with their families
        </motion.p>

        <motion.div
          className="my-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold text-cream tracking-wide text-shadow-gold">
            Tejaswi
          </h1>
          <p className="font-script text-4xl md:text-5xl text-gold my-4">&</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-cream tracking-wide text-shadow-gold">
            Govardhan
          </h1>
        </motion.div>

        <motion.div
          className="w-24 h-px gradient-gold mx-auto my-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        />

        <motion.p
          className="font-body text-lg md:text-xl text-muted-foreground italic leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          "Two souls, one journey — bound by love, blessed by the stars."
        </motion.p>

        <motion.p
          className="mt-8 font-script text-xl text-gold-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Request the honour of your presence
        </motion.p>
      </div>
    </section>
  );
};

export default CoupleIntro;

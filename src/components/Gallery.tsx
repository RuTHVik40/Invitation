import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Haldi ceremony" },
  { src: gallery2, alt: "Mehndi ceremony" },
  { src: gallery3, alt: "Sangeet night" },
  { src: gallery4, alt: "Wedding ceremony" },
];

const Gallery = () => {
  return (
    <section className="py-20 px-6">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-script text-2xl text-gold-light">Cherished Moments</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mt-2">Gallery</h2>
      </motion.div>

      <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden rounded-xl border border-gold/10 group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={800}
              height={800}
              className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <p className="text-sm text-cream font-body">{img.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

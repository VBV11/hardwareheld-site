import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface PhotoSlideshowProps {
  basePath?: string;
  baseName?: string;
  extension?: string;
  intervalMs?: number;
  size?: string;
  altText?: string;
}

export const PhotoSlideshow = ({
  basePath = "/photos/ophalingen",
  baseName = "opgehaald",
  extension = "png",
  intervalMs = 4000,
  size = "w-80 h-80 lg:w-96 lg:h-96",
  altText = "Door Hardware Held opgehaalde apparatuur",
}: PhotoSlideshowProps) => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const detectPhotos = async () => {
      const found: string[] = [];
      const maxAttempts = 12;

      const tryLoad = (url: string) =>
        new Promise<boolean>((resolve) => {
          const img = new Image();
          img.onload = () => resolve(img.naturalWidth > 0 && img.naturalHeight > 0);
          img.onerror = () => resolve(false);
          img.src = url;
        });

      for (let i = 1; i <= maxAttempts; i++) {
        const url = `${basePath}/${baseName}${i}.${extension}`;
        const ok = await tryLoad(url);
        if (cancelled) return;
        if (!ok) break;
        found.push(url);
      }

      if (!cancelled) {
        setPhotos(found);
        setIsLoading(false);
      }
    };

    detectPhotos();
    return () => {
      cancelled = true;
    };
  }, [basePath, baseName, extension]);

  useEffect(() => {
    if (photos.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [photos.length, intervalMs]);

  if (isLoading || photos.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      className="relative"
    >
      {/* Soft ambient glow */}
      <div
        className="absolute -inset-10 rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle, hsl(25 100% 55% / 0.25), transparent 70%)",
        }}
        aria-hidden
      />

      {/* Subtle accent ring */}
      <div
        className="absolute -inset-[3px] rounded-full"
        style={{
          background:
            "linear-gradient(135deg, hsl(25 100% 55% / 0.6), hsl(35 100% 65% / 0.2) 50%, hsl(25 100% 55% / 0.4))",
        }}
        aria-hidden
      />

      {/* Photo frame */}
      <div
        className={`relative ${size} rounded-full overflow-hidden border-[3px] border-white shadow-[0_30px_70px_-20px_hsl(0_0%_0%_/_0.35)] bg-card`}
      >
        {photos.map((photo, index) => (
          <img
            key={photo}
            src={photo}
            alt={`${altText} ${index + 1}`}
            width={400}
            height={400}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "low"}
            decoding="async"
          />
        ))}

        {/* Subtle inner vignette for depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, transparent 60%, hsl(0 0% 0% / 0.2) 100%)",
          }}
          aria-hidden
        />
      </div>

      {/* Pagination dots */}
      {photos.length > 1 && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Foto ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-6 bg-primary"
                  : "w-1.5 bg-[#1A1A1A]/20 hover:bg-[#1A1A1A]/40"
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

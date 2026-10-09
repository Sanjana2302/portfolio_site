import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const frames = [
  { src: "/1stimg.jpg", alt: "Frame 1" },
  { src: "/2img.jpg", alt: "Frame 2" },
  { src: "/3img.jpg", alt: "Frame 3" },
  { src: "/4thimg.jpg", alt: "Frame 4" },
];

const animationObj = { frame: 0 };

export default function ScrollFaceAnimation() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+200%",
          scrub: 0.5,
          pin: true,
        },
      });

      tl.to(animationObj, {
        frame: frames.length - 1,
        snap: "frame",
        ease: "none",
        onUpdate: () => {
          const frameEls =
            containerRef.current.querySelectorAll(".avatar-frame");
          frameEls.forEach((el, i) => {
            el.style.display =
              i === Math.round(animationObj.frame) ? "block" : "none";
          });
        },
      });

      tl.to(textRef.current, { opacity: 1, y: 0, duration: 1 }, "<");
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative flex h-screen items-center justify-center overflow-hidden bg-background"
    >
      {/* Image frames */}
      <div className="relative h-[500px] w-[400px]">
        {frames.map((f, i) => (
          <img
            key={f.src}
            src={f.src}
            alt={f.alt}
            className="avatar-frame absolute inset-0 h-full w-full rounded-2xl object-cover shadow-xl"
            style={{ display: i === 0 ? "block" : "none" }}
          />
        ))}
      </div>

      {/* Overlay text */}
      <div
        ref={textRef}
        className="absolute bottom-[10%] font-heading text-3xl font-bold text-foreground"
        style={{ opacity: 0, transform: "translateY(50px)" }}
      >
        Welcome to My <span className="text-primary">Portfolio</span>
      </div>
    </div>
  );
}

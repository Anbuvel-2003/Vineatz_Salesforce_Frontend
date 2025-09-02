// ScrollSection.tsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Snapscrolling: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const wrapper = section.querySelector(".wrapper");
    const items = wrapper?.querySelectorAll(".item") ?? [];
    if (items.length === 0) return;
    // Reset and set initial state
    items.forEach((item, index) => {
      gsap.set(item, {
        yPercent: index === 0 ? 0 : 150,
      });
    });
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top",
        end: () => `+=${items.length * 100}%`,
        scrub: 1,
        invalidateOnRefresh: true,
        // markers: true, // Uncomment to debug
      },
      defaults: { ease: "none" },
    });
    items.forEach((item, index) => {
      // Animate current item scale
      timeline.to(item, {
        // scale: 0.9,
        borderRadius: "10px",
      });

      // Reveal next item
      if (index < items.length - 1) {
        timeline.to(
          items[index + 1],
          {
            yPercent: 0,
          },
          "<"
        );
      }
    });
    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);


  return (
    <div>
      <div
        ref={sectionRef}
        className="scroll-section vertical-section"
        style={{
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div className="wrapper">
          <div className="item" style={{ ...itemStyle, background: "#ffadad" }}>
            Section 1
          </div>
          <div className="item" style={{ ...itemStyle, background: "#ffd6a5" }}>
            Section 2
          </div>
          <div className="item" style={{ ...itemStyle, background: "#fdffb6" }}>
            Section 3
          </div>
        </div>
      </div>
    </div>
  );
};

const itemStyle: React.CSSProperties = {
  height: "100vh",
  width: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2rem",
};

export default Snapscrolling;



















// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Snapscrolling: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const sections = gsap.utils.toArray(".h-item") as HTMLElement[];

//     gsap.to(sections, {
//       xPercent: -100 * (sections.length - 1),
//       ease: "none",
//       scrollTrigger: {
//         trigger: container,
//         pin: true,
//         scrub: 1,
//         end: () => `+=${container.scrollWidth - window.innerWidth}`,
//         anticipatePin: 1,
//       },
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="h-scroll-section w-full h-screen overflow-hidden relative"
//     >
//       <div className="horizontal-wrapper flex w-max h-full">
//         <div className="h-item w-screen h-full bg-red-600 flex items-center justify-center text-white text-4xl font-bold">
//           Section 1
//         </div>
//         <div className="h-item w-screen h-full bg-green-600 flex items-center justify-center text-white text-4xl font-bold">
//           Section 2
//         </div>
//         <div className="h-item w-screen h-full bg-blue-600 flex items-center justify-center text-white text-4xl font-bold">
//           Section 3
//         </div>
//         <div className="h-item w-screen h-full bg-yellow-600 flex items-center justify-center text-white text-4xl font-bold">
//           Section 4
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Snapscrolling;

import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random";

function isDarkModeEnabled() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });


  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="white"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [docHeight, setDocHeight] = useState(0);

  useEffect(() => {
    // Update the document height dynamically
    const updateDocHeight = () => {
      setDocHeight(document.documentElement.scrollHeight);
    };

    updateDocHeight();
    window.addEventListener("resize", updateDocHeight);

    return () => {
      window.removeEventListener("resize", updateDocHeight);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 z-[-1] top-36"
      style={{
        width: "100%",
        // height: `${docHeight}px`, // Dynamically set height to match scrollable area
        height: "100%", // Dynamically set height to match scrollable area
      }}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;

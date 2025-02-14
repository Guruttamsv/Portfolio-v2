import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrthographicCamera, useGLTF, OrbitControls } from "@react-three/drei";
import "../CSS/IconsPage/FloatingIcons.css";
import * as THREE from "three";

// Component to load and display individual icons (models)
const FloatingIcon: React.FC<{
  modelPath: string;
  initialPosition: [number, number, number];
  targetPosition: [number, number, number];
  isMoving: boolean;
  onClick: () => void;
}> = ({ modelPath, initialPosition, targetPosition, isMoving, onClick }) => {
  const { scene } = useGLTF(modelPath); // Load GLTF model
  const ref = useRef<THREE.Object3D>(scene); // Create a ref for the scene object
  const [hovered, setHovered] = useState(false); // State for hover effect
  const [currentPosition, setCurrentPosition] = useState(initialPosition); // Set initial position
  const [currentScale, setCurrentScale] = useState(1); // Set initial scale
  const [iconScale, setIconScale] = useState(1); // Scale for icon based on viewport size

  // Inside the FloatingIcon component
  useEffect(() => {
    const updateScale = () => {
      const baseScale = window.innerWidth / 1000; // Base scale factor for larger screens

      // Check if it's a mobile device
      const isMobile = window.innerWidth <= 768;

      // Adjust scale for mobile devices
      const scaleFactor = isMobile ? 1.5 : 1; // Scale up for mobile devices by a factor of 1.5
      const maxScale = 2; // Set the maximum scale for the icons

      // Calculate the final scale, ensuring it doesn't exceed the maxScale
      const scale = Math.min(baseScale * scaleFactor, maxScale);

      setIconScale(scale);
    };

    // Call once initially and on every resize
    updateScale();
    window.addEventListener("resize", updateScale);

    return () => {
      window.removeEventListener("resize", updateScale); // Cleanup listener
    };
  }, []);

  // Smoothly transition position and scale between the current position and target
  useFrame(() => {
    if (ref.current) {
      // Determine the target position and scale based on the current state
      const targetPos = isMoving ? targetPosition : initialPosition;
      const targetScale = isMoving ? 1.6 * iconScale : iconScale; // Adjust scale when moving

      // Interpolate position smoothly
      const lerpedPosition = new THREE.Vector3().lerpVectors(
        new THREE.Vector3(...currentPosition),
        new THREE.Vector3(...targetPos),
        0.1 // Smoothness of the transition (0.1 is the speed factor)
      );
      setCurrentPosition([
        lerpedPosition.x,
        lerpedPosition.y,
        lerpedPosition.z,
      ]);

      // Interpolate scale smoothly
      const lerpedScale = THREE.MathUtils.lerp(currentScale, targetScale, 0.1); // Smoothly transition the scale
      setCurrentScale(lerpedScale);

      // Apply the updated position and scale to the object
      ref.current.position.set(
        currentPosition[0],
        currentPosition[1],
        currentPosition[2]
      );
      ref.current.scale.set(currentScale, currentScale, currentScale); // Apply interpolated scale

      // Handle hover effect for rotation (optional)
      if (hovered) {
        ref.current.rotation.x = THREE.MathUtils.lerp(
          ref.current.rotation.x,
          0, // No rotation change on hover, keeping it simple for demonstration
          0.2
        );
        ref.current.rotation.y = THREE.MathUtils.lerp(
          ref.current.rotation.y,
          0,
          0.2
        );
        ref.current.rotation.z = THREE.MathUtils.lerp(
          ref.current.rotation.z,
          0,
          0.2
        );
      }

      // Continue rotating the object
      ref.current.rotation.y += 0.01; // Add a small rotation increment
    }
  });

  const handleClick = () => {
    onClick(); // Notify parent to toggle the moving state
  };

  return (
    <primitive
      object={scene}
      position={currentPosition}
      ref={ref}
      onPointerOver={() => setHovered(true)} // Trigger hover state
      onPointerOut={() => setHovered(false)} // Remove hover state
      onClick={handleClick} // Handle object click
    />
  );
};

// Main component to display all floating icons
const FloatingIcons: React.FC<{ mobile?: boolean }> = ({ mobile = false }) => {
  const iconPaths = [
    "./assets/GLTFS/AirPods/AirPods.gltf",
    "./assets/GLTFS/Cactus/Cactus.gltf",
    "./assets/GLTFS/Calculator/Calculator.gltf",
    "./assets/GLTFS/Flashdrive/Flashdrive.gltf",
    "./assets/GLTFS/Joystick/Joystick.gltf",
    "./assets/GLTFS/Lifebuoy/Lifebuoy.gltf",
    "./assets/GLTFS/Mouse/Mouse.gltf",
    "./assets/GLTFS/Router/Router.gltf",
    "./assets/GLTFS/Rubiks Cube/Rubiks Cube.gltf",
    "./assets/GLTFS/Suitcase/Suitcase.gltf",
  ];

  // Desktop initial and target positions, scales
  const desktopInitialPositions: [number, number, number][] = [
    [6.5, 2, 0], // Airpods
    [-2.5, 2, 0], // Plant
    [1.5, 2, 0], // Calculator
    [8, -1, 0], // Flash Drive
    [4, -1, 0], // Joystick
    [-0.5, -1, 0], // Lifebuoy
    [-4, -1, 0], // Mouse
    [-2, -4, 0], // Router
    [6.5, -4.5, 0], // Cube
    [1.5, -4, 0], // Suitcase
  ];

  const desktopTargetPosition: [number, number, number] = [-8, 0, 1];

  const mobileInitialPositions: [number, number, number][] = [
    [-2.5, 1.5, 0], // Airpods
    [1.75, 1.5, 0], // Plant
    [-0.5, 1.5, 0], // Calculator
    [0.75, -3.5, 0], // Flash Drive
    [-1.5, 0, 0], // Joystick
    [0.75, 0, 0], // Lifebuoy
    [-1.5, -3.5, 0], // Mouse
    [-2.5, -1.5, 0], // Router
    [2, -1.75, 0], // Cube
    [-0.5, -2, 0], // Suitcase
  ];

  const mobileTargetPosition: [number, number, number] = [-0.5,3,1];

  // The card messages associated with each icon
  const cardMessages = [
    "Global Perspective and Cultural Competence: I bring a global perspective to my work, thriving in diverse teams and international projects. My cultural competence and adaptability enable me to effectively navigate and contribute to today’s interconnected, globalized work environment.",
    "Effective Communication That Influences and Inspires: My communication skills extend beyond clarity—I am adept at influencing and inspiring others. Whether mentoring team members or presenting complex ideas to senior management, I translate technical concepts into actionable insights that drive decision-making.",
    "Passion for Bridging Academia and Industry: I am deeply committed to applying academic knowledge to solve real-world problems. My projects, such as the Tip-Of-Tongue chatbot, reflect my focus on closing the gap between theoretical research and practical applications, driving innovation in every endeavor.",
    "Strategic Adaptability and Resourcefulness: I thrive in dynamic environments by not just adapting, but strategically leveraging new technologies to overcome obstacles. For example, I quickly mastered Selenium and C# during my internship, driving project success and turning potential challenges into opportunities.",
    "User-Centric Approach to Technology: My dedication to user experience sets me apart. I design solutions with the end-user in mind, as seen in my work on the Tip-Of-Tongue chatbot, ensuring that technology is not only functional but also intuitive and accessible.",
    "Interdisciplinary Skill Set for Comprehensive Problem-Solving: I bring a rare combination of deep technical expertise and strong leadership and problem-solving capabilities. This interdisciplinary skill set allows me to tackle challenges from multiple angles and deliver innovative, well-rounded solutions.",
    "Commitment to Continuous Learning and Innovation: I am passionate about staying at the cutting edge of technology. By integrating AI tools like ChatGPT into my learning process, I continuously expand my knowledge and stay ahead in the fast-evolving tech landscape, making me a valuable asset to any team.",
    "Proactive Leadership in High-Stakes Environments: I consistently step up to lead and mentor teams in challenging situations, as demonstrated by my role as the intern team leader at Transputec, where I guided projects to success despite significant challenges. My leadership ensures that projects stay on track and teams remain motivated.",
    "Proven Track Record of Exceeding Expectations: My ability to deliver results is not just about meeting targets; it's about setting new benchmarks. I consistently exceed expectations, whether increasing test coverage by 85% at Transputec or achieving 80% accuracy in complex machine learning projects.",
    "Innovative Problem-Solver with a Fresh Perspective: I approach problems with a fresh, innovative mindset, often identifying unique solutions that others might overlook. My drive to explore novel approaches adds significant value to the teams and projects I am part of.",
  ];

  const [targetPosition, setTargetPosition] = useState<
    [number, number, number]
  >(mobile ? mobileTargetPosition : desktopTargetPosition);

  const [movingObjectIndex, setMovingObjectIndex] = useState<number | null>(
    null
  );

  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (movingObjectIndex === index) {
      setMovingObjectIndex(null); // Move back to the initial position
      setActiveCardIndex(null); // Close the card
    } else {
      setMovingObjectIndex(index); // Move to the target position
      setActiveCardIndex(index); // Open the card with the message for this icon
    }
  };

  // Dynamically update icon and target positions based on window size
  const [updatedPositions, setUpdatedPositions] = useState(
    mobile ? mobileInitialPositions : desktopInitialPositions
  );

  const [updatedTargetPositions, setUpdatedTargetPositions] =
    useState(targetPosition);

  useEffect(() => {
    const updatePositions = () => {
      const isMobile = window.innerWidth <= 768;
      setUpdatedPositions(
        isMobile ? mobileInitialPositions : desktopInitialPositions
      );
      setUpdatedTargetPositions(
        isMobile ? mobileTargetPosition : desktopTargetPosition
      );
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);

    return () => {
      window.removeEventListener("resize", updatePositions);
    };
  }, []);

  return (
    <div className="play-container">
      <Canvas>
        <OrthographicCamera makeDefault zoom={60} position={[0, 0, 7]} />
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
        />
        <ambientLight intensity={2} />
        <directionalLight position={[10, 10, 10]} intensity={4} />

        {iconPaths.map((path, index) => (
          <FloatingIcon
            key={index}
            modelPath={path}
            initialPosition={updatedPositions[index]}
            targetPosition={updatedTargetPositions}
            isMoving={movingObjectIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </Canvas>

      {/* Card Display when an icon is clicked */}
      {activeCardIndex !== null && (
        <div className="popup-menu">
          <div className="popup-content">
            <div className="card-message">
              {cardMessages[activeCardIndex].split(":").map((part, index) => {
                if (index === 0) {
                  return (
                    <span key={index} className="card-title">
                      {part}:
                    </span>
                  );
                } else {
                  return (
                    <span key={index} className="card-text">
                      {part}
                    </span>
                  );
                }
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingIcons;

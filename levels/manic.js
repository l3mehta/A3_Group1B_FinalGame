// =============================================================================
// levels/manic.js — Manic Episode Configuration
// =============================================================================
// Defines all visual and gameplay parameters for the manic episode state.
// This episode represents the subjective experience of mania through:
// - Increased speed and racing heartbeat
// - Visual overstimulation (chromatic aberration, rotating minimap)
// - Frenetic camera motion
// - Chaotic, uncontrolled sensations
// =============================================================================

const MANIC_EPISODE = {
  name: "manic",
  displayName: "MANIC EPISODE",
  
  // Visual effects
  skyColor: 0x87ceeb, // Bright blue (back to normal)
  fov: 75, // Normal FOV
  ambientIntensity: 0.6, // Normal intensity
  
  // Shader effects
  distortion: 0, // No barrel distortion
  chromaticStrength: 0.8, // Strong color fringing
  
  // Camera behavior
  cameraShakeStrength: 0.50, // Intense shaking
  cameraShakeFrequencies: {
    x: 10.0, // Hz (much faster)
    y: 9.0,
    z: 8.0,
  },
  
  // Gameplay mechanics
  carSpeedMultiplier: 5.0, // 500% of normal speed
  
  // Minimap behavior
  minimapDiscovery: false, // Full minimap visibility
  minimapRotation: true, // Continuous rotation
  rotationSpeed: 0.06, // Degrees per millisecond (~60°/sec)
  showCheckpoints: false, // Hide checkpoints
  
  // Duration (in milliseconds)
  duration: 15000, // 15 seconds
  
  // Description for tooltip/tutorial
  description: "Manic episodes are marked by elevated mood, increased energy, racing thoughts, and impulsive behavior. The world feels fast, chaotic, and overwhelming.",
};

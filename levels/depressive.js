// =============================================================================
// levels/depressive.js — Depressive Episode Configuration
// =============================================================================
// Defines all visual and gameplay parameters for the depressive episode state.
// This episode represents the subjective experience of depression through:
// - Reduced speed and control
// - Disorienting visual effects (wobble, vignetting)
// - Dark, constrained environment
// - Limited spatial awareness (fog-of-war minimap)
// =============================================================================

const DEPRESSIVE_EPISODE = {
  name: "depressive",
  displayName: "DEPRESSIVE EPISODE",
  
  // Visual effects
  skyColor: 0x264c5e, // Dark night blue
  fov: 95, // Wider FOV for disorientation
  ambientIntensity: 1.2, // Boosted for night visibility
  
  // Shader effects
  distortion: 0.85, // Fisheye lens barrel distortion
  chromaticStrength: 0, // No chromatic aberration
  
  // Camera behavior
  cameraShakeStrength: 0.15, // Subtle but present
  cameraShakeFrequencies: {
    x: 3.5, // Hz
    y: 2.8,
    z: 2.2,
  },
  
  // Gameplay mechanics
  carSpeedMultiplier: 0.4, // 40% of normal speed
  
  // Minimap behavior
  minimapDiscovery: true, // Enable fog-of-war discovery
  minimapRotation: false, // No rotation
  showCheckpoints: false, // Hide checkpoints
  
  // Duration (in milliseconds)
  duration: 15000, // 15 seconds
  
  // Description for tooltip/tutorial
  description: "Depressive episodes are characterized by low mood, reduced motivation, and difficulty with cognitive tasks. In this game, the world feels slow and constrained.",
};

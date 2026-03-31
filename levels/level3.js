// =============================================================================
// levels/level3.js — Level 3 Definition
// =============================================================================
// Level 3 of the game. Currently identical to Level 1 and Level 2,
// but can be customized with different checkpoints or world modifications.
// =============================================================================

const LEVEL3 = {
  name: "level3",
  displayName: "LEVEL 3",
  checkpoints: [
    {
      x: -75,
      z: 55,
      r: 10,
      label: "Gas Station",
      color: 0xf5a623,
      emoji: "⛽",
    },
    { x: 0, z: -25, r: 12, label: "Downtown", color: 0x4ecdc4, emoji: "🏙️" },
    { x: 80, z: 70, r: 12, label: "Waterfront", color: 0x7bb8f5, emoji: "🌉" },
  ],
};

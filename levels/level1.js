// =============================================================================
// levels/level1.js — Level 1 Definition
// =============================================================================
// The main level for the full game. Currently identical to the tutorial,
// but can be customized with different checkpoints or world modifications.
// =============================================================================

const LEVEL1 = {
  name: "level1",
  displayName: "LEVEL 1",
  checkpoints: [
    {
      x: -75,
      z: 55,
      r: 10,
      label: "Gas Station",
      color: 0xf5a623,
      emoji: "⛽",
    },
  ],
  // Unpredictable depressive episode configuration
  // Simulates the real-life unpredictability of BPD episodes
  episodeDurationMin: 2000,  // Minimum episode duration in milliseconds (2 seconds)
  episodeDurationMax: 6000,  // Maximum episode duration in milliseconds (6 seconds)
  episodeCount: 3,           // Number of depressive episodes that occur during level (spread randomly throughout 30 seconds)
};

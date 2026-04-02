// =============================================================================
// levels/level3.js — Level 3 Definition
// =============================================================================
// Level 3 of the game: The ultimate challenge with both manic and depressive episodes
// Mixed episodes throughout the 60-second level to test mastery of mood states
// =============================================================================

const LEVEL3 = {
  name: "level3",
  displayName: "LEVEL 3",
  checkpoints: [
    {
      x: -55,
      z: -80,
      r: 12,
      label: "Green Hills",
      color: 0xff9900,
      emoji: "🏔️",
    },
    {
      x: 75,
      z: -50,
      r: 12,
      label: "Rocky Hills",
      color: 0x4ecdc4,
      emoji: "🌲",
    },
    { x: 45, z: 85, r: 12, label: "Waterfront", color: 0xff6b9d, emoji: "🏖️" },
  ],
  // Level 3: Mixed depressive and manic episodes configuration
  depressiveEpisodeCount: 2, // 2 depressive episodes (2-6 seconds each)
  depressiveEpisodeDurationMin: 2000,
  depressiveEpisodeDurationMax: 6000,
  manicEpisodeCount: 2, // 2 manic episodes (7-12 seconds each)
  manicEpisodeDurationMin: 7000,
  manicEpisodeDurationMax: 12000,
};

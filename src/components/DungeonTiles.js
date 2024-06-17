const DungeonTilesNothing = {
  edges: ["ZZZ", "ZZZ", "ZZZ", "ZZZ"],
  type: "skip_index_in_tileset",
  weight: 0,
};

export const DungeonTilesWfcDefinition = {
  options: {
    baseWeight: 10,
    startCell: {
      cell: "middle",
      tileIndex: 0,
    },
  },
  tiles: [
    // edges order is up, right, down, left
    // edge categories
    // A: empty space
    // B: wall
    // C: floor

    // row: 1
    {
      // 0: wall, top left corner
      edges: ["AAA", "AAB", "AAB", "AAA"],
      type: "wall",
      exceptions: undefined,
    },
    {
      // 1: wall, top
      edges: ["AAA", "AAB", "CCC", "AAB"],
      type: "wall",
      exceptions: { bottom: ["wall"] },
    },
    {
      // 2: wall, top
      edges: ["AAA", "AAB", "CCC", "AAB"],
      type: "wall",
      exceptions: { bottom: ["wall"] },
    },
    {
      // 3: wall, top
      edges: ["AAA", "AAB", "CCC", "AAB"],
      type: "wall",
      exceptions: { bottom: ["wall"] },
    },
    ...new Array(1).fill(DungeonTilesNothing),
    {
      // 5: wall, top right corner
      edges: ["AAA", "AAA", "BAA", "AAB"],
      type: "wall",
      exceptions: undefined,
    },
    {
      // 6: floor
      edges: ["CCC", "CCC", "CCC", "CCC"],
      type: "floor",
      exceptions: undefined,
      weight: 500,
    },
    ...new Array(3).fill(DungeonTilesNothing),
    // row: 2
    {
      // 10: wall, left
      edges: ["AAB", "CCC", "AAB", "AAA"],
      type: "wall",
      exceptions: { right: ["wall"] },
    },
    ...new Array(4).fill(DungeonTilesNothing),
    {
      // 15: wall, right
      edges: ["BAA", "AAA", "BAA", "CCC"],
      type: "wall",
      exceptions: { left: ["wall"] },
    },
    ...new Array(4).fill(DungeonTilesNothing),
    // row: 3
    ...new Array(10).fill(DungeonTilesNothing),
    // row: 4
    ...new Array(10).fill(DungeonTilesNothing),
    // row: 5
    {
      // 40: wall, bottom left corner
      edges: ["AAB", "BAA", "AAA", "AAA"],
      type: "wall",
      exceptions: undefined,
    },
    {
      // 41: wall, down
      edges: ["CCC", "BAA", "AAA", "BAA"],
      type: "wall",
      exceptions: { top: ["wall"] },
    },
    ...new Array(3).fill(DungeonTilesNothing),
    {
      // 45: wall, bottom right corner
      edges: ["BAA", "AAA", "AAA", "BAA"],
      type: "wall",
      exceptions: undefined,
    },
    ...new Array(4).fill(DungeonTilesNothing),
    // row: 6
    {
      // 50: wall, outer top-left corner
      edges: ["CCC", "BAA", "BAA", "CCC"],
      type: "wall",
      exceptions: undefined,
    },
    ...new Array(2).fill(DungeonTilesNothing),
    {
      // 53: wall, outer top-right corner
      edges: ["CCC", "CCC", "AAB", "BAA"],
      type: "wall",
      exceptions: undefined,
    },
    ...new Array(6).fill(DungeonTilesNothing),
    // row: 7
    ...new Array(10).fill(DungeonTilesNothing),
    // row: 8
    ...new Array(8).fill(DungeonTilesNothing),
    {
      // 78: empty space
      edges: ["AAA", "AAA", "AAA", "AAA"],
      type: "empty",
      exceptions: undefined,
      weight: 50,
    },
  ],
};

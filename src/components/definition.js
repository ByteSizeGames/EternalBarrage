// Description: Definition of the tile rules
export const simpleDefinition = {
  options: {
    saveInterval: 0.02,
    baseWeight: 10,
    startCell: {
      cell: "middle",
      cellCoords: { x: 14, y: 14 },
      index: 0,
    },
  },
  tiles: [
    {
      edges: ["AAA", "AAA", "AAA", "AAA"],
      type: "floor",
      exceptions: undefined,
      weight: 30,
    },
    {
      edges: ["BBB", "BBB", "BCA", "ACB"],
      type: "wall",
      exceptions: undefined,
      weight: 3,
    },
    {
      edges: ["BBB", "BCA", "ACB", "BBB"],
      type: "wall",
      exceptions: undefined,
      weight: 3,
    },
    {
      edges: ["BCA", "ACB", "BBB", "BBB"],
      type: "wall",
      exceptions: undefined,
      weight: 3,
    },
    {
      edges: ["ACB", "BBB", "BBB", "BCA"],
      type: "wall",
      exceptions: undefined,
      weight: 3,
    },
    {
      edges: ["ACB", "BCA", "AAA", "AAA"],
      type: "wall",
      exceptions: { down: ["wall"], left: ["wall"] },
      weight: 5,
    },
    {
      edges: ["BCA", "AAA", "AAA", "ACB"],
      type: "wall",
      exceptions: { right: ["wall"], down: ["wall"] },
      weight: 5,
    },
    {
      edges: ["AAA", "AAA", "ACB", "BCA"],
      type: "wall",
      exceptions: { up: ["wall"], right: ["wall"] },
      weight: 5,
    },
    {
      edges: ["AAA", "ACB", "BCA", "AAA"],
      type: "wall",
      exceptions: { up: ["wall"], left: ["wall"] },
      weight: 5,
    },
    {
      edges: ["BBB", "BCA", "AAA", "ACB"],
      type: "wall",
      exceptions: { down: ["wall"] },
      weight: 5,
    },
    {
      edges: ["BCA", "AAA", "ACB", "BBB"],
      type: "wall",
      exceptions: { right: ["wall"] },
      weight: 5,
    },
    {
      edges: ["AAA", "ACB", "BBB", "BCA"],
      type: "wall",
      exceptions: { up: ["wall"] },
      weight: 5,
    },
    {
      edges: ["ACB", "BBB", "BCA", "AAA"],
      type: "wall",
      exceptions: { left: ["wall"] },
      weight: 5,
    },
    {
      edges: ["BBB", "BBB", "BBB", "BBB"],
      type: "walltop",
      exceptions: undefined,
      weight: 20,
    },
  ],
};

// Description: Definition of the tile rules
export const angledDefinition = {
  options: {
    collapseType: "layers",
    saveInterval: 0.02,
    baseWeight: 4,
    numLayers: 2,
    startCell: {
      cell: "middle",
      cellCoords: { x: 14, y: 14 },
      index: 0,
    },
  },
  tiles: [
    {
      edges: ["A", "A", "A", "A"],
      type: "floor",
      exceptions: undefined,
      weight: 30,
    },
    {
      edges: ["B", "B", "B", "B"],
      type: "black",
      exceptions: undefined,
      weight: 10,
    },
    { edges: ["B", "BCC", "A", "CCB"], type: "wallbase" },
    {
      edges: ["CBB", "BCC", "A", "A"],
      type: "wallbase",
      exceptions: { left: ["wallbase", "wall", "walltop"] },
    },
    {
      edges: ["BBC", "A", "A", "CCB"],
      type: "wallbase",
      exceptions: { right: ["wallbase", "wall", "walltop"] },
    },
    {
      edges: ["CBC", "A", "A", "A"],
      type: "wallbase",
      exceptions: {
        right: ["wallbase", "wall", "walltop"],
        left: ["wallbase", "wall", "walltop"],
      },
      weight: 1,
    },
    {
      edges: ["CBB", "B", "BBC", "A"],
      type: "wall",
      exceptions: { left: ["wallbase", "wall", "walltop"] },
    },
    {
      edges: ["BBC", "A", "CBB", "B"],
      type: "wall",
      exceptions: { right: ["wallbase", "wall", "walltop"] },
    },
    {
      edges: ["CBC", "A", "CBC", "A"],
      type: "wall",
      exceptions: {
        left: ["wallbase", "wall", "walltop"],
        right: ["wallbase", "wall", "walltop"],
      },
      weight: 1,
    },
    {
      edges: ["CBC", "AB", "B", "BA"],
      type: "wall",
      exceptions: { right: ["wall"], left: ["wall"] },
      weight: 1,
    },
    {
      edges: ["CBC", "A", "CBB", "BA"],
      type: "wall",
      exceptions: { right: ["wallbase", "wall"], left: ["wall"] },
      weight: 1,
    },
    {
      edges: ["CBC", "AB", "BBC", "A"],
      type: "wall",
      exceptions: { right: ["wall"], left: ["wallbase", "wall"] },
      weight: 1,
    },
    {
      edges: ["B", "BCC", "CBC", "CCB"],
      type: "wall",
      exceptions: { right: ["wall"], left: ["wall"] },
      weight: 1,
    },
    {
      edges: ["BBC", "A", "CBC", "CCB"],
      type: "wall",
      exceptions: { right: ["wallbase", "wall", "walltop"], left: ["wall"] },
      weight: 1,
    },
    {
      edges: ["CBB", "BCC", "CBC", "A"],
      type: "wall",
      exceptions: { right: ["wall"], left: ["wallbase", "wall", "walltop"] },
      weight: 1,
    },
    {
      edges: ["CBB", "B", "B", "BA"],
      type: "wall",
      exceptions: { left: ["wall"] },
    },
    {
      edges: ["B", "B", "BBC", "CCB"],
      type: "wall",
      exceptions: { left: ["wall"] },
    },
    {
      edges: ["BBC", "AB", "B", "B"],
      type: "wall",
      exceptions: { right: ["wall"] },
    },
    {
      edges: ["B", "BCC", "CBB", "B"],
      type: "wall",
      exceptions: { right: ["wall"] },
    },
    {
      edges: ["A", "A", "CBC", "A"],
      type: "walltop",
      exceptions: {
        left: ["wallbase", "wall", "walltop"],
        right: ["wallbase", "wall", "walltop"],
      },
      layer: 1,
    },
    {
      edges: ["A", "AB", "BBC", "A"],
      type: "walltop",
      exceptions: { left: ["wallbase", "wall", "walltop"] },
      layer: 1,
    },
    {
      edges: ["A", "A", "CBB", "BA"],
      type: "walltop",
      exceptions: { right: ["wallbase", "wall", "walltop"] },
      layer: 1,
    },
    { edges: ["A", "AB", "B", "BA"], type: "walltop", layer: 1 },
    {
      edges: ["CBB", "BCC", "CBB", "BA"],
      type: "wall",
      exceptions: { right: ["wall"] },
      weight: 1,
    },
    {
      edges: ["BBC", "AB", "BBC", "CCB"],
      type: "wall",
      exceptions: { left: ["wall"] },
      weight: 1,
    },
  ],
  layers: {
    0: {
      fillTile: 0,
    },
    1: {
      fillTile: 25,
    },
  },
  post: {
    smallRooms: {
      handler: "fill",
      floorIndex: 0,
      fillIndex: 1,
      alphaIndex: 25,
    },
  },
};

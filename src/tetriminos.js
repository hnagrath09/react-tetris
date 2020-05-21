export const TETRIMONS = {
  0: { shape: [[0]] },
  I: {
    shape: [
      ["I", "I", "I", "I"],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  },
  J: {
    shape: [
      ["J", 0, 0],
      ["J", "J", "J"],
      [0, 0, 0],
    ],
  },
  L: {
    shape: [
      [0, 0, "L"],
      ["L", "L", "L"],
      [0, 0, 0],
    ],
  },
  O: {
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
  },
  S: {
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],
  },
  Z: {
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],
  },
  T: {
    shape: [
      ["T", "T", "T"],
      [0, "T", 0],
      [0, 0, 0],
    ],
  },
};

export const randomTetrimino = () => {
  const tetriminos = "IJLOSZT";
  const randTetrimino =
    tetriminos[Math.floor(Math.random() * tetriminos.length)];
  return TETRIMONS[randTetrimino];
};

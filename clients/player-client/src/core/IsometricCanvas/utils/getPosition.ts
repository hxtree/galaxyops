export type Vector = {
  top: { x: number; y: number };
  right: { x: number; y: number };
  left: { x: number; y: number };
  bottom: { x: number; y: number };
};

export function getPosition(vectors: Vector) {
  return {
    x: vectors.right.x - (vectors.right.x - vectors.left.x),
    y: vectors.top.y - 17,
  };
}

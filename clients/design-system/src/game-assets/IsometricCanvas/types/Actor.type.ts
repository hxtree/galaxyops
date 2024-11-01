export type Actor = {
  actorId: string;
  height?: number;
  position: {
    x: number;
    y: number;
    z: number;
  };
  // TODO how to handle sprites?
  // TODO how to handle animation?
  // TODO how to handle object state?
};

export type Gauge = {
  current: number;
  max: number;
  // stat bonus are computed at runtime
};

export type Life = Gauge;

export type Drive = Gauge;

// also called Stamina?
export type Spirit = Gauge;

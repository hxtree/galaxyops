// TODO some shapes do not tranlate well to 45 degree angles
export namespace AreaOfEffect {
  /**
   * [z axis][y axis][x axis]
   * 7 = hit, caster facing left
   * 0 = miss
   * 1 = hit
   *
   * each array entry represents a 5 square feet
   * no two players can occupy the same space
   */
  export type Type = number[][][];

  // Cone with a 15 ft range
  export const CONE_15FT: Type = [
    [
      [0, 0, 0], // 10ft - 15ft
      [1, 1, 0], //  0ft - 5ft
      [0, 0, 0], // 10ft - 15ft
    ],
    [
      [1, 0, 0], // 10ft - 15ft
      [1, 1, 7], //  0ft - 5ft
      [1, 0, 0], // 10ft - 15ft
    ],
    [
      [0, 0, 0], // 10ft - 15ft
      [1, 1, 0], //  0ft - 5ft
      [0, 0, 0], // 10ft - 15ft
    ],
  ];

  // Radius (Circle) with a 15 ft range
  export const RADIUS_15FT: Type = [
    [
      [0, 0, 1, 0, 0], // 15ft
      [0, 1, 1, 1, 0], // 10ft - 15ft
      [1, 1, 7, 1, 1], // 5ft - 10ft
      [0, 1, 1, 1, 0], // 10ft - 15ft
      [0, 0, 1, 0, 0], // 15ft
    ],
  ];

  // Burst with a 15 ft range
  export const BURST_15FT: Type = [
    [
      [0, 0, 1, 0, 0], // 10ft - 15ft
      [0, 1, 1, 1, 0], // 5ft - 10ft
      [1, 1, 1, 1, 7], // 0ft - 5ft
      [0, 1, 1, 1, 0], // 5ft - 10ft
      [0, 0, 1, 0, 0], // 10ft - 15ft
    ],
  ];

  // Line with a 15 ft range
  export const LINE_10FT: Type = [
    [
      [1, 7], // 0ft - 5ft
    ],
  ];

  // Line with a 15 ft range
  export const LINE_15FT: Type = [
    [
      [1, 1, 7], // 0ft - 5ft
    ],
  ];

  // Cube (3D area) with a 15 ft range
  export const CUBE_15FT: Type = [
    [
      [0, 1, 1, 1, 0], // 10ft - 15ft
      [1, 1, 1, 1, 1], // 5ft - 10ft
      [1, 1, 1, 1, 1], // 0ft - 5ft
      [1, 1, 1, 1, 1], // 5ft - 10ft
      [0, 1, 1, 1, 0], // 10ft - 15ft
    ],
    [
      [0, 1, 1, 1, 0], // 10ft - 15ft
      [1, 1, 1, 1, 1], // 5ft - 10ft
      [1, 1, 7, 1, 1], // 0ft - 5ft
      [1, 1, 1, 1, 1], // 5ft - 10ft
      [0, 1, 1, 1, 0], // 10ft - 15ft
    ],
    [
      [0, 1, 1, 1, 0], // 10ft - 15ft
      [1, 1, 1, 1, 1], // 5ft - 10ft
      [1, 1, 1, 1, 1], // 0ft - 5ft
      [1, 1, 1, 1, 1], // 5ft - 10ft
      [0, 1, 1, 1, 0], // 10ft - 15ft
    ],
  ];
}

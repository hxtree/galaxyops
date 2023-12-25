export type SelectChangeEvent<T = string> =
  | (Event & {
      target: {
        value: T;
        name: string;
      };
    })
  | React.ChangeEvent<HTMLInputElement>;

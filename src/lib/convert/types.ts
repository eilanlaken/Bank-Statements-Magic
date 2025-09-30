export type Converter = {
  name: string;
  convert: () => string | Promise<string>;
};

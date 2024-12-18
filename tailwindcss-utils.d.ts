/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "tailwindcss/lib/util/flattenColorPalette" {
    const flattenColorPalette: (colors: any) => Record<string, string>;
    export default flattenColorPalette;
  }
  
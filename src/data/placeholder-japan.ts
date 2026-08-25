/** Schematic (not N03) block layout. SVG user-space; labeled placeholder. */
export type SchematicBlock = {
  slug: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export const JAPAN_VIEWBOX = {width: 720, height: 980};

/**
 * Original schematic blocks arranged like the Japanese archipelago.
 * Not MLIT geometry. Replaced at runtime when data/derived TopoJSON exists.
 */
export const JAPAN_SCHEMATIC: SchematicBlock[] = [
  {slug: 'hokkaido', x: 400, y: 16, w: 250, h: 150},
  {slug: 'aomori', x: 460, y: 180, w: 130, h: 48},
  {slug: 'akita', x: 400, y: 228, w: 88, h: 58},
  {slug: 'iwate', x: 492, y: 228, w: 98, h: 58},
  {slug: 'yamagata', x: 400, y: 290, w: 88, h: 54},
  {slug: 'miyagi', x: 492, y: 290, w: 98, h: 54},
  {slug: 'fukushima', x: 420, y: 348, w: 150, h: 48},
  {slug: 'niigata', x: 348, y: 348, w: 68, h: 78},
  {slug: 'toyama', x: 292, y: 392, w: 52, h: 38},
  {slug: 'ishikawa', x: 258, y: 352, w: 32, h: 76},
  {slug: 'fukui', x: 238, y: 432, w: 52, h: 42},
  {slug: 'nagano', x: 348, y: 430, w: 68, h: 68},
  {slug: 'gunma', x: 420, y: 400, w: 52, h: 40},
  {slug: 'tochigi', x: 476, y: 400, w: 48, h: 40},
  {slug: 'ibaraki', x: 528, y: 400, w: 52, h: 52},
  {slug: 'yamanashi', x: 420, y: 444, w: 44, h: 36},
  {slug: 'saitama', x: 468, y: 444, w: 56, h: 30},
  {slug: 'tokyo', x: 468, y: 478, w: 44, h: 26},
  {slug: 'chiba', x: 528, y: 456, w: 56, h: 56},
  {slug: 'kanagawa', x: 456, y: 508, w: 52, h: 28},
  {slug: 'shizuoka', x: 372, y: 500, w: 80, h: 40},
  {slug: 'gifu', x: 308, y: 478, w: 56, h: 48},
  {slug: 'aichi', x: 308, y: 530, w: 60, h: 40},
  {slug: 'mie', x: 292, y: 574, w: 48, h: 56},
  {slug: 'shiga', x: 256, y: 490, w: 48, h: 40},
  {slug: 'kyoto', x: 214, y: 490, w: 40, h: 54},
  {slug: 'osaka', x: 214, y: 548, w: 40, h: 30},
  {slug: 'nara', x: 256, y: 548, w: 36, h: 40},
  {slug: 'wakayama', x: 228, y: 592, w: 52, h: 50},
  {slug: 'hyogo', x: 160, y: 500, w: 50, h: 56},
  {slug: 'tottori', x: 128, y: 468, w: 52, h: 28},
  {slug: 'shimane', x: 72, y: 468, w: 52, h: 48},
  {slug: 'okayama', x: 148, y: 560, w: 52, h: 38},
  {slug: 'hiroshima', x: 88, y: 540, w: 56, h: 44},
  {slug: 'yamaguchi', x: 36, y: 540, w: 48, h: 44},
  {slug: 'kagawa', x: 148, y: 612, w: 48, h: 24},
  {slug: 'tokushima', x: 200, y: 640, w: 56, h: 36},
  {slug: 'ehime', x: 88, y: 620, w: 56, h: 40},
  {slug: 'kochi', x: 128, y: 664, w: 84, h: 34},
  {slug: 'fukuoka', x: 20, y: 600, w: 52, h: 38},
  {slug: 'saga', x: 2, y: 612, w: 18, h: 30},
  {slug: 'nagasaki', x: 2, y: 646, w: 36, h: 40},
  {slug: 'oita', x: 52, y: 640, w: 44, h: 38},
  {slug: 'kumamoto', x: 16, y: 656, w: 36, h: 44},
  {slug: 'miyazaki', x: 52, y: 682, w: 40, h: 44},
  {slug: 'kagoshima', x: 16, y: 704, w: 48, h: 52},
  {slug: 'okinawa', x: 24, y: 860, w: 90, h: 36}
];

export const TOKUSHIMA_VIEWBOX = {width: 420, height: 420};

export const TOKUSHIMA_SCHEMATIC: SchematicBlock[] = [
  {slug: 'naruto', x: 310, y: 12, w: 92, h: 42},
  {slug: 'matsushige', x: 268, y: 36, w: 40, h: 28},
  {slug: 'kitajima', x: 236, y: 36, w: 30, h: 28},
  {slug: 'aizumi', x: 200, y: 32, w: 34, h: 32},
  {slug: 'itano', x: 158, y: 28, w: 40, h: 34},
  {slug: 'kamiita', x: 118, y: 36, w: 38, h: 28},
  {slug: 'miyoshi', x: 8, y: 48, w: 52, h: 86},
  {slug: 'higashimiyoshi', x: 62, y: 48, w: 48, h: 52},
  {slug: 'mima', x: 112, y: 68, w: 78, h: 72},
  {slug: 'awa', x: 192, y: 68, w: 52, h: 50},
  {slug: 'yoshinogawa', x: 246, y: 68, w: 52, h: 46},
  {slug: 'ishii', x: 300, y: 72, w: 36, h: 40},
  {slug: 'tokushima', x: 338, y: 58, w: 70, h: 54},
  {slug: 'komatsushima', x: 338, y: 116, w: 54, h: 34},
  {slug: 'tsurugi', x: 118, y: 144, w: 58, h: 46},
  {slug: 'kamiyama', x: 192, y: 124, w: 52, h: 48},
  {slug: 'sanagochi', x: 246, y: 120, w: 42, h: 34},
  {slug: 'katsuura', x: 290, y: 128, w: 42, h: 34},
  {slug: 'kamikatsu', x: 246, y: 158, w: 42, h: 30},
  {slug: 'anan', x: 312, y: 164, w: 76, h: 52},
  {slug: 'naka', x: 176, y: 196, w: 90, h: 70},
  {slug: 'minami', x: 286, y: 224, w: 78, h: 46},
  {slug: 'mugi', x: 250, y: 276, w: 58, h: 40},
  {slug: 'kaiyo', x: 170, y: 308, w: 90, h: 52}
];

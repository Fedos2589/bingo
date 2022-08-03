export const data = [
  ['bsaapYYqj9TXQDkmtLwX', 'x1F8v4S7zvZErh3oGp3o', 'ouk4KOrdXOrXs0vyGmA2', 'fYavkzvMG9tsCy3XEco0', 'M69MW0XonAUZuJL7kAvn'],
  ['YyGHVTZU0QRWrKNUGff3', 'CntBaMGLv56QSSXE9EVt', 'lVhcvcOD4LOd6Wqk8Z1o', 'cVGuGpoKwObtj0cLohh6', 'kYO4fdmZIg5Gc2zCyatv'],
  ['zAEthGM1zZHHqJS78siG', 'BpPhMSqnhJxX8MIDvZI9', 'YzyRpKKVtHRJCVLmMjuV', 'cToAjNeSeejEkWoQZOXH', 'bfqniQlAnz3HiADBOfT2'],
  ['fXPa1nKAoTUvzJD40ulk', 'cv4Yd9DiVSEU89nlE0lW', 'HQTSJTRaZ0OHy4SSD2xG', 'pnPJh8Q34Ban1SPdgct0', 'pbOHsWm7A5TplCuxAeMJ'],
  ['2HWkn76Wm6otdL1YxC6o', 'fD9uCWpNLWFpEgS2BLEZ', 'm1RcqGRYBjPwybKam8O0', 'o78yJDc8HcMHFkog9vSU', 'n3IIMVmIf1WRp6OFAOMF'],
]

export interface Cell {
  text: string;
  id: string;
  isActive?: boolean;
}

export const getInitialState = (data: string[][]): Cell[][] => data.map((row, rowIndex) => row.map((str, colIndex) => ({
  text: str,
  id: str,
  isActive: rowIndex === 2 && colIndex === 2,
})))
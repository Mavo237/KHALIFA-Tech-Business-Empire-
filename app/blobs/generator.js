export const fixedSize = 512;

const gradientColors = [
  ['#e96443', '#904e95'],
  ['#ff5f6d', '#ffc371'],
  ['#eecda3', '#ef629f'],
  ['#4ca1af', '#c4e0e5'],
  ['#c2e59c', '#64b3f4'],
  ['#3ca55c', '#b5ac49']
];

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function uniqueName() {
  return 'blob-' + Math.floor(Math.random() * 1000000);
}

export function generateBlob(parameters = {}) {
  const edges = parameters.edges || randomInt(6, 12);
  const colors = parameters.colors || gradientColors[randomInt(0, gradientColors.length - 1)];
  const name = parameters.name || uniqueName();
  const seed = parameters.seed || null;
  const growth = parameters.growth || randomInt(2, 9);

  const center = fixedSize / 2;
  const points = [];
  for (let i = 0; i < edges; i++) {
    const angle = (i / edges) * Math.PI * 2;
    const radius = center * 0.7 + randomInt(-30, 30) + growth * 3;
    points.push([center + Math.cos(angle) * radius, center + Math.sin(angle) * radius]);
  }

  let svgPath = 'M ' + points[0][0] + ' ' + points[0][1] + ' ';
  for (let i = 1; i <= points.length; i++) {
    const p = points[i % points.length];
    svgPath += 'L ' + p[0] + ' ' + p[1] + ' ';
  }
  svgPath += 'Z';

  return {
    parameters: { seed, edges, growth, colors, name },
    svgPath
  };
}

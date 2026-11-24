import { fixedSize } from './generator';

export function ShapeRenderer(props) {
  const { svgPath, colors } = props;
  const uniqueGradientId = 'gradient-' + Math.floor(Math.random() * 100000000);

  return (
    <div className="w-full bg-white text-center">
      {!!svgPath && !!colors && (
        <svg
          viewBox={'0 0 ' + fixedSize + ' ' + fixedSize}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
        >
          <>
            <defs>
              <linearGradient id={uniqueGradientId}>
                <stop offset="0%" stopColor={colors[0]} />
                <stop offset="100%" stopColor={colors[1]} />
              </linearGradient>
            </defs>
            <path id="blob" d={svgPath} fill={'url(#' + uniqueGradientId + ')'} />
          </>
        </svg>
      )}
    </div>
  );
}

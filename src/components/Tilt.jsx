import { useRef } from 'react';

const flat = () =>
  typeof window !== 'undefined' &&
  (window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    window.matchMedia('(hover: none)').matches);

export default function Tilt({
  as: Tag = 'div',
  max = 12,
  restX = 6,
  restY = -8,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null);

  const apply = (rx, ry, mx, my, lift) => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', `${rx}deg`);
    el.style.setProperty('--ry', `${ry}deg`);
    el.style.setProperty('--lift', String(lift));
    if (mx !== undefined) el.style.setProperty('--mx', `${mx}%`);
    if (my !== undefined) el.style.setProperty('--my', `${my}%`);
  };

  const handleMove = (event) => {
    if (flat()) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    apply((-y * max).toFixed(2), (x * max).toFixed(2), ((x + 0.5) * 100).toFixed(1), ((y + 0.5) * 100).toFixed(1), 1);
  };

  const handleLeave = () => apply(restX, restY, 50, 20, 0);

  return (
    <Tag
      ref={ref}
      className={`tilt ${className}`.trim()}
      style={{ '--rx': `${restX}deg`, '--ry': `${restY}deg` }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      {...rest}
    >
      {children}
    </Tag>
  );
}

import React, { ReactElement } from 'react';
import './GlassIcons.css';

const gradientMapping: Record<string, string> = {
  primary: 'linear-gradient(135deg, hsl(207, 90%, 54%), hsl(220, 85%, 45%))',
  blue: 'linear-gradient(135deg, hsl(212, 92%, 58%), hsl(224, 85%, 48%))',
  purple: 'linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))',
  red: 'linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))',
  indigo: 'linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))',
  orange: 'linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))',
  green: 'linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))',
  cyan: 'linear-gradient(hsl(190, 90%, 45%), hsl(175, 90%, 45%))',
  rose: 'linear-gradient(hsl(340, 90%, 55%), hsl(325, 90%, 55%))',
};

export interface GlassIconsItem {
  icon: ReactElement;
  color?: string;
  label: string;
  customClass?: string;
  href?: string;
  download?: boolean | string;
  onClick?: () => void;
}

export interface GlassIconsProps {
  items: GlassIconsItem[];
  className?: string;
  defaultColor?: string;
  onItemClick?: (item: GlassIconsItem, index: number) => void;
}

export const GlassIcons: React.FC<GlassIconsProps> = ({
  items = [],
  className = '',
  defaultColor = 'primary',
  onItemClick,
}) => {
  const getBackgroundStyle = (color?: string) => {
    const c = color || defaultColor;
    if (gradientMapping[c]) {
      return { background: gradientMapping[c] };
    }
    return { background: c };
  };

  return (
    <div className={`icon-btns ${className}`}>
      {items.map((item, index) => {
        const isExternal = item.href?.startsWith('http');
        const content = (
          <>
            <span className="icon-btn__back" style={getBackgroundStyle(item.color)} />
            <span className="icon-btn__front">
              <span className="icon-btn__icon" aria-hidden="true">
                {item.icon}
              </span>
            </span>
            <span className="icon-btn__label font-mono">{item.label}</span>
          </>
        );

        if (item.href) {
          return (
            <a
              key={index}
              href={item.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              download={item.download}
              className={`icon-btn ${item.customClass || ''}`}
              aria-label={item.label}
              onClick={() => {
                item.onClick?.();
                onItemClick?.(item, index);
              }}
            >
              {content}
            </a>
          );
        }

        return (
          <button
            key={index}
            className={`icon-btn ${item.customClass || ''}`}
            aria-label={item.label}
            type="button"
            onClick={() => {
              item.onClick?.();
              onItemClick?.(item, index);
            }}
          >
            {content}
          </button>
        );
      })}
    </div>
  );
};

export default GlassIcons;

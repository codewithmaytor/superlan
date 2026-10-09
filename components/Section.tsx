import React from 'react';

export type SectionTone = 'default' | 'tinted' | 'primary';

interface SectionProps {
  tone?: SectionTone;
  tightTop?: boolean;
  className?: string;
  children: React.ReactNode;
}

const toneClasses: Record<SectionTone, string> = {
  default: 'bg-background text-foreground',
  tinted: 'bg-surface-container text-foreground',
  primary: 'bg-primary text-on-primary',
};

const Section: React.FC<SectionProps> = ({ tone = 'default', tightTop = false, className = '', children }) => {
  const paddingClasses = tightTop ? 'pt-12 pb-16 md:pt-16 md:pb-24' : 'py-16 md:py-24';
  return <section className={`${paddingClasses} ${toneClasses[tone]} ${className}`}>{children}</section>;
};

export default Section;

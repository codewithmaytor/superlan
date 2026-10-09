import React from 'react';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface SlimPageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}

const SlimPageHeader: React.FC<SlimPageHeaderProps> = ({ title, subtitle, breadcrumbs = [] }) => {
  return (
    <header className="bg-surface-container border-b border-outline/15 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/logo.svg')] bg-no-repeat bg-center bg-[length:200px] opacity-[0.08] pointer-events-none z-0 md:bg-[length:260px] md:opacity-[0.07]" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center space-x-1 text-sm text-on-surface-variant mb-2">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <svg className="w-4 h-4 text-outline/60 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                )}
                {crumb.href ? (
                  <a href={crumb.href} className="hover:text-tertiary transition-colors duration-200">
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-foreground font-medium">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}
        <div className="relative flex items-center gap-4">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-on-surface-variant mt-2 max-w-3xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default SlimPageHeader;

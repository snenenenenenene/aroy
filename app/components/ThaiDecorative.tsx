'use client';

interface DecorativeLineProps {
  className?: string;
}

export const DecorativeLine = ({ className = '' }: DecorativeLineProps) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6 text-amber-500/40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4L10.1036 9.79389L4 10.1036L8.79389 13.8964L7.10355 20L12 16.2061L16.8964 20L15.2061 13.8964L20 10.1036L13.8964 9.79389L12 4Z"
        fill="currentColor"
      />
    </svg>
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
  </div>
);

interface ThaiPatternOverlayProps {
  className?: string;
}

export const ThaiPatternOverlay = ({ className = '' }: ThaiPatternOverlayProps) => (
  <div 
    className={`absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay ${className}`}
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L35 15H25L30 5zM30 55L25 45H35L30 55zM5 30L15 25V35L5 30zM55 30L45 35V25L55 30z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      backgroundSize: '60px 60px'
    }}
  />
);

interface SectionDecoratorProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionDecorator = ({ title, subtitle, className = '' }: SectionDecoratorProps) => (
  <div className={`text-center opacity-0 translate-y-4 animate-fadeInUp ${className}`}>
    <div>
      <h2 className="font-charm text-3xl sm:text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/60 max-w-2xl mx-auto px-4">
          {subtitle}
        </p>
      )}
      <DecorativeLine className="mt-6" />
    </div>
  </div>
);

export const FloatingElement = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`animate-float ${className}`}>
    {children}
  </div>
); 
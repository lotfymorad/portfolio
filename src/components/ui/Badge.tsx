interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'outline';
  className?: string;
}

const variants = {
  default: 'bg-white/5 text-gray-300 border border-white/10',
  primary: 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20',
  outline: 'border border-white/20 text-gray-400',
};

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}

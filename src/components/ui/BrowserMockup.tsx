import Image from 'next/image';
import React from 'react';

interface BrowserMockupProps {
  src?: string;
  alt?: string;
  url?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function BrowserMockup({ src, alt, url, className = '', children }: BrowserMockupProps) {
  return (
    <div className={`rounded-xl overflow-hidden border border-white/10 bg-[#141420] shadow-2xl ${className}`}>
      {/* Browser top bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0a0f] border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        {url && (
          <div className="flex-1 ml-4">
            <div className="bg-white/5 rounded-md px-3 py-1 text-xs text-gray-400 font-mono max-w-xs truncate">
              {url}
            </div>
          </div>
        )}
      </div>
      {/* Screenshot / Content */}
      {children ? (
        <div className="relative aspect-video overflow-hidden">
          {children}
        </div>
      ) : src ? (
        <div className="relative aspect-video">
          <Image
            src={src}
            alt={alt || "Project screenshot"}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
        </div>
      ) : null}
    </div>
  );
}

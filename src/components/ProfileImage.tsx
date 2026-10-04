import { useState } from 'react';
import { Camera } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface ProfileImageProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showUploadHint?: boolean;
}

export default function ProfileImage({
  className = '',
  size = 'md',
  showUploadHint = false,
}: ProfileImageProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Exact path requested: /assets/profile/profile.jpeg
  const imageSrc = PERSONAL_INFO.profileImagePath || '/assets/profile/profile.jpeg';
  const altText = 'Thamarapalli Gowtham profile photo';

  // Size preset helper
  const sizeClasses = {
    sm: 'w-16 h-16 rounded-xl text-lg',
    md: 'w-24 h-24 sm:w-28 sm:h-28 rounded-2xl text-2xl',
    lg: 'w-36 h-36 sm:w-44 sm:h-44 rounded-2xl text-3xl',
    xl: 'w-48 h-48 sm:w-56 sm:h-56 rounded-3xl text-4xl',
  };

  return (
    <div className={`relative group/avatar shrink-0 select-none ${className}`}>
      {/* Outer border & shadow wrapper */}
      <div
        className={`relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 shadow-md dark:shadow-xl transition-all duration-300 group-hover/avatar:border-indigo-400 dark:group-hover/avatar:border-indigo-500/60 ${sizeClasses[size]}`}
      >
        {/* If image hasn't errored out, attempt to render the local file */}
        {!imageError && (
          <img
            src={imageSrc}
            alt={altText}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Clean, styled placeholder when the image has not been uploaded yet or is loading */}
        {(!imageLoaded || imageError) && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-tr from-slate-100 via-slate-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/60 text-slate-800 dark:text-slate-200"
            aria-label={altText}
          >
            {/* Glowing background gradient accent */}
            <div className="absolute inset-0 bg-radial from-indigo-500/10 to-transparent pointer-events-none" />

            <span className="font-mono font-extrabold tracking-wider bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-500 dark:from-indigo-300 dark:via-sky-200 dark:to-white bg-clip-text text-transparent">
              {PERSONAL_INFO.initials}
            </span>

            {size !== 'sm' && (
              <span className="text-[10px] text-indigo-600 dark:text-indigo-400/80 font-mono mt-0.5 tracking-wider uppercase">
                Profile
              </span>
            )}
          </div>
        )}
      </div>

      {/* Subtle indicator for upload guide */}
      {showUploadHint && imageError && (
        <div className="mt-2.5 text-center">
          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded shadow-xs">
            <Camera className="w-3 h-3 text-indigo-500 dark:text-indigo-400" />
            <span>/assets/profile/profile.jpeg</span>
          </span>
        </div>
      )}
    </div>
  );
}

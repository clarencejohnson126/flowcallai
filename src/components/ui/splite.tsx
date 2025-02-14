'use client';
import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import { Phone } from 'lucide-react';

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setError(true);
    setIsLoading(false);
  };

  return (
    <div className={className}>
      {isLoading && !error && (
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
            <span>Loading 3D scene...</span>
          </div>
        </div>
      )}
      
      {error && (
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex flex-col items-center space-y-4 text-gray-400">
            <Phone className="w-16 h-16" />
            <span>Interactive 3D Preview</span>
          </div>
        </div>
      )}

      <div className={error ? 'hidden' : ''}>
        <Spline
          scene={scene}
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>
    </div>
  );
}
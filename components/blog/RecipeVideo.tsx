'use client';

import { useState, useRef } from 'react';
import { Play } from 'lucide-react';

interface RecipeVideoProps {
  src: string;
  poster?: string;
  title: string;
  caption?: string;
}

export function RecipeVideo({ src, poster, title, caption }: RecipeVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="w-full max-w-[720px] mx-auto px-4 my-12">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-[#2D150B] shadow-lg">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          controls={isPlaying}
          playsInline
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onEnded={() => setIsPlaying(false)}
          className="w-full h-full object-cover"
          aria-label={title}
        />
        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/40 via-transparent to-transparent cursor-pointer group"
            aria-label={`Play ${title}`}
          >
            <div className="w-20 h-20 rounded-full bg-[#FFFDF9]/95 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-white transition-all duration-300">
              <Play className="w-8 h-8 text-[#2D150B] ml-1" fill="#2D150B" />
            </div>
          </button>
        )}
      </div>
      {caption && (
        <p className="text-sm text-[#3E3E3E] mt-3 text-center italic">{caption}</p>
      )}
    </div>
  );
}

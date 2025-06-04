'use client';

import { Card } from "@/components/ui/card";
import { SpotlightNew } from "@/components/ui/spotlight-new";
import { Bot, Phone, Sparkles } from 'lucide-react';
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full min-h-[600px] md:h-[500px] bg-black relative overflow-hidden border-green-500/20">
      <div className="flex flex-col md:flex-row h-full">
        {/* Content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-400">
            Interaktives 3D
          </h1>
          <p className="mt-4 text-gray-300 max-w-lg">
            Erleben Sie unsere innovative Technologie in Aktion. Entdecken Sie, wie 
            unsere KI-gestützten Voice Agents Ihre Vertriebsprozesse transformieren.
          </p>
        </div>

        {/* Visual Element with Robot */}
        <div className="flex-1 min-h-[400px] md:min-h-0 relative flex items-center justify-center bg-gradient-to-br from-green-900/20 to-black">
          <div className="text-center relative">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <Sparkles className="w-8 h-8 text-green-400 animate-pulse" />
            </div>
            <Bot className="w-32 h-32 text-green-500 mb-4 animate-pulse" />
            <Phone className="w-16 h-16 text-cyan-400 absolute -right-8 bottom-0 animate-bounce" />
            <p className="text-gray-400 text-lg mt-4">
              KI-gestützte Voice Agents
            </p>
          </div>
          <SpotlightNew size={400} className="z-10" />
        </div>
      </div>
    </Card>
  );
}
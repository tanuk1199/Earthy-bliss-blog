import { Lightbulb } from 'lucide-react';

interface Tip {
  title: string;
  content: string;
}

interface TipsCalloutProps {
  tips: Tip[];
}

export function TipsCallout({ tips }: TipsCalloutProps) {
  return (
    <div className="w-full bg-[#2D150B] py-16 md:py-20 my-16">
      <div className="max-w-[720px] mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <Lightbulb className="w-5 h-5 text-[#CBAC96]" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#FFFDF9]">
            Tips From Our Kitchen
          </h2>
        </div>

        {/* Tips grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((tip, i) => (
            <div
              key={i}
              className="border-l-2 border-[#CBAC96] pl-5 py-1"
            >
              <h3 className="text-[15px] font-bold text-[#FFFDF9] mb-2">
                {tip.title}
              </h3>
              <p className="text-sm text-[#FFFDF9]/75 leading-relaxed">
                {tip.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

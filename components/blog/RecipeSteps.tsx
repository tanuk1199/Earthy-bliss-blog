interface RecipeStep {
  number: number;
  title: string;
  content: string;
  tip?: string;
}

interface RecipePhase {
  phase: number;
  title: string;
  steps: RecipeStep[];
}

interface RecipeStepsProps {
  phases: RecipePhase[];
}

export function RecipeSteps({ phases }: RecipeStepsProps) {
  return (
    <div className="w-full max-w-[720px] mx-auto px-4 my-16">
      {phases.map((phase, phaseIdx) => (
        <div key={phase.phase} className={phaseIdx > 0 ? 'mt-20' : ''}>
          {/* Phase header */}
          <div className="mb-10">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#CBAC96] font-semibold mb-2">
              Phase {phase.phase}
            </p>
            <h2 className="font-serif text-3xl md:text-[2.25rem] font-bold text-[#2D150B] leading-tight">
              {phase.title}
            </h2>
            <div className="mt-4 w-16 h-[2px] bg-[#CBAC96]" />
          </div>

          {/* Steps */}
          <div className="space-y-10">
            {phase.steps.map((step) => (
              <div key={step.number} className="flex gap-6 md:gap-8">
                {/* Step number */}
                <div className="flex-shrink-0 w-12 md:w-16">
                  <span className="font-serif text-[3rem] md:text-[3.75rem] font-bold leading-none text-[#CBAC96]/50">
                    {String(step.number).padStart(2, '0')}
                  </span>
                </div>

                {/* Step content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-lg font-bold text-[#2D150B] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#2D150B] text-[16px] leading-[1.8]">
                    {step.content}
                  </p>
                  {step.tip && (
                    <div className="mt-4 pl-4 border-l-2 border-[#CBAC96]">
                      <p className="text-sm text-[#3E3E3E] italic leading-relaxed">
                        {step.tip}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

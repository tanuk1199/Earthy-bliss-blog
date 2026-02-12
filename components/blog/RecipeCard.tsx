interface RecipeCardProps {
  title: string;
  recipeYield: string;
  prepTime: string;
  riseTime: string;
  bakeTime: string;
  totalTime: string;
  difficulty: string;
  ingredients: {
    section?: string;
    items: string[];
  }[];
  equipment: string[];
}

export function RecipeCard({
  title,
  recipeYield,
  prepTime,
  riseTime,
  bakeTime,
  totalTime,
  difficulty,
  ingredients,
  equipment,
}: RecipeCardProps) {
  return (
    <div className="w-full max-w-[720px] mx-auto px-4 my-16">
      <div className="relative bg-[#FFEFD2] rounded-sm overflow-hidden">
        {/* Double-line top border */}
        <div className="h-[3px] bg-[#CBAC96]" />
        <div className="h-[1px] bg-[#FFEFD2]" />
        <div className="h-[1px] bg-[#CBAC96]" />

        <div className="p-8 md:p-12">
          {/* Header */}
          <p className="text-[11px] tracking-[0.35em] uppercase text-[#CBAC96] font-semibold mb-3">
            Recipe
          </p>
          <h2 className="font-serif text-3xl md:text-[2.5rem] font-bold text-[#2D150B] leading-tight mb-8">
            {title}
          </h2>

          {/* Meta grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-4 mb-10 pb-10 border-b border-[#CBAC96]/40">
            {[
              { label: 'Yield', value: recipeYield },
              { label: 'Prep', value: prepTime },
              { label: 'Rise', value: riseTime },
              { label: 'Bake', value: bakeTime },
              { label: 'Total', value: totalTime },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#CBAC96] font-semibold mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-[#2D150B]">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Two-column: Ingredients + Equipment */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_auto] gap-8 md:gap-10">
            {/* Ingredients */}
            <div>
              <h3 className="text-[11px] tracking-[0.3em] uppercase font-bold text-[#2D150B] mb-5">
                Ingredients
              </h3>
              {ingredients.map((section, i) => (
                <div key={i} className={i > 0 ? 'mt-6' : ''}>
                  {section.section && (
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#CBAC96] font-semibold mb-3">
                      {section.section}
                    </p>
                  )}
                  <ul className="space-y-2.5">
                    {section.items.map((item, j) => (
                      <li
                        key={j}
                        className="text-[#2D150B] text-[15px] leading-relaxed flex items-start gap-3"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#CBAC96] mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Vertical divider */}
            <div className="hidden md:block bg-[#CBAC96]/40" />

            {/* Equipment */}
            <div className="md:min-w-[200px]">
              <h3 className="text-[11px] tracking-[0.3em] uppercase font-bold text-[#2D150B] mb-5">
                Equipment
              </h3>
              <ul className="space-y-2.5">
                {equipment.map((item, i) => (
                  <li
                    key={i}
                    className="text-[#2D150B] text-[15px] leading-relaxed flex items-start gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CBAC96] mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Double-line bottom border */}
        <div className="h-[1px] bg-[#CBAC96]" />
        <div className="h-[1px] bg-[#FFEFD2]" />
        <div className="h-[3px] bg-[#CBAC96]" />
      </div>
    </div>
  );
}

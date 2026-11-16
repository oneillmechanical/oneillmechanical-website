import Image from "next/image";

type FeaturedWorkCardProps = {
  category: "Residential" | "Commercial";
  title: string;
  description: string;
  items: string[];
  image: string;
};

function ResidentialIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className="h-12 w-12 shrink-0"
    >
      <path
        d="M8 30 32 10l24 20"
        fill="none"
        stroke="#DCEAF4"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 27v27h34V27"
        fill="#DCEAF4"
        stroke="#DCEAF4"
        strokeWidth="2"
      />
      <rect x="25" y="36" width="14" height="18" fill="#163A55" />
      <path
        d="M43 15v11"
        stroke="#E3342F"
        strokeWidth="5"
        strokeLinecap="square"
      />
    </svg>
  );
}

function CommercialIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className="h-12 w-12 shrink-0"
    >
      <path d="M10 55V20h31v35Z" fill="#DCEAF4" />
      <path d="M41 55V9h13v46Z" fill="#E3342F" />

      <g fill="#163A55">
        <rect x="16" y="27" width="7" height="7" />
        <rect x="28" y="27" width="7" height="7" />
        <rect x="16" y="39" width="7" height="7" />
        <rect x="28" y="39" width="7" height="7" />
        <rect x="44" y="16" width="6" height="7" />
        <rect x="44" y="29" width="6" height="7" />
      </g>
    </svg>
  );
}

export default function FeaturedWorkCard({
  category,
  title,
  description,
  items,
  image,
}: FeaturedWorkCardProps) {
  return (
    <article className="relative min-h-[820px] overflow-hidden rounded-2xl border border-[#AABAC6] bg-[#0D2A3D] shadow-xl shadow-slate-900/15 lg:min-h-[880px]">
      {/* Full background artwork */}
      <Image
        src={image}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
        aria-hidden="true"
      />

      {/* HTML content confined to blue portion of generated artwork */}
      <div className="absolute inset-x-0 bottom-0 top-[46%] z-10 flex flex-col px-5 pb-5 pt-5 text-white sm:px-5">
        {/* Residential / Commercial identification */}
        <div className="flex items-center gap-3">
          {category === "Residential" ? (
            <ResidentialIcon />
          ) : (
            <CommercialIcon />
          )}

          <p className="text-sm font-bold uppercase tracking-[0.08em] text-[#B9C9D8]">
            {category}
          </p>
        </div>

        {/* Title */}
        <h3 className="mt-3 text-[22px] font-bold leading-[1.15] text-white sm:text-2xl">
          {title}
        </h3>

        {/* Red brand accent */}
        <div className="mt-4 h-1 w-16 rounded-full bg-[#E3342F]" />

        {/* Description */}
        <p className="mt-3 text-[14px] leading-[1.45] text-[#D7E1E9] sm:text-[15px]">
          {description}
        </p>

        {/* Service list */}
        <ul className="mt-3 space-y-1">
          {items.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 text-[13px] leading-[1.35] text-[#D7E1E9] sm:text-[14px]"
            >
              <span
                className="shrink-0 text-lg font-bold leading-5 text-[#5CB7F1]"
                aria-hidden="true"
              >
                ✓
              </span>

              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
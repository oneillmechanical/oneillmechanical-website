import Image from "next/image";
import Link from "next/link";

type ServiceFeatureProps = {
  title: string;
  label: string;
  description: string;
  secondaryDescription: string;
  href: string;
  icon: string;
  image: string;
  imageAlt: string;
  items: string[];
  textSide?: "left" | "right";
};

export default function ServiceFeature({
  title,
  label,
  description,
  secondaryDescription,
  href,
  icon,
  image,
  imageAlt,
  items,
  textSide = "left",
}: ServiceFeatureProps) {
  const textOnRight = textSide === "right";

  const imagePosition = textOnRight ? "lg:left-0" : "lg:right-0";
  const contentPosition = textOnRight ? "lg:ml-auto" : "lg:mr-auto";

  return (
    <div className="relative lg:min-h-[650px]">
      {/* Service image - rear layer */}
      <div
        className={`relative min-h-[340px] overflow-hidden rounded-2xl border border-[#AABAC6] bg-[#F4F7F9] shadow-xl shadow-slate-900/15 lg:absolute lg:top-1/2 lg:h-[90%] lg:min-h-0 lg:w-[54%] lg:-translate-y-1/2 ${imagePosition}`}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 54vw"
          className="object-cover"
        />
      </div>

      {/* Service content - overlapping front layer */}
      <div
        className={`relative z-10 -mt-8 mx-4 rounded-2xl border border-white/70 bg-white/80 p-6 shadow-2xl shadow-slate-900/15 backdrop-blur-[3px] sm:mx-8 sm:p-8 lg:mx-0 lg:mt-0 lg:w-[60%] lg:p-10 ${contentPosition}`}
      >
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 shrink-0 rounded-xl bg-[#E9EEF2]/90 shadow-sm">
            <Image
              src={icon}
              alt=""
              fill
              sizes="64px"
              className="object-contain p-1"
              aria-hidden="true"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2F7FAF]">
              {label}
            </p>

            <h2 className="mt-1 text-3xl font-bold text-[#17324D] sm:text-4xl">
              {title}
            </h2>
          </div>
        </div>

        <p className="mt-6 leading-7 text-[#374B5C]">
          {description}
        </p>

        <p className="mt-4 leading-7 text-[#526879]">
          {secondaryDescription}
        </p>

        <ul className="mt-6 grid gap-x-6 gap-y-3 text-[#374B5C] sm:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="flex gap-2">
              <span
                className="font-bold text-[#2F7FAF]"
                aria-hidden="true"
              >
                ✓
              </span>

              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Link
            href={href}
            className="inline-flex items-center rounded-lg bg-[#17324D] px-5 py-3 font-semibold text-white transition-colors duration-200 hover:bg-[#245577] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3282B8] focus-visible:ring-offset-2"
          >
            Explore {title} Services

            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
import type { CSSProperties } from "react";
import { outside } from "../data/profile";
import { Reveal } from "./Reveal";
import {
  BasketballIcon,
  BookIcon,
  FilmIcon,
  GolfIcon,
  PlaneIcon,
  TrophyIcon,
} from "./icons";

const icons: Record<
  string,
  (props: { className?: string; style?: CSSProperties }) => React.JSX.Element
> = {
  film: FilmIcon,
  trophy: TrophyIcon,
  golf: GolfIcon,
  basketball: BasketballIcon,
  book: BookIcon,
  plane: PlaneIcon,
};

export function Outside() {
  return (
    <section
      id="outside"
      className="border-b px-5 py-20 sm:px-6"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2
            className="mb-7 font-mono text-sm font-bold uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            Outside school and work
          </h2>
        </Reveal>

        <Reveal delay={60}>
          <p
            className="mb-8 max-w-3xl text-[1.075rem] leading-[1.85]"
            style={{ color: "var(--muted)" }}
          >
            {outside.intro}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outside.interests.map((interest, i) => {
            const Icon = icons[interest.icon];
            return (
              <Reveal key={interest.title} delay={i * 60}>
                <div className="interest-card h-full">
                  <div className="mb-3 flex items-center gap-2.5">
                    <span className="interest-icon">
                      {Icon && <Icon className="h-4 w-4" />}
                    </span>
                    <div className="text-[1rem] font-semibold">
                      {interest.title}
                    </div>
                  </div>
                  <p
                    className="text-[0.95rem] leading-[1.7]"
                    style={{ color: "var(--muted)" }}
                  >
                    {interest.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { skillGroups } from '../../data/skills';
import { Section, TagList } from '../ui/primitives';

/**
 * Technical skills, grouped by what they are for.
 *
 * No percentage bars. Proficiency in a library is not a measurable fraction,
 * and a self-assigned "React 50%" tells a reader nothing they can act on —
 * the case studies above are the evidence. Highlighted chips mark the
 * technologies I work in day to day.
 */
export default function Skills() {
  return (
    <Section
      id="skills"
      label="05 — Skills"
      title="Technical skills"
      intro="Grouped by what they are used for. Highlighted items are the ones I work in day to day."
    >
      <div className="space-y-10">
        {skillGroups.map((group, index) => (
          <div
            key={group.id}
            className="reveal grid gap-x-10 gap-y-4 border-t border-line pt-7 sm:grid-cols-[minmax(0,13rem)_minmax(0,1fr)]"
            style={{ '--reveal-delay': `${index * 50}ms` }}
          >
            <div>
              <h3 className="text-[0.9375rem] font-semibold tracking-tight text-ink">
                {group.title}
              </h3>
              {group.note ? (
                <p className="mt-1 text-[0.8125rem] leading-snug text-subtle">{group.note}</p>
              ) : null}
            </div>
            <TagList items={group.skills} />
          </div>
        ))}
      </div>
    </Section>
  );
}

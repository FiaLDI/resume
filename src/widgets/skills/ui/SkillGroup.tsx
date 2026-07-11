import { SkillGroup as SkillGroupType } from "@/entities/skill";
import { ToTopLeaped } from "@/shared/ui/animation";

export const SkillGroup = ({ group }: { group: SkillGroupType }) => {
  return (
    <ToTopLeaped>
      <div className="relative ">

        {group.glow && (
          <div className="absolute -inset-12 rounded-3xl bg-indigo-500/10 blur-3xl pointer-events-none" />
        )}

        <div className="relative rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 transition-colors hover:border-indigo-500/40 ">

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">

            <div className="lg:w-72 shrink-0">
              <h3 className="text-2xl font-semibold tracking-tight">
                {group.level}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                {group.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 w-full lg:w-[450px]">
              {group.stack.map((skill) => (
                <span
                  key={skill}
                  className=" rounded-full border border-neutral-700 bg-neutral-800/60 px-3 py-1.5 text-sm text-neutral-200 transition-all hover:border-indigo-500/60 hover:bg-indigo-500/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ToTopLeaped>
  );
};

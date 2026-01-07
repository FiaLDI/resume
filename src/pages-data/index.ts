import { SkillsData } from "@/entities/skill/model/skills";
import { HeroData } from "./hero";
import { ProjectsData } from "./projects";
import { TimelineData } from "./timeline";
import { ContactData } from "@/entities/contact/model/contact";

export const dictionaries = {
  hero: HeroData,
  skills: SkillsData,
  contacts: ContactData,
  projects: ProjectsData,
  timeline: TimelineData,
};


export type DictionaryKey = keyof typeof dictionaries;

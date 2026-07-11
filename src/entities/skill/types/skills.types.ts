

export type SkillItemType = {
  capability: string;
  stack: string[];
};

export type SkillGroup = {
  level: string;
  description: string;
  glow?: boolean;
  stack: string[];
};

export type SkillsGroupDict = {
  groups: SkillGroup[];
};

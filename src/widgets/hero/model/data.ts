import { Language } from "@/shared/lib";
import { HeroDict } from "../types/hero.type";

export const HeroData: Record<Language, HeroDict> = {
  en: {
    title: "Leonid Stepanov",
    subTitle: "Full-Stack Developer",
    value:
      "Full-Stack Developer with commercial experience building modern web applications. I develop scalable frontend and backend solutions, design REST APIs, work with SSR, databases, and containerized environments, while focusing on clean architecture and maintainable code.",
    highlights: [
      "TypeScript · Next.js · FastAPI · Node.js",
      "React · Express · PostgreSQL · MongoDB",
      "Clean Architecture · DDD · REST API · SSR",
      "Docker · SQLAlchemy · Redis · Socket.IO",
    ],
    ctaSkills: "Skills",
    ctaPrimary: "Projects",
    image: "/images/leonid.jpg",
  },

  ru: {
    title: "Леонид Степанов",
    subTitle: "Full-Stack разработчик",
    value:
      "Full-Stack разработчик с коммерческим опытом разработки современных веб-приложений. Создаю масштабируемые frontend и backend решения, проектирую REST API, работаю с SSR, базами данных и Docker, уделяя особое внимание архитектуре, качеству кода и поддерживаемости проектов.",
    highlights: [
      "TypeScript · Next.js · FastAPI · Node.js",
      "React · Express · PostgreSQL · MongoDB",
      "Clean Architecture · DDD · REST API · SSR",
      "Docker · SQLAlchemy · Redis · Socket.IO",
    ],
    ctaSkills: "Навыки",
    ctaPrimary: "Проекты",
    image: "/images/leonid.jpg",
  },
};
import { Language } from "@/shared/lib";
import { SkillsGroupDict } from "../types/skills.types";

export const SkillsGroupData: Record<Language, SkillsGroupDict> = {
  en: {
    groups: [
      {
        level: "Frontend",
        description:
          "Building modern and scalable user interfaces.",
        glow: true,
        stack: [
          "React",
          "Next.js",
          "TypeScript",
          "Feature-Sliced Design",
          "SSR",
          "Zustand",
          "Redux",
          "MobX",
          "React Query",
        ],
      },
      {
        level: "Backend",
        description:
          "Designing APIs, services and application architecture.",
        stack: [
          "Node.js",
          "FastAPI",
          "Express",
          "Hono",
          "REST API",
          "JWT",
          "Socket.IO",
          "DDD",
          "Clean Architecture",
        ],
      },
      {
        level: "Infrastructure",
        description:
          "Deployment, databases and development workflow.",
        stack: [
          "PostgreSQL",
          "MongoDB",
          "SQLite",
          "Redis",
          "Prisma",
          "SQLAlchemy",
          "Docker",
          "Docker Compose",
          "Nginx",
          "Git",
          "CI/CD",
        ],
      },
      {
        level: "Currently Exploring",
        description:
          "Technologies I'm actively learning through side projects.",
        stack: [
          "Rust",
          "Tauri",
          "GraphQL",
          "Unity",
          "FishNet",
          "WebRTC",
        ],
      },
    ],
  },

  ru: {
    groups: [
      {
        level: "Frontend",
        description:
          "Разработка современных масштабируемых пользовательских интерфейсов.",
        glow: true,
        stack: [
          "React",
          "Next.js",
          "TypeScript",
          "Feature-Sliced Design",
          "SSR",
          "Zustand",
          "Redux",
          "MobX",
          "React Query",
        ],
      },
      {
        level: "Backend",
        description:
          "Разработка API, серверной логики и архитектуры приложений.",
        stack: [
          "Node.js",
          "FastAPI",
          "Express",
          "Hono",
          "REST API",
          "JWT",
          "Socket.IO",
          "DDD",
          "Clean Architecture",
        ],
      },
      {
        level: "Инфраструктура",
        description:
          "Базы данных, контейнеризация и процессы разработки.",
        stack: [
          "PostgreSQL",
          "MongoDB",
          "SQLite",
          "Redis",
          "Prisma",
          "SQLAlchemy",
          "Docker",
          "Docker Compose",
          "Nginx",
          "Git",
          "CI/CD",
        ],
      },
      {
        level: "Изучаю сейчас",
        description:
          "Технологии, которые осваиваю в pet-проектах и экспериментах.",
        stack: [
          "Rust",
          "Tauri",
          "GraphQL",
          "Unity",
          "FishNet",
          "WebRTC",
        ],
      },
    ],
  },
};
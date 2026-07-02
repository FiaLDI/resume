import { Language } from "@/shared/lib";
import { SkillsGroupDict } from "../types/skills.types";

export const SkillsGroupData: Record<Language, SkillsGroupDict> = {
  en: {
    groups: [
      {
        level: "Core Expertise",
        description:
          "Technologies I use to design and build production-ready full-stack applications with scalable architecture.",
        glow: true,
        items: [
          {
            capability:
              "Building modern frontend applications with scalable architecture",
            stack: [
              "React",
              "Next.js",
              "TypeScript",
              "Feature-Sliced Design",
              "SSR",
            ],
          },
          {
            capability:
              "Designing backend services, REST APIs, and business logic",
            stack: [
              "FastAPI",
              "Node.js",
              "Express",
              "Hono",
              "REST API",
              "JWT",
              "DDD",
              "Clean Architecture",
            ],
          },
          {
            capability:
              "Application state management and server synchronization",
            stack: [
              "Zustand",
              "MobX",
              "Redux",
              "React Query",
              "Socket.IO",
            ],
          },
        ],
      },
      {
        level: "Infrastructure & Data",
        description:
          "Technologies for data storage, deployment, and application infrastructure.",
        items: [
          {
            capability:
              "Database design and persistence",
            stack: [
              "PostgreSQL",
              "MongoDB",
              "SQLite",
              "Redis",
              "Prisma",
              "SQLAlchemy",
            ],
          },
          {
            capability:
              "Containerization and development workflow",
            stack: [
              "Docker",
              "Docker Compose",
              "Nginx",
              "Git",
              "CI/CD",
              "ESLint",
              "Prettier",
            ],
          },
        ],
      },
      {
        level: "Exploration & Growth",
        description:
          "Technologies explored through side projects and continuous learning.",
        items: [
          {
            capability:
              "Cross-platform, game and desktop development",
            stack: [
              "Rust",
              "Tauri",
              "Unity",
              "FishNet",
              "WebRTC",
              "GraphQL",
            ],
          },
        ],
      },
    ],
  },

  ru: {
    groups: [
      {
        level: "Ключевая экспертиза",
        description:
          "Технологии, которые использую для разработки масштабируемых full-stack приложений и современной архитектуры.",
        glow: true,
        items: [
          {
            capability:
              "Разработка современных frontend-приложений с масштабируемой архитектурой",
            stack: [
              "React",
              "Next.js",
              "TypeScript",
              "Feature-Sliced Design",
              "SSR",
            ],
          },
          {
            capability:
              "Проектирование backend-сервисов, REST API и бизнес-логики",
            stack: [
              "FastAPI",
              "Node.js",
              "Express",
              "Hono",
              "REST API",
              "JWT",
              "DDD",
              "Clean Architecture",
            ],
          },
          {
            capability:
              "Управление состоянием приложения и синхронизация данных",
            stack: [
              "Zustand",
              "MobX",
              "Redux",
              "React Query",
              "Socket.IO",
            ],
          },
        ],
      },
      {
        level: "Инфраструктура и данные",
        description:
          "Технологии для хранения данных, контейнеризации и организации инфраструктуры приложений.",
        items: [
          {
            capability:
              "Проектирование и работа с базами данных",
            stack: [
              "PostgreSQL",
              "MongoDB",
              "SQLite",
              "Redis",
              "Prisma",
              "SQLAlchemy",
            ],
          },
          {
            capability:
              "Контейнеризация и инструменты разработки",
            stack: [
              "Docker",
              "Docker Compose",
              "Nginx",
              "Git",
              "CI/CD",
              "ESLint",
              "Prettier",
            ],
          },
        ],
      },
      {
        level: "Изучение и развитие",
        description:
          "Технологии, которые изучаю и применяю в pet-проектах и экспериментах.",
        items: [
          {
            capability:
              "Кроссплатформенная, desktop и игровая разработка",
            stack: [
              "Rust",
              "Tauri",
              "Unity",
              "FishNet",
              "WebRTC",
              "GraphQL",
            ],
          },
        ],
      },
    ],
  },
};

import { Hero } from "@/widgets/hero";
import { Skills } from "@/widgets/skills";
import { ProjectList } from "@/widgets/project-list";
import { TimeLine } from "@/widgets/timeline";
import { Contacts } from "@/widgets/contacts";
import { Notification } from "@/widgets/notification";
import { FullpageProgress } from "@/features/progress-scroll";

export default async function Page() {
  return (
    <>
      <Hero key="hero" />
      <Skills key="skills" />
      <ProjectList key="projects" />
      <TimeLine key="timeline" />
      <Contacts key="contacts" />
      <Notification />
      <FullpageProgress />
    </>
  );
}

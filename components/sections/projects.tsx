import { SectionHeading } from "@/components/common/section-heading";
import { getProjectMetadata } from "@/lib/projects";
import { PostPreview } from "@/components/common/project-preview";

export function Projects() {
  const projectsMetadata = getProjectMetadata();

  return (
    <SectionHeading title="Projects" id="projects" align="end">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projectsMetadata.map((project) => (
            <PostPreview key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </SectionHeading>
  );
}

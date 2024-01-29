import { notFound } from "next/navigation";
import fs from "fs";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

import { Badge } from "@/components/ui/badge";
import { ContactMe } from "@/components/common/contact-me";
import { getProjectMetadata } from "@/lib/projects";
import { GoBackHomeButton } from "@/components/common/go-back-home-button";
import { Heading } from "@/components/common/heading";
import { Icon } from "@/components/common/icon";

const getProjectContent = (slug: string) => {
  const folder = "content/";
  const file = `${folder}${slug}.md`;
  if (!fs.existsSync(file)) {
    return null;
  }
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const projects = getProjectMetadata();
  return projects.map((project) => ({
    slug: project.slug,
  }));
};

export default function ProjectPage(props: any) {
  const slug = props.params.slug;
  const project = getProjectContent(slug);

  if (!project) {
    return notFound();
  }

  return (
    <div className="flex flex-1 flex-col w-full sm:px-12 gap-8">
      <GoBackHomeButton />
      <div className="flex flex-col gap-8">
        <Heading title={project.data.title} />
        <div className="flex flex-wrap gap-2 items-center">
          {project.data.githubUrl && (
            <Link
              href={project.data.githubUrl}
              className="text-primary hover:text-primary/80"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="GitHub" className="w-[24px] h-[24px] mr-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          )}
          {project.data.liveUrl && (
            <Link
              href={project.data.liveUrl}
              className="text-primary hover:text-primary/80"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="ExternalLink" className="w-[24px] h-[24px] mr-4" />
              <span className="sr-only">External Link</span>
            </Link>
          )}
          {project.data.purpose && (
            <Badge className="w-fit h-fit" variant="reverse-group">
              {project.data.purpose}
            </Badge>
          )}
          {project.data.technologies.map((technology: string, id: number) => (
            <Badge variant="outline" key={id}>
              {technology}
            </Badge>
          ))}
        </div>
        <article>
          <Markdown
            options={{
              overrides: {
                p: {
                  props: {
                    className: "flex pb-4 text-justify justify-center",
                  },
                },
                img: {
                  props: {
                    className: "rounded-lg w-full max-w-screen-lg  ",
                  },
                },
              },
            }}
          >
            {project.content}
          </Markdown>
        </article>
      </div>
      <ContactMe />
    </div>
  );
}

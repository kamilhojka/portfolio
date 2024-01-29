import fs from "fs";
import matter from "gray-matter";

export interface ProjectMetadata {
  order: number;
  slug: string;
  title: string;
  purpose: string;
  purposeContent: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  imageAlt: string;
}

export function getProjectMetadata(): ProjectMetadata[] {
  const folder = "content/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const projects = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`content/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      order: matterResult.data.order,
      slug: matterResult.data.slug,
      title: matterResult.data.title,
      purpose: matterResult.data.purpose,
      purposeContent: matterResult.data.purposeContent,
      technologies: matterResult.data.technologies,
      liveUrl: matterResult.data.liveUrl,
      githubUrl: matterResult.data.githubUrl,
      image: matterResult.data.image,
      imageAlt: matterResult.data.imageAlt,
    };
  });

  return projects;
}

import { SectionHeading } from "@/components/common/section-heading";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <SectionHeading title="Experience" id="experience">
      <div className="flex flex-wrap flex-col gap-4">
        <div className="flex justify-between">
          <h4 className="text-xl font-bold">Idźczak-Meble</h4>
          <span className="text-lg">2019 - 2023</span>
        </div>
        <div className="flex flex-wrap justify-between">
          <h4 className="text-xl font-bold text-primary">
            IT Specialist & Software Engineer
          </h4>
          <span className="text-lg">Łęka Opatowska</span>
        </div>
        <p className="text-lg text-justify text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-wrap gap-4">
          <Badge variant="outline">React</Badge>
          <Badge variant="outline">Javascript</Badge>
          <Badge variant="outline">C#</Badge>
          <Badge variant="outline">XAML</Badge>
          <Badge variant="outline">SQL Server</Badge>
          <Badge variant="outline">Prestashop</Badge>
          <Badge variant="outline">RestAPI</Badge>
        </div>
      </div>
    </SectionHeading>
  );
}

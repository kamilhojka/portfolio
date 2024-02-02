import { SectionHeading } from "@/components/common/section-heading";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <SectionHeading title="Experience" id="experience">
      <div className="flex flex-wrap flex-col gap-4">
        <div className="flex flex-wrap justify-between">
          <h3 className="text-xl font-bold">Idźczak-Meble</h3>
          <span className="text-lg">June 2019 - December 2023</span>
        </div>
        <div className="flex flex-wrap justify-between">
          <h4 className="text-xl font-bold text-primary">
            IT Specialist & Software Engineer
          </h4>
          <span className="text-lg">Łęka Opatowska</span>
        </div>
        <p className="text-lg text-justify text-muted-foreground">
          Build desktop applications using C#, XAML, and Python, as well as
          developing web applications with React. Autonomously manage a
          warehouse infrastructure with a capacity of approximately 200,000
          packages. Connect and automate processes between the ERP system -
          WAPRO MAG and FAKiR and other applications through API integration.
          Maintain network infrastructure and SQL Server databases.
          Additionally, proficient in developing applications for older
          operating systems on handheld devices, such as Windows CE 6.0. Provide
          assistance in managing Prestashop and Wordpress store platforms.
        </p>
        <div className="flex flex-wrap gap-4">
          <Badge variant="outline">React</Badge>
          <Badge variant="outline">Javascript</Badge>
          <Badge variant="outline">C#</Badge>
          <Badge variant="outline">XAML</Badge>
          <Badge variant="outline">Python</Badge>
          <Badge variant="outline">SQL Server</Badge>
          <Badge variant="outline">Prestashop</Badge>
          <Badge variant="outline">Wordpress</Badge>
          <Badge variant="outline">RestAPI</Badge>
        </div>
      </div>
    </SectionHeading>
  );
}

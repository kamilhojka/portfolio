import { GoBackHomeButton } from "@/components/common/go-back-home-button";

export default function ProjectPage() {
  return (
    <div className="flex flex-1 flex-col w-full sm:px-12 gap-8">
      <GoBackHomeButton />
      <div className="flex flex-col gap-8">
        <h2 className="flex items-end text-6xl lg:text-7xl font-bold font-serif">
          Project not found
          <span className="block rounded-full w-3 h-3 bg-blue-300" />
        </h2>
        <p className="text-muted-foreground text-lg">
          We couldn&apos;t find a project with that name. Please go back to the
          homepage.
        </p>
      </div>
    </div>
  );
}

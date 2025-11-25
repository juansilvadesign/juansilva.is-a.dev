import { PAGE_LINKS } from "@/constants/links";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Not Found</h2>
      <p className="text-muted-foreground mb-4">Could not find the requested resource</p>
      <a href={PAGE_LINKS.HOME} className="text-primary hover:underline">
        Return Home
      </a>
    </div>
  );
}
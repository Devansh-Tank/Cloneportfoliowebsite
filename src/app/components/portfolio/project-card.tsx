import { cn } from "../../../lib/utils";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <a
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("group block h-full w-full cursor-pointer", className)}
    >
      <div className="flex flex-col gap-4">
        {/* Image Section */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-secondary/30">
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none h-full w-full object-cover"
            />
          )}
          {image && !video && (
            <div className="h-full w-full overflow-hidden">
              <ImageWithFallback
                src={image}
                alt={title}
                width={800}
                height={500}
                className="h-full w-full object-cover object-top"
              />
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="space-y-2">
          {/* Metadata / Tags */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {tags && tags.length > 0 && tags.join(" • ")}
          </div>

          {/* Title and Arrow */}
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold leading-tight md:text-2xl">
              {title}
            </h3>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-md">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </div>

          {/* Description */}
          <div className="line-clamp-2 text-sm text-muted-foreground">
            {description}
          </div>
        </div>
      </div>
    </a>
  );
}

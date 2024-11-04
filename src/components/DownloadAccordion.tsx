import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileDown } from "lucide-react";

interface DownloadLink {
  quality: string;
  size: string;
  url: string;
}

interface Episode {
  number: number;
  title: string;
  duration: string;
  download: DownloadLink; // Tek bir indirme seçeneği
}

interface Season {
  number: number;
  episodes: Episode[];
}

interface DownloadAccordionProps {
  seasons: Season[];
}

export function DownloadAccordion({ seasons }: DownloadAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {seasons.map((season) => (
        <AccordionItem key={season.number} value={`season-${season.number}`}>
          <AccordionTrigger className="text-lg font-semibold">
            {season.number}. Sezon
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              {season.episodes.map((episode) => (
                <div
                  key={episode.number}
                  className="bg-card border rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-sm text-muted-foreground">
                        {season.number}x{String(episode.number).padStart(2, '0')}
                      </span>
                      <h4 className="font-medium">{episode.title}</h4>
                    </div>
                    <Badge variant="secondary">{episode.duration}</Badge>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={episode.download.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <FileDown className="h-4 w-4" />
                      <span>{episode.download.quality}</span>
                      <span className="text-xs text-muted-foreground">
                        ({episode.download.size})
                      </span>
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
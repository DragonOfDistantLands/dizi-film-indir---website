import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileDown } from "lucide-react";

interface DownloadLink {
  quality: string;
  size: string;
  url: string;
}

interface DownloadCardProps {
  downloads: DownloadLink[];
}

export function DownloadCard({ downloads }: DownloadCardProps) {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <Download className="h-6 w-6" />
        İndirme Seçenekleri
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {downloads.map((download, index) => (
          <Button
            key={index}
            variant="outline"
            size="lg"
            className="w-full"
            asChild
          >
            <a
              href={download.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <FileDown className="h-5 w-5" />
              <div className="flex flex-col items-start">
                <span className="font-medium">{download.quality}</span>
                <span className="text-xs text-muted-foreground">
                  {download.size}
                </span>
              </div>
            </a>
          </Button>
        ))}
      </div>
    </Card>
  );
}
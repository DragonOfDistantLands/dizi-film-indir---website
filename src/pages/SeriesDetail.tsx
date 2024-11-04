import { useParams } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { seriesList } from '@/data/series';
import Sidebar from '@/components/Sidebar';
import { AdminProfile } from '@/components/AdminProfile';
import SimilarContent from '@/components/SimilarContent';
import { DownloadAccordion } from '@/components/DownloadAccordion';

// Sample season data for the series
const seasonData = [
  {
    number: 1,
    episodes: [
      {
        number: 1,
        title: "Pilot",
        duration: "45 dk",
        download: {
          quality: "1080p BluRay",
          size: "2.1 GB",
          url: "#"
        }
      },
      {
        number: 2,
        title: "Cat's in the Bag...",
        duration: "48 dk",
        download: {
          quality: "1080p BluRay",
          size: "2.3 GB",
          url: "#"
        }
      }
    ]
  },
  {
    number: 2,
    episodes: [
      {
        number: 1,
        title: "Seven Thirty-Seven",
        duration: "47 dk",
        download: {
          quality: "1080p BluRay",
          size: "2.2 GB",
          url: "#"
        }
      },
      {
        number: 2,
        title: "Grilled",
        duration: "45 dk",
        download: {
          quality: "1080p BluRay",
          size: "2.1 GB",
          url: "#"
        }
      }
    ]
  }
];

export default function SeriesDetail() {
  const { id } = useParams();
  const series = seriesList.find(s => s.id === id);

  if (!series) {
    return (
      <>
        <SEOHead
          title="Dizi Bulunamadı"
          description="İstediğiniz içeriğe ulaşılamadı."
          type="website"
        />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Dizi bulunamadı</h1>
            <p className="text-muted-foreground">İstediğiniz içeriğe ulaşılamadı.</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title={series.title}
        description={series.synopsis}
        type="article"
        image={series.poster}
        url={`https://seriesdownload.com/series/${series.id}`}
        keywords={`${series.title}, ${series.title} dizi indir, ${series.title} izle, ${series.genres.join(', ')}`}
        publishedTime={series.publishedAt}
        modifiedTime={series.updatedAt}
      />
      <div className="min-h-screen pb-8">
        {/* Hero Section - Background Image */}
        <div className="relative h-[400px] overflow-hidden">
          <img
            src={series.coverImage}
            alt={`${series.title} backdrop`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 20%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 -mt-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-9">
              {/* Series Info */}
              <div className="flex gap-8 mb-8">
                {/* Poster Image */}
                <div className="w-[200px] h-[300px] flex-shrink-0 overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={series.poster}
                    alt={series.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 pt-4">
                  <h1 className="text-4xl font-bold mb-4">{series.title}</h1>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center">⭐ {series.rating}</span>
                    <span>{series.year}</span>
                    <span>{series.duration}</span>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">{series.synopsis}</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-card/50 p-4 rounded-lg">
                      <span className="block text-sm text-muted-foreground mb-1">Altyazı</span>
                      <span className="font-medium">{series.subtitles}</span>
                    </div>
                    <div className="bg-card/50 p-4 rounded-lg">
                      <span className="block text-sm text-muted-foreground mb-1">Ses</span>
                      <span className="font-medium">{series.audio}</span>
                    </div>
                    <div className="bg-card/50 p-4 rounded-lg">
                      <span className="block text-sm text-muted-foreground mb-1">Sezon Sayısı</span>
                      <span className="font-medium">{series.seasons} Sezon</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cast Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Oyuncular</h2>
                <div className="flex flex-wrap gap-4">
                  {series.cast?.map((actor, index) => (
                    <span key={index} className="px-4 py-2 bg-accent rounded-full">
                      {actor}
                    </span>
                  ))}
                </div>
              </div>

              {/* Download Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Bölümler</h2>
                <DownloadAccordion seasons={seasonData} />
              </div>

              {/* Admin Profile */}
              <AdminProfile />

              {/* Similar Content */}
              <SimilarContent currentId={id!} type="series" />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-3">
              <div className="sticky" style={{ top: 'calc(5.5rem + 8rem)' }}>
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
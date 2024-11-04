import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SEOHead } from "@/components/SEOHead";
import SeriesCard from "@/components/SeriesCard";
import Sidebar from "@/components/Sidebar";
import StoryCarousel from "@/components/StoryCarousel";
import { seriesList } from "@/data/series";

export default function HomePage() {
  const { t } = useTranslation();
  const [series, setSeries] = useState(seriesList);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  return (
    <>
      <SEOHead />
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Stories Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Öne Çıkanlar</h2>
            <StoryCarousel />
          </section>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Series Grid */}
            <div className="lg:col-span-8">
              <h2 className="text-2xl font-bold mb-6">{t('common.popularSeries')}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
                {series.map((item) => (
                  <SeriesCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    poster={item.poster}
                    rating={item.rating}
                    year={item.year}
                  />
                ))}
              </div>
              {loading && (
                <div className="text-center py-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                </div>
              )}
              {!loading && hasMore && (
                <button
                  onClick={() => setPage(p => p + 1)}
                  className="w-full mt-8 py-2 bg-accent hover:bg-accent/80 rounded-lg transition-colors"
                >
                  {t('common.loadMore')}
                </button>
              )}
              {!hasMore && (
                <p className="text-center text-muted-foreground mt-8">
                  {t('common.endMessage')}
                </p>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
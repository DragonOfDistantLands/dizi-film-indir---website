import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const recentlyAdded = [
    { title: "True Detective", status: "Yeni Eklendi", type: "new" },
    { title: "Breaking Bad", status: "6. Sezon Eklendi", type: "updated" },
    { title: "The Bear", status: "Yeni Eklendi", type: "new" },
    { title: "Game of Thrones", status: "Yeni Bölümler Eklendi", type: "updated" },
    { title: "Stranger Things", status: "4. Sezon Güncellendi", type: "updated" },
    { title: "Fargo", status: "Yeni Eklendi", type: "new" },
    { title: "The Witcher", status: "Yeni Bölümler Eklendi", type: "updated" }
  ];

  const weeklyTrends = [
    { title: "Breaking Bad", views: "15243" },
    { title: "Game of Thrones", views: "12453" },
    { title: "Stranger Things", views: "10234" },
    { title: "The Witcher", views: "9676" },
    { title: "Dark", views: "8765" },
    { title: "Peaky Blinders", views: "7654" },
    { title: "Better Call Saul", views: "6543" }
  ];

  const randomRecommendation = {
    title: "Band of Brothers",
    image: "https://source.unsplash.com/random/400x600?nature"
  };

  return (
    <div className="space-y-6 w-full lg:w-[280px]">
      <Card className="p-4">
        <h3 className="font-semibold mb-4">Tavsiyemiz</h3>
        <Link to={`/series/${randomRecommendation.title.toLowerCase().replace(/ /g, "-")}`}>
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src={randomRecommendation.image} 
              alt={randomRecommendation.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 w-full p-2 bg-black/60">
              <p className="text-white text-center">{randomRecommendation.title}</p>
            </div>
          </div>
        </Link>
      </Card>

      <Card className="p-4">
        <h3 className="font-semibold mb-4">Haftalık Trendler</h3>
        <div className="space-y-2">
          {weeklyTrends.map((trend, index) => (
            <Link 
              key={index}
              to={`/series/${trend.title.toLowerCase().replace(/ /g, "-")}`}
              className="flex justify-between items-center hover:bg-accent/50 p-2 rounded-lg"
            >
              <span>#{trend.title}</span>
              <span className="text-sm text-muted-foreground">{trend.views}</span>
            </Link>
          ))}
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="font-semibold mb-4">Son Eklenenler</h3>
        <div className="space-y-2">
          {recentlyAdded.map((item, index) => (
            <Link
              key={index}
              to={`/series/${item.title.toLowerCase().replace(/ /g, "-")}`}
              className="flex justify-between items-center hover:bg-accent/50 p-2 rounded-lg"
            >
              <span className="truncate max-w-[160px]">{item.title}</span>
              <span className={`text-sm ml-2 whitespace-nowrap ${
                item.type === 'new' ? 'text-blue-500 dark:text-blue-400' : 'text-emerald-500 dark:text-emerald-400'
              }`}>
                {item.status}
              </span>
            </Link>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
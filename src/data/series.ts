export interface Series {
  id: string;
  title: string;
  synopsis: string;
  rating: string;
  year: string;
  duration: string;
  poster: string;
  coverImage: string;
  genres: string[];
  cast: string[];
  subtitles: string;
  audio: string;
  fileSize: string;
  publishedAt: string;
  updatedAt: string;
}

export const seriesList: Series[] = [
  {
    id: "breaking-bad",
    title: "Breaking Bad",
    synopsis: "Kanser teşhisi konan bir kimya öğretmeni, ailesinin geleceğini güvence altına almak için metamfetamin üretip satmaya başlar.",
    rating: "9.5",
    year: "2008-2013",
    duration: "49 dk",
    poster: "https://source.unsplash.com/random/300x450?tv",
    coverImage: "https://source.unsplash.com/random/1920x1080?desert",
    genres: ["Drama", "Crime", "Thriller"],
    cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
    subtitles: "Türkçe, İngilizce",
    audio: "Türkçe, İngilizce",
    fileSize: "2.1 GB",
    publishedAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  },
  {
    id: "true-detective",
    title: "True Detective",
    synopsis: "Farklı dedektiflerin karanlık suç vakalarını çözmek için verdikleri mücadeleyi konu alan antoloji serisi.",
    rating: "8.9",
    year: "2014-2024",
    duration: "55 dk",
    poster: "https://source.unsplash.com/random/300x450?detective",
    coverImage: "https://source.unsplash.com/random/1920x1080?noir",
    genres: ["Crime", "Drama", "Mystery"],
    cast: ["Matthew McConaughey", "Woody Harrelson", "Rachel McAdams"],
    subtitles: "Türkçe, İngilizce",
    audio: "Türkçe, İngilizce",
    fileSize: "1.8 GB",
    publishedAt: "2024-01-14T15:30:00Z",
    updatedAt: "2024-01-14T15:30:00Z"
  },
  {
    id: "the-bear",
    title: "The Bear",
    synopsis: "Genç bir şef, ailesinin Chicago'daki sandviç dükkanını devralmak zorunda kalır ve mutfak ekibiyle birlikte zorluklarla mücadele eder.",
    rating: "8.7",
    year: "2022-2024",
    duration: "30 dk",
    poster: "https://source.unsplash.com/random/300x450?chef",
    coverImage: "https://source.unsplash.com/random/1920x1080?restaurant",
    genres: ["Drama", "Comedy"],
    cast: ["Jeremy Allen White", "Ebon Moss-Bachrach", "Ayo Edebiri"],
    subtitles: "Türkçe, İngilizce",
    audio: "Türkçe, İngilizce",
    fileSize: "1.5 GB",
    publishedAt: "2024-01-13T09:15:00Z",
    updatedAt: "2024-01-13T09:15:00Z"
  }
];
type Podcast = {
  uuid: string;
  name: string;
  description: string;
  popularityRank: string;
};

type Episode = {
  uuid: string;
  name: string;
  description: string;
  audioUrl: string;
};

type PodcastDetails = {
  uuid: string;
  name: string;
  itunesId: string;
  description: string;
  imageUrl: string;
  totalEpisodesCount: number;
  episodes: Episode[];
};

type GetPodcastSeriesResponse = {
  getPodcastSeries: PodcastDetails;
};

type GetPopularContentResponse = {
  podcastSeries: Podcast[];
  popularityRankId: string;
};

export type { 
  Podcast, 
  Episode,
  PodcastDetails, 
  GetPodcastSeriesResponse, 
  GetPopularContentResponse 
};

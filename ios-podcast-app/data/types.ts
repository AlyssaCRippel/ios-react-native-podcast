type Podcast = {
  uuid: string;
  name: string;
  description: string;
  popularityRank: string;
};

type GetPopularContentResponse = {
  podcastSeries: Podcast[];
  popularityRankId: string;
};

export type { Podcast, GetPopularContentResponse };

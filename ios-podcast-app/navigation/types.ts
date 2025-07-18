import { Podcast } from '../data/types';

export type RootStackParamList = {
  PopularPodcasts: undefined;
  PodcastDetails: { podcast: Podcast };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

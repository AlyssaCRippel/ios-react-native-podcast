import { gql } from 'graphql-request';

export const POPULAR_PODCASTS_QUERY = gql`
  query {
    getPopularContent(filterByLanguage: ENGLISH) {
      popularityRankId
      podcastSeries {
        uuid
        name
        description
        popularityRank
      }
    }
  }
`;

export const createPodcastDetailsQuery = (uuid: string) => gql`
  {
    getPodcastSeries(uuid: "${uuid}") {
      uuid
      name
      itunesId
      description
      imageUrl
      totalEpisodesCount
      episodes {
        uuid
        name
        description
        audioUrl
      }
    }
  }
`;

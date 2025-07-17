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

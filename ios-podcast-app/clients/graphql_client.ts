import { GraphQLClient } from 'graphql-request';
import Constants from 'expo-constants';

const API_URL = Constants.expoConfig?.extra?.API_URL;

export const graphQLClient = new GraphQLClient(API_URL, {
  headers: {
    'X-USER-ID': Constants.expoConfig?.extra?.X_USER_ID ,
    'X-API-KEY': Constants.expoConfig?.extra?.X_API_KEY ,
  },
});


import React from 'react';
import type { PropsWithChildren } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

jest.mock('@tanstack/react-query', () => {
  const actual = jest.requireActual('@tanstack/react-query');
  return {
    __esModule: true,
    ...(actual as object),
    useQuery: jest.fn(), // 👈 This line ensures .mockReset exists
  };
});


import { useQuery } from '@tanstack/react-query';
const mockedUseQuery = useQuery as jest.Mock;

//Create a QueryClient
const queryClient = new QueryClient();

//surrounds our hook during tests with react query client
const wrapper = ({ children }: PropsWithChildren<{}>) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('mocked useQuery behavior', () => {
  //Run before each test to clean the state
  beforeEach(() => {
    queryClient.clear();        
    mockedUseQuery.mockReset(); 
  });

  //This is a fake hook that mimics how useQuery is used in my fetchPodcasts function
  const useFakePodcastQuery = () =>
    useQuery({
      queryKey: ['popularPodcasts'],  
      queryFn: () => Promise.resolve([]), // mock the fetch function
    });


  it('should return mock podcast data', () => {
    const mockData = [{ id: '1', name: 'Test Podcast' }];

    //the podcast method would return this mock data
    mockedUseQuery.mockReturnValue({
      data: mockData,
      isLoading: false,
      error: null,
    });

    //Render the hook with the mocked query
    const { result } = renderHook(() => useFakePodcastQuery(), { wrapper });

    // Check that data returned correctly and no error occurred
    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBeNull();
  });


  it('should handle loading state', () => {
    //mock the useQuery to return a loading state
    mockedUseQuery.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    const { result } = renderHook(() => useFakePodcastQuery(), { wrapper });

    // Check that loading flag is set and no data yet
    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeNull();
  });

  it('should handle error state', () => {
    const mockError = new Error('Network error');

    // Pretend fetch failed and returned an error
    mockedUseQuery.mockReturnValue({
      data: null,
      isLoading: false,
      error: mockError,
    });

    const { result } = renderHook(() => useFakePodcastQuery(), { wrapper });

    // Check that error is returned and no data
    expect(result.current.error).toEqual(mockError);
    expect(result.current.data).toBeNull();
  });
});

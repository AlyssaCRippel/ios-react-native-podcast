import React from 'react';
import type { PropsWithChildren } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import {QueryClient, QueryClientProvider } from '@tanstack/react-query';

//Mock the entire React Query module so we can control its behavior
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

//Create a new query client
const queryClient = new QueryClient();

//Wrapper component to provide QueryClient context
const wrapper = ({ children }: PropsWithChildren<{}>) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('mocked useGetPodcastDetails behavior', () => {
  // Reset the QueryClient and mock before each test
  beforeEach(() => {
    queryClient.clear();
    mockedUseQuery.mockReset();
  });

  // Define a fake hook for to mock the useGetPodcastDetails behavior
  const useFakePodcastDetails = (uuid: string) =>
    useQuery({
      queryKey: ['podcastDetails', uuid],
      queryFn: () => Promise.resolve({ id: uuid, name: 'Test Podcast' }),
      enabled: !!uuid,
    });

  it('should return podcast details when uuid is valid', () => {
    const uuid = '12345';
    const mockData = { id: uuid, name: 'Mocked Podcast' };

    mockedUseQuery.mockReturnValue({
      data: mockData,
      isLoading: false,
      error: null,
    });

    //Render the hook with the wrapper
    const { result } = renderHook(() => useFakePodcastDetails(uuid), {
      wrapper,
    });

    //verify the data and query results
    expect(mockedUseQuery).toHaveBeenCalledWith({
      queryKey: ['podcastDetails', uuid],
      queryFn: expect.any(Function),
      enabled: true,
    });

    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBeNull();
  });

  it('should disable query when uuid is empty', () => {
    const uuid = '';

    mockedUseQuery.mockReturnValue({
      data: null,
      isLoading: false,
      error: null,
    });
    const { result } = renderHook(() => useFakePodcastDetails(uuid), {
      wrapper,
    });

    //verify the query is disabled
    expect(mockedUseQuery).toHaveBeenCalledWith({
      queryKey: ['podcastDetails', uuid],
      queryFn: expect.any(Function),
      enabled: false,
    });

    expect(result.current.data).toBeNull();
  });

  it('should handle loading state', () => {
    mockedUseQuery.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });
    const { result } = renderHook(() => useFakePodcastDetails('abc'), {
      wrapper,
    });

    //verify its loading
    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeNull();
  });

  it('should handle error state', () => {
    const mockError = new Error('Something broke');

    mockedUseQuery.mockReturnValue({
      data: null,
      isLoading: false,
      error: mockError,
    });
    const { result } = renderHook(() => useFakePodcastDetails('abc'), {
      wrapper,
    });

    //verify the error state
    expect(result.current.error).toEqual(mockError);
    expect(result.current.data).toBeNull();
  });
});

import { ApiError } from '@/types/api';

interface FetchOptions extends RequestInit {
  data?: any;
}

export async function apiClient<T>(
  endpoint: string,
  { data, headers: customHeaders, ...customConfig }: FetchOptions = {}
): Promise<T> {
  const config: RequestInit = {
    method: data ? 'POST' : 'GET',
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      'Content-Type': 'application/json',
      ...customHeaders,
    },
    ...customConfig,
  };

  try {
    const response = await fetch(`/api${endpoint}`, config);
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new ApiError(response.status, data.message || 'Something went wrong');
    }
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(500, 'Network error');
  }
}

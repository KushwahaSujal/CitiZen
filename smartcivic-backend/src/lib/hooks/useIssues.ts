'use client';

import { useState } from 'react';
import { apiClient } from '@/lib/utils/api-client';
import type { ApiResponse } from '@/types/api';

interface Issue {
  id: string;
  title: string;
  description: string;
  // Add other issue properties as needed
}

export function useIssues() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createIssue = async (issueData: Partial<Issue>) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiClient<ApiResponse<Issue>>('/issues', {
        data: issueData,
      });
      return response.data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const classifyIssue = async (imageUrl: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiClient<ApiResponse<{ category: string }>>('/issues/classify', {
        data: { imageUrl },
      });
      return response.data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    createIssue,
    classifyIssue,
  };
}

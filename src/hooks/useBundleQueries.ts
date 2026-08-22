import { useQuery } from '@tanstack/react-query';
import { fetchBundleConfig } from '../services/bundleApi';

export const useBundleConfigQuery = () => {
  return useQuery({
    queryKey: ['bundleConfig'],
    queryFn: fetchBundleConfig,
    staleTime: 1000 * 60 * 5, 
    gcTime: 1000 * 60 * 10,    
    refetchOnWindowFocus: false, 
  });
};
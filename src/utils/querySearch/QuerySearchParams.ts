export function useQueries(useLocation: any) {
  return new URLSearchParams(useLocation().search);
}

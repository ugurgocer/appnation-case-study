import searchLocations from "@/lib/searchLocations";
import useSWRImmutable from "swr/immutable";

export default function useSearch(searchValue: string) {
    const { data: searchResult = [], error, isLoading } = useSWRImmutable(
        searchValue ? ['/api/search', searchValue] : null,
        () => searchLocations(searchValue)
    );

    return {
        searchResult,
        error,
        isLoading
    }
}
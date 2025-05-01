import ILocation from "@/lib/types/ILocation";

export default async function searchLocations(searchValue: string) {
    if (!searchValue.trim()) return [];

    const response = await fetch(`/api/search?value=${searchValue}`);

    if (!response.ok) {
      const { message }: { message: string } = await response.json();
      throw new Error(message);
    }
  
    const { result } : { result: ILocation[] } = await response.json();
    return result || [];
}
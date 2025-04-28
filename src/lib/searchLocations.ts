import ILocation from "@/types/ILocation";

export default async function searchLocations(searchValue: string)  {
    if (!searchValue.trim()) return [];

    const response = await fetch(`/api/search?value=${searchValue}`);
    if (!response.ok) {
      throw new Error("Search Error");
    }
  
    const data: ILocation[] = await response.json();

    return data || [];
}
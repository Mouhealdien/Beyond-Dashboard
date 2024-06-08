import { BASE_API_URL } from "@/constants/settings";

export function getPhotoUrl(p: string) {
  return BASE_API_URL + p;
}

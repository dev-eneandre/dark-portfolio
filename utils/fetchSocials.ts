import { sanityClient } from "@/lib/sanityClient";
import { socialsQuery } from "@/lib/sanityQueries";
import { Social } from "@/typings";

export const fetchSocial = async (): Promise<Social[]> =>
  sanityClient.fetch<Social[]>(socialsQuery);

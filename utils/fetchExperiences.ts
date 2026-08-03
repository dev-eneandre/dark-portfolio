import { sanityClient } from "@/lib/sanityClient";
import { experiencesQuery } from "@/lib/sanityQueries";
import { Experience } from "@/typings";

export const fetchExperiences = async (): Promise<Experience[]> =>
  sanityClient.fetch<Experience[]>(experiencesQuery);

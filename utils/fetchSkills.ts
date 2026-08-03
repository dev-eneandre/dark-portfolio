import { sanityClient } from "@/lib/sanityClient";
import { skillsQuery } from "@/lib/sanityQueries";
import { Skill } from "@/typings";

export const fetchSkill = async (): Promise<Skill[]> =>
  sanityClient.fetch<Skill[]>(skillsQuery);

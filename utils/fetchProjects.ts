import { sanityClient } from "@/lib/sanityClient";
import { projectsQuery } from "@/lib/sanityQueries";
import { Project } from "@/typings";

export const fetchProjects = async (): Promise<Project[]> =>
  sanityClient.fetch<Project[]>(projectsQuery);

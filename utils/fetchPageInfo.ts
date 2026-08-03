import { sanityClient } from "@/lib/sanityClient";
import { pageInfoQuery } from "@/lib/sanityQueries";
import { PageInfo } from "@/typings";

export const fetchPageInfo = async (): Promise<PageInfo> =>
  sanityClient.fetch<PageInfo>(pageInfoQuery);

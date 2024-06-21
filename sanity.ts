import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
// import { apiVersion, dataset, projectId, useCdn } from "./sanity/env";

export const config = {
  dataset: "production",
  projectId: "https://vercel.com/deveneandres-projects/dark-portfolio",
  apiVersion: "2024-06-14",
  useCdn: process.env.NODE_ENV === "production",
};
// export const config = {
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   apiVersion: "2024-06-14",
//   useCdn: process.env.NODE_ENV === "production",
// };

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
  createImageUrlBuilder(sanityClient).image(source);

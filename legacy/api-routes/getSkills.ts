// Archived, not routed. Kept for reference only.
//
// The home page is now an App Router server component (app/page.tsx) that
// queries Sanity directly through utils/fetchSkills.ts. Previously
// getServerSideProps called this route over HTTP using NEXT_PUBLIC_BASE_URL,
// which returned a Vercel error page once that variable pointed at a stale
// deployment, and the resulting JSON.parse failure surfaced as a 500.
//
// The GROQ query below now lives in lib/sanityQueries.ts as skillsQuery.

// import type { NextApiRequest, NextApiResponse } from "next";
// import { groq } from "next-sanity";
// import { sanityClient } from "@/lib/sanityClient";
// import { Skill } from "@/typings";
//
// const query = groq`
// *[_type == "skill"]
// `;
//
// type Data = {
//   skills: Skill[];
// };
//
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   const skills: Skill[] = await sanityClient.fetch(query);
//   res.status(200).json({ skills });
// }

export {};

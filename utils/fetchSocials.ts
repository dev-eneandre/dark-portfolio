import { Social } from "@/typings";

export const fetchSocial = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
  const res = await fetch(
    `https://dark-portfolio-ij19hvssr-deveneandres-projects.vercel.app/api/getSocials`
  );

  const data = await res.json();
  const socials: Social[] = data.socials;

  //   console.log("fetching ", socials);

  return socials;
};

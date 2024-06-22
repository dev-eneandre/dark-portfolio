import { PageInfo } from "@/typings";

export const fetchPageInfo = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  // const res = await fetch(`http://localhost:3000/api/getPageInfo`);
  // const res = await fetch(`${baseUrl}/api/getPageInfo`);
  const res = await fetch(`api/getPageInfo`);
  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};

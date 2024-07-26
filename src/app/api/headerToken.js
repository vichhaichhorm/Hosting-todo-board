import { getServerSession } from "next-auth";
import { authOption } from "./auth/[...nextauth]/route";

export default async function headerToken() {
  // getServerSession is used to get the token that provided from the api
  const session = await getServerSession(authOption);
  return {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${session?.user?.token}`,
  };
}
import { NextPage } from "next";
import { useRouter } from "next/router";

const baseUrl = "/docs/array";

const AraayPage: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <br />
      <button onClick={() => router.push(`${baseUrl}/extent`)}>extent</button>
      <button onClick={() => router.push(`${baseUrl}/mode`)}>mode</button>
    </div>
  );
};

export default AraayPage;

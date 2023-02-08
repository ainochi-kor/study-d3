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
      <button onClick={() => router.push(`${baseUrl}/sum`)}>sum</button>
      <button
        onClick={() => router.push(`${baseUrl}/d3-mean-d3-median-and-friends`)}
      >
        d3-mean-d3-median-and-friends
      </button>
    </div>
  );
};

export default AraayPage;

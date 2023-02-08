import { NextPage } from "next";
import { useRouter } from "next/router";

const Docs: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("/docs/array")}>array</button>
    </div>
  );
};

export default Docs;

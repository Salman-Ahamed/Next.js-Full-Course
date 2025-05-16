/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const HomePage = async () => {
  const getDataFetch = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    // console.log("🚀 ~ getData ~ data:", data);
    return data;
  };

  const getDataAxios = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      return res.data;
    } catch (error) {
      console.error("🚀 ~ getDataAxios ~ error:", error);
    }
  };

  const data = await getDataAxios();
  const dataFetch = await getDataFetch();
  console.log("🚀 ~ HomePage ~ data:", data);
  console.log("🚀 ~ HomePage ~ dataFetch:", dataFetch);

  return (
    <main className="flex flex-col justify-center items-center h-screen w-full bg-slate-500">
      <section className="grid grid-cols-3 gap-2.5 place-items-center">
        {data?.slice(0, 10).map((post: any) => (
          <div
            key={post.id}
            className="border-2 border-white p-4 rounded-md w-full max-w-sm"
          >
            <h2>{post.title} </h2>
            {/* <p>{post.body} </p> */}
          </div>
        ))}
      </section>
    </main>
  );
};

export default HomePage;

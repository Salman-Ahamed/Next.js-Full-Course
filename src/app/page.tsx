import Image from "next/image";

const HomePage = () => {
  return (
    <main className="flex justify-center items-center h-screen w-full bg-amber-300/80">
      <Image alt="" src="/vercel.svg" width={50} height={5} />
      <Image alt="" src="/next.svg" width={100} height={100} />
      {/* <Hero /> */}
    </main>
  );
};

export default HomePage;

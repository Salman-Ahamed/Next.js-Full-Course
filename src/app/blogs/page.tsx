const Blogs = () => {
  return (
    <main className="px-5">
      <h1 className="py-10 text-5xl font-black text-green-500 text-center">
        Blogs Page
      </h1>

      <div className="grid grid-cols-5 place-items-center gap-2.5">
        {Array.from(Array(100).keys()).map((el) => (
          <div
            className="px-3.5 py-2 rounded-md border border-green-500/80 text-green-500 cursor-pointer"
            key={el}
          >
            Blog&nbsp;{el + 1}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Blogs;

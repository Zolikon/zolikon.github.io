function Home() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-start gap-4">
      <p className="text-6xl font-bold">Zolikon</p>
      <a
        href="https://github.com/Zolikon/"
        target="_blank"
        rel="noreferrer"
        className="select-none text-8xl hover:scale-110 transition-all"
      >
        <img src="/github.svg" />
      </a>
    </div>
  );
}

export default Home;

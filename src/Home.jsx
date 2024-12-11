function Home() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-start gap-4">
      <p className="text-6xl font-bold">Zoltan Pozsonyi</p>
      <a
        href="https://profile.zolikon.com/"
        target="_blank"
        rel="noreferrer"
        className="select-none text-4xl hover:text-teal-800 hover:scale-110 transition-all"
      >
        Profile
      </a>
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

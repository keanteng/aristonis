import HomeAnalysis from "../components/home/home-analysis";

export default function Home() {

  return (
    <main>
      <div className="flex flex-col gap-1 px-3 rounded-lg py-5 lg:mx-12 xl:mx-80">
        <div className="flex flex-col gap-0.5">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-sm text-neutral-500">Welcome Back, Admin!</p>
        </div>
        <div className="flex flex-row w-full">
          <HomeAnalysis />
        </div>
      </div>
    </main>
  );
}
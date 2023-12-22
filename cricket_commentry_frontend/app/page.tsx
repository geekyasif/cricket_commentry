import Scoreboard from "./components/Scoreboard";
import CommentryButtons from "./components/CommentryButtons";

export default function Home() {
  return (
    <main className="h-screen w-screen p-10 bg-gray-100">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap lg:flex-nowrap p-4 gap-4 bg-white h-full shadow rounded-md">
        <CommentryButtons />
        <Scoreboard />
      </div>
    </main>
  );
}

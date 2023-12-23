import Scoreboard from "./components/Scoreboard";
import CommentryButtons from "./components/compentry/CommentryButtons";

export default function Home() {
  return (
    <main className="w-screen lg:flex lg:items-center lg:justify-center p-10 bg-gray-100">
      <div className="container flex flex-wrap lg:flex-nowrap p-4 lg:gap-6 bg-white shadow rounded-md">
        <CommentryButtons />
        <Scoreboard />
      </div>
    </main>
  );
}

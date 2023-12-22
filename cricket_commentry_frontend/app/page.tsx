import Scoreboard from "./components/Scoreboard";
import CommentryButtons from "./components/CommentryButtons";

export default function Home() {
  return (
    <main className="w-screen h-screen flex justify-center items-center overflow-hidden p-10 bg-gray-100">
      <div className="container mx-auto flex  p-4 gap-4 bg-white h-full shadow rounded-md">
        <CommentryButtons />
        <Scoreboard />
      </div>
    </main>
  );
}

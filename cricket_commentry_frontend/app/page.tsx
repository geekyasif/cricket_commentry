import Scoreboard from "./components/Scoreboard";
import CommentryButtons from "./components/CommentryButtons";

export default function Home() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="container mx-auto flex  p-4 gap-4 bg-white border-black border-2">
        <CommentryButtons />
        <Scoreboard />
      </div>
    </main>
  );
}

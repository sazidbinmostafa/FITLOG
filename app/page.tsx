import Banner from "@/components/home/Banner";
import Workouts from "@/components/workouts/Workouts";

export default function Home() {
  return (
    <div className="container">
      <Banner/>
      <Workouts/>
    </div>
  );
}

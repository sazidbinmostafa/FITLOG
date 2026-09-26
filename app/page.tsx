import Banner from "@/components/home/Banner";
import Workouts from "@/components/workouts/Workouts";

export default function Home() {
  return (
    <div>
      <Banner/>
      <section id="workouts-library" className="py-5">
        <Workouts/>
      </section>
    </div>
  );
}

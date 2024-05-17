import AutomateCarousel from "@/components/aoutomateCarousel";
import Intro from "@/components/intro";
import Services from "@/components/services";
import Us from "@/components/us";


export default function Home() {
  return (
    <main className="">
      <Intro />
      <Us />
      <AutomateCarousel/>
      <Services />
    </main>
  );
}

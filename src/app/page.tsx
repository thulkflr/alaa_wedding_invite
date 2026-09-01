import { invitation } from "@/config/invitation";
import { WeddingExperience } from "@/components/WeddingExperience";

export default function Home() {
  return <WeddingExperience config={invitation} />;
}

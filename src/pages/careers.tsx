import CareerPage from "@/templates/CareerPage";
import { useRouter } from "next/router";

export default function Careers() {

  const router = useRouter();

  if (router.query?.vision) {
    const elm = document.getElementById('work-with-us')
    elm?.scrollIntoView({
      behavior: 'smooth',
    })
  }
  return <CareerPage />;
}

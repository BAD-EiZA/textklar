import Hero from "@/components/Hero/Hero";

export default async function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-green-200 via-green-300 to-blue-500">
     <Hero/>
    </div>
  );
}

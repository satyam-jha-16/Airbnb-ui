import Card from "@/components/Cards/Card";
import FooterCard from "@/components/Cards/FooterCard";
import NearbyCard from "@/components/Cards/NearbyCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import { cards, nearby } from "@/data";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      {/* <div className="flex min-h-screen flex-col items-center justify-center py-2"> */}
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/airbnb.png" />
      </Head>

      <Header />
      <HeroBanner />

      <main className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16">
        <section className="py-10 lg:py-12">
          <h2 className="text-2xl md:text-4xl text-black font-semibold">
            Explore Nearby
          </h2>

          {/* Getting data from a server - API endpoints*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-4 md:pt-6">
            {nearby.map((card: any) => (
              <NearbyCard key={card.id} card={card.details} />
            ))}
          </div>
        </section>

        <section className="py-10 lg:py-12">
          <h2 className="text-2xl md:text-4xl text-black font-semibold">
            Live Anywhere
          </h2>

          <div className="flex space-x-8 px-4 w-full hide overflow-x-scroll scrollbar-hide whitespace-nowrap py-8 -ml-3">
            {cards.map((card: any) => (
              <Card key={card.name} card={card} />
            ))}
          </div>
        </section>

        <FooterCard
          img="/scene.jpg"
          title="The Greatest Outdoors"
          desc="Wishlists created by Airbnb."
          button="Get Started"
        />

        <Footer />
      </main>
    </div>
  );
}

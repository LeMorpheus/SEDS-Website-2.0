import Head from 'next/head';

export default function Archangel() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>R&D - Team Archangel | SEDS BPHC</title>
        <meta name="description" content="Team Archangel - Research and Development Division of SEDS BPHC" />
      </Head>
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Team Archangel - R&D</h1>
        <p className="text-gray-300 text-lg">
          Team Archangel is the Research and Development division of SEDS BPHC, 
          working on advanced aerospace technologies and experimental projects.
        </p>
      </div>
    </div>
  );
}

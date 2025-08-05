import Head from 'next/head';

export default function Sacup() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Rocket - SEDS BPHC</title>
        <meta name="description" content="SEDS BPHC Rocket Team - Spaceport America Cup" />
      </Head>
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Rocket Team</h1>
        <p className="text-gray-300 text-lg">
          Our rocket team competes in the Spaceport America Cup, designing and building 
          high-powered rockets to reach target altitudes.
        </p>
      </div>
    </div>
  );
}

import Head from 'next/head';

export default function Cansat() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>CanSat - Team Janus | SEDS BPHC</title>
        <meta name="description" content="Team Janus - SEDS BPHC CanSat Competition Team" />
      </Head>
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Team Janus - CanSat</h1>
        <p className="text-gray-300 text-lg">
          A CanSat is a miniature satellite payload. Our team designs compact 
          satellite systems for the CanSat Competition.
        </p>
      </div>
    </div>
  );
}

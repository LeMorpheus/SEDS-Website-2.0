import Head from 'next/head';

export default function Cubesat() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>CubeSat - Team Hyperion | SEDS BPHC</title>
        <meta name="description" content="Team Hyperion - SEDS BPHC CubeSat Development Team" />
      </Head>
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Team Hyperion - CubeSat</h1>
        <p className="text-gray-300 text-lg">
          The NEMOlite is a 1U satellite that we plan to launch in the coming years. 
          This demo sat's objective is to get flight time and test various subsystems.
        </p>
      </div>
    </div>
  );
}

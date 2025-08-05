import Head from 'next/head';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>About - SEDS BPHC</title>
        <meta name="description" content="About SEDS BPHC - Student Organization for Space Development" />
      </Head>
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">About SEDS BPHC</h1>
        <div className="space-y-6 text-gray-300">
          <p className="text-lg">
            SEDS BPHC was founded in April 2019 by a group of students with a 
            burning passion for aerospace. Today the club has proudly grown into 
            an 80+ member strong team.
          </p>
          <p className="text-lg">
            The club started out by competing in the Spaceport America Cup, and has 
            since expanded to cubesats, cansats, rocket motors and thrust vector 
            control projects.
          </p>
          <p className="text-lg">
            The team is an amalgamation of undergraduate students from almost all 
            fields of engineering and science in our college. Mechanical Engineering, 
            Computer Science, Biology, Electronics and Communication Engineering, 
            Physics are to name a few.
          </p>
        </div>
      </div>
    </div>
  );
}

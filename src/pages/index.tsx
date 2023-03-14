// pages/index.tsx
import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Min Webbyrå</title>
      </Head>

     

      {/* Hero-sektion */}
      <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Min Webbyrå</h1>
          <p className="text-xl md:text-2xl">
            Vi erbjuder webblösningar för att hjälpa ditt företag växa och lyckas online.
          </p>
        </div>
      </section>

      {/* Tjänster-sektion */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold mb-8">Våra tjänster</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="service-card">
              <h3 className="text-xl font-bold mb-4">Webbutveckling</h3>
              <p>
                Vi skapar skräddarsydda webbplatser som är optimerade för att hjälpa ditt företag att nå sina mål.
              </p>
            </div>
            <div className="service-card">
              <h3 className="text-xl font-bold mb-4">SEO</h3>
              <p>
                Våra SEO-tjänster hjälper din webbplats att rankas högre i sökmotorer och öka trafiken till din webbplats.
              </p>
            </div>
            <div className="service-card">
              <h3 className="text-xl font-bold mb-4">Digital marknadsföring</h3>
              <p>
                Vi hjälper dig att skapa en effektiv digital marknadsföringsstrategi för att nå din målgrupp och öka försäljningen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

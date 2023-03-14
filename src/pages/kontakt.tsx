// pages/Kontakt.tsx
import Head from 'next/head'
import React from 'react'

const Kontakt: React.FC = () => {
  return (
    <>
      <Head>
        <title>Kontakta oss | Din webbyrå</title>
        <meta name="description" content="Kontakta vår webbyrå för att lära dig mer om våra SEO-tjänster och hur vi kan hjälpa din verksamhet att växa." />
      </Head>

      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <h1 className="text-2xl font-bold text-center mb-4">Kontakta oss</h1>
            <p className="text-justify mb-4">
              Har du några frågor om våra SEO-tjänster eller vill du veta hur vi kan hjälpa ditt företag att växa? Fyll i formuläret nedan så återkommer vi till dig så snart som möjligt.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Namn</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">E-post</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Meddelande</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"></textarea>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all">Skicka</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Kontakt

import Layout from "../components/Layout";

const Tjanster = () => {
  return (
  
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 19l-7-7 2.237-2.237L12 14.327l8.763-8.763L19 7" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-medium text-gray-900">
                Webbutveckling
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Vi utvecklar moderna och responsiva webbsidor som är optimerade för
                hastighet, säkerhet och användarupplevelse. Vi använder oss av
                de senaste teknikerna och ramverken för att skapa skräddarsydda
                lösningar som passar just era behov.
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-medium text-gray-900">
                Webbdesign
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Vi skapar vackra och användarvänliga gränssnitt som ger era besökare
                en positiv upplevelse av er webbplats. Vi anpassar designen efter
                era varumärkesriktlinjer och målgruppens behov för att skapa en
                konsistent och professionell webbplats.
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"         >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <div className="mt-5">
          <h3 className="text-lg font-medium text-gray-900">
            Sökmotoroptimering (SEO)
          </h3>
          <p className="mt-2 text-base text-gray-500">
            Vi hjälper er att synas högre upp i sökmotorernas resultat genom att
            optimera er webbplats för sökmotorer. Vi genomför en analys av era
            konkurrenter och sökord för att skapa en effektiv strategi för att
            öka ert organiska sökmotorresultat och driva mer trafik till er
            webbplats.
          </p>
        </div>
      </div>
    </div>
  </div>

);
};

export default Tjanster;

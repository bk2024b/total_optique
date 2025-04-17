import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="container px-4 py-20 mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex flex-col gap-6 lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Total Optique : Votre vision, notre expertise à Cotonou.
            </h1>
            <p className="text-lg text-slate-600">
              Nous proposons des solutions optiques personnalisées pour améliorer votre vision et votre confort au
              quotidien.
            </p>
            <div>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/services">Découvrir nos services</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Lunettes élégantes"
              width={800}
              height={600}
              className="rounded-lg shadow-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="bg-slate-50 py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Nos Services</h2>
            <p className="text-slate-600 mt-4">Découvrez notre gamme de services professionnels</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Examen de vue</h3>
              <p className="text-slate-600 mb-4">
                Tests précis pour une vision optimale réalisés par nos professionnels qualifiés.
              </p>
              <Button asChild variant="outline" className="mt-auto">
                <Link href="/services">En savoir plus</Link>
              </Button>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Lunettes sur mesure</h3>
              <p className="text-slate-600 mb-4">
                Large choix de montures pour tous les styles et toutes les morphologies.
              </p>
              <Button asChild variant="outline" className="mt-auto">
                <Link href="/services">En savoir plus</Link>
              </Button>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Lentilles de contact</h3>
              <p className="text-slate-600 mb-4">
                Solutions adaptées à vos besoins pour un confort optimal au quotidien.
              </p>
              <Button asChild variant="outline" className="mt-auto">
                <Link href="/services">En savoir plus</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">À propos de nous</h2>
            <p className="text-lg text-slate-600 mb-8">
              Total Optique, votre opticien de confiance à Cotonou depuis 2020. Notre équipe de professionnels qualifiés
              s'engage à vous offrir des solutions optiques personnalisées et un service de qualité.
            </p>
            <Button asChild variant="outline">
              <Link href="/a-propos">En savoir plus sur nous</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

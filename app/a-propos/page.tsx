import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <main className="min-h-screen">
      {/* About Hero */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">À propos de nous</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Découvrez l'histoire de Total Optique et notre engagement envers votre santé visuelle.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Notre histoire</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Fondé en 2020, Total Optique est né de la passion d'une équipe de professionnels de la vision
                  déterminés à offrir des services optiques de qualité supérieure à Cotonou.
                </p>
                <p>
                  Notre mission est simple : fournir des solutions optiques personnalisées qui améliorent la qualité de
                  vie de nos clients, tout en offrant un service attentionné et professionnel.
                </p>
                <p>
                  Depuis notre création, nous nous sommes engagés à rester à la pointe de la technologie et des
                  tendances en matière d'optique, tout en maintenant des prix accessibles pour tous.
                </p>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Notre équipe"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Nos valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Qualité</h3>
              <p className="text-slate-600 text-center">
                Nous nous engageons à offrir des produits et services de la plus haute qualité, en utilisant les
                meilleures technologies disponibles.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Service client</h3>
              <p className="text-slate-600 text-center">
                Nous plaçons nos clients au centre de tout ce que nous faisons, en offrant un service personnalisé et
                attentionné.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
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
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Innovation</h3>
              <p className="text-slate-600 text-center">
                Nous restons constamment à l'affût des dernières innovations en matière d'optique pour offrir les
                meilleures solutions à nos clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Notre équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Dr. Kofi Mensah"
                width={400}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Dr. Kofi Mensah</h3>
                <p className="text-blue-600 mb-4">Optométriste en chef</p>
                <p className="text-slate-600">
                  Dr. Mensah possède plus de 15 ans d'expérience en optométrie et se spécialise dans les examens de vue
                  avancés.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Mme Aïcha Diallo"
                width={400}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Mme Aïcha Diallo</h3>
                <p className="text-blue-600 mb-4">Opticienne</p>
                <p className="text-slate-600">
                  Aïcha est spécialisée dans l'ajustement des montures et possède un œil expert pour aider les clients à
                  choisir les lunettes parfaites.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="M. Pascal Koffi"
                width={400}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">M. Pascal Koffi</h3>
                <p className="text-blue-600 mb-4">Conseiller en lentilles</p>
                <p className="text-slate-600">
                  Pascal est notre expert en lentilles de contact, offrant des conseils personnalisés pour trouver la
                  solution parfaite pour chaque client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Prêt à améliorer votre vision ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Prenez rendez-vous dès aujourd'hui et découvrez comment Total Optique peut vous aider à voir le monde plus
            clairement.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/contact">Prendre rendez-vous</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

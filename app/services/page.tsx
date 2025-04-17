import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { WhatsappIcon } from "@/components/whatsapp-icon"

export default function Services() {
  return (
    <main className="min-h-screen">
      {/* Services Hero */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Nos Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Découvrez notre gamme complète de services optiques professionnels pour prendre soin de votre vision.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {/* Service 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <Image
                  src="/test-de-vue.jpeg"
                  alt="Examen de vue"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Examen de vue</h2>
                <p className="text-slate-600 mb-4">
                  Nos examens de vue complets sont réalisés par des professionnels qualifiés utilisant des équipements
                  de pointe. Nous évaluons précisément votre acuité visuelle et détectons d'éventuels problèmes pour
                  vous proposer les solutions les plus adaptées.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-md font-semibold">
                    Gratuit
                  </div>
                  <Button asChild className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                    <Link href="https://wa.me/+22900000000?text=Je%20souhaite%20prendre%20rendez-vous%20pour%20un%20examen%20de%20vue">
                      <WhatsappIcon className="h-5 w-5" />
                      Prendre rendez-vous
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 md:order-2">
                <Image
                  src="/montures.jpeg"
                  alt="Lunettes sur mesure"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3 md:order-1">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Lunettes sur mesure</h2>
                <p className="text-slate-600 mb-4">
                  Nous proposons un large choix de montures pour tous les styles et toutes les morphologies. Nos
                  opticiens vous conseillent pour trouver les lunettes parfaitement adaptées à votre visage, votre style
                  et votre prescription.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-md font-semibold">
                    Prix variables selon les modèles
                  </div>
                  <Button asChild className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                    <Link href="https://wa.me/+22900000000?text=Je%20souhaite%20prendre%20rendez-vous%20pour%20des%20lunettes%20sur%20mesure">
                      <WhatsappIcon className="h-5 w-5" />
                      Prendre rendez-vous
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <Image
                  src="/conseils.jpeg"
                  alt="Lentilles de contact"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Conseils personnalisés</h2>
                <p className="text-slate-600 mb-4">
                  Nous proposons une gamme complète de lentilles de contact adaptées à vos besoins spécifiques. Nos
                  spécialistes vous guident dans le choix des lentilles les plus confortables et vous forment à leur
                  utilisation et entretien.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <Button asChild className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                    <Link href="https://wa.me/+22900000000?text=Je%20souhaite%20prendre%20rendez-vous%20pour%20des%20lentilles%20de%20contact">
                      <WhatsappIcon className="h-5 w-5" />
                      Prendre rendez-vous
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Besoin d'un service personnalisé ?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour un rendez-vous personnalisé et découvrez comment nous pouvons vous aider à améliorer
            votre vision.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

import Link from "next/link"
import { Phone, MapPin, Mail, Facebook, Clock } from "lucide-react"
import { WhatsappIcon } from "@/components/whatsapp-icon"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-blue-400" />
                <span>+229 00 00 00 00</span>
              </li>
              <li className="flex items-start">
                <WhatsappIcon className="h-5 w-5 mr-3 mt-0.5 text-green-400" />
                <span>+229 00 00 00 00</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-blue-400" />
                <span>contact@totaloptique.bj</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-blue-400" />
                <span>Avenue Steinmetz, Cotonou, Bénin</span>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-lg font-bold mb-4">Horaires d'ouverture</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-3 mt-0.5 text-blue-400" />
                <div>
                  <p className="font-medium">Lundi - Vendredi</p>
                  <p className="text-slate-300">08h00 - 18h00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-3 mt-0.5 text-blue-400" />
                <div>
                  <p className="font-medium">Samedi</p>
                  <p className="text-slate-300">09h00 - 16h00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-3 mt-0.5 text-blue-400" />
                <div>
                  <p className="font-medium">Dimanche</p>
                  <p className="text-slate-300">Fermé</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Nos services
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-blue-400 transition-colors">
                  À propos de nous
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/totaloptique"
                  className="flex items-center hover:text-blue-400 transition-colors"
                >
                  <Facebook className="h-5 w-5 mr-2" />
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Total Optique. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

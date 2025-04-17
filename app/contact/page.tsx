"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Phone, MapPin, Mail, Facebook, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { WhatsappIcon } from "@/components/whatsapp-icon"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    service: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Format the WhatsApp message
    const message = encodeURIComponent(
      `Nom: ${formData.name}\nNuméro WhatsApp: ${formData.whatsapp}\nService: ${formData.service}\nMessage: ${formData.message}`,
    )

    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/+2290159535404?text=${message}`, "_blank")
  }

  return (
    <main className="min-h-screen">
      {/* Contact Hero */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Nous sommes à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos besoins
            optiques.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Votre nom complet"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp">Numéro WhatsApp</Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    placeholder="Votre numéro WhatsApp"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Type de service</Label>
                  <Select onValueChange={handleServiceChange} value={formData.service}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="examen">Examen de vue</SelectItem>
                      <SelectItem value="lunettes">Lunettes sur mesure</SelectItem>
                      <SelectItem value="lentilles">SAV</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Votre message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Envoyer via WhatsApp
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Nos coordonnées</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">Téléphone</p>
                      <p className="text-slate-600">+229 01 59 53 54 04</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <WhatsappIcon className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-slate-600">+229 01 59 53 54 04</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-slate-600"> totaloptique2000@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">Adresse</p>
                      <p className="text-slate-600">Calavi ARCONVILLE, Abomey-Calavi, Bénin</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Facebook className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">Facebook</p>
                      <Link href="https://www.facebook.com/totaloptique" className="text-blue-600 hover:underline">
                        facebook.com/totaloptique
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="mt-8 h-80 bg-slate-100 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                  <p className="text-slate-500">Carte Google Maps</p>
                  {/* Intégrer Google Maps ici avec l'adresse réelle */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

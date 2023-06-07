import {
  BookOpen,
  CalendarDays,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShoppingCart,
} from "lucide-react"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  project: {
    name: "Pathfinder",
    description: "Find paths to APS",
  },
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  name: "",
  description: "",
  // name: "APS Hamburg",
  // description:
  //   "Large range of elegant bar supplies, durable glassware, porcelain & kitchenary.",
  image: { link: "https://cdn.apssupply.com/misc/hh-logo.png", altText: "APS" },
  impressum: "https://www.apssupply.com/Informationen/Impressum/",
  buttons: [
    {
      id: 1,
      title: "Webshop",
      link: "https://www.apssupply.com/",
      icon: ShoppingCart,
    },
    {
      id: 2,
      title: "Book a consultation",
      link: "https://calendly.com/apssupply/general-consultation",
      icon: CalendarDays,
    },
    {
      id: 3,
      title: "Catalogues",
      link: "https://www.apssupply.com/Shop-Service/Katalog/",
      icon: BookOpen,
    },
    {
      id: 4,
      title: "E-Mail",
      link: "mailto:info@apssupply.com",
      icon: Mail,
    },
    {
      id: 5,
      title: "Telephone",
      link: "tel:+49 40 4800310",
      icon: Phone,
    },
    {
      id: 6,
      title: "Directions to our store",
      link: "https://www.google.com/maps/dir/?api=1&destination=53.618771152455%2C10.001822802182&fbclid=IwAR3syitVN2_MLujPDLXClV7jyhh2c2t_uWQprc-79-q-4Z6ZUFmdJjNRMmY",
      icon: MapPin,
    },
    {
      id: 7,
      title: "Linkedin",
      link: "https://www.linkedin.com/company/aps-glass-bar-supply-gmbh/",
      icon: Linkedin,
    },
    {
      id: 8,
      title: "Instagram",
      link: "https://instagram.com/apshamburg",
      icon: Instagram,
    },
    {
      id: 9,
      title: "Facebook",
      link: "https://m.facebook.com/APS.HH/",
      icon: Facebook,
    },
  ],
}

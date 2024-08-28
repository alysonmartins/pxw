import { useParams } from "react-router-dom";
import { useLanguage } from "../lib/LanguageProvider";

interface TranslatedText {
  es: string;
  en: string;
}

interface DataItem {
  public_id: string;
  picture: string;
  isActive: boolean;
  ProjectName: TranslatedText;
  technologies: string[];
  company: string;
  about: TranslatedText;
}

const DATA: DataItem[] = [
  {
    "public_id": "66c73d1943c1168cfce6b4f4",
    "isActive": true,
    "picture": "p-08.jpg",
    "ProjectName": {
      es: "Appointment System",
      en: "Appointment System"
    },
    "company": "BlackCar",
    "about": {
      es: "Sistema de citas online, con gestión de cliente, servicios, horarios y sincronización con Google Calendar.",
      en: "Online appointment system, with client management, services, schedules and synchronization with Google Calendar."
    },
    "technologies": [
      "HTML5",
      "CSS",
      "Javascript",
      "PHP",
      "MySQL",
      "Google Calendar API",
      "E-mail Notifications"
    ]
  },
  {
    "public_id": "66c73d19a5764e7f51136b1b",
    "isActive": true,
    "picture": "p-07.jpg",
    "ProjectName": {
      es: "Landing Page",
      en: "Landing Page"
    },
    "company": "WCR Pinturas",
    "about": {
      es: "Landing Page utilizando métodos de CDN para mejorar performance y distribución.",
      en: "Landing Page using CDN methods to improve performance and distribution."
    },
    "technologies": [
      "HTML",
      "CSS",
      "Javascript"
    ]
  },
  {
    "public_id": "66c73d19eac91b41b8cb6aba",
    "isActive": true,
    "picture": "p-06.jpg",
    "ProjectName": {
      es: "WhatsApp Instant Chat",
      en: "WhatsApp Instant Chat"
    },
    "company": "ProExWeb",
    "about": {
      es: "Una solución para que puedas enviar mensaje a un numero de WhatsApp sin necesidad de añadir el numero en tus contactos.",
      en: "A solution that allows you to send a message to a WhatsApp number without needing to add the number to your contacts."
    },
    "technologies": [
      "Angular",
      "HTML5",
      "TailWindCSS"
    ]
  },
  {
    "public_id": "66c73d1996cbf657f5ee8962",
    "isActive": true,
    "picture": "p-05.jpg",
    "ProjectName": {
      es: "E-Commerce",
      en: "E-Commerce",
    },
    "company": "Bella Cris - Boutique",
    "about": {
      es: "Tienda Online, creada con PrestaShop, layout personalizado al gusto  del cliente, responsivo, siempre respetando UX/UI, utilizando métodos de cache y SEO, para mejorar performance y visibilidad de robots.",
      en: "E-Commerce, created with PrestaShop, custom layout tailored to the client's preferences, responsive, always respecting UX/UI, using cache methods and SEO to improve performance and robot visibility."
    },
    "technologies": [
      "PrestaShop CMS",
      "HTML5",
      "CSS",
      "Javascript",
      "PHP",
      "MySQL"
    ]
  },
  {
    "public_id": "0a9d9cf6-696c-443c-82f7-e9e2fa5be57f",
    "isActive": false,
    "picture": "p-09.jpg",
    "ProjectName": {
      es: "E-Commerce",
      en: "E-Commerce",
    },
    "company": "Bar Bahrein",
    "about": {
      es: "MenuQR utilizando métodos de CDN para mejorar performance y distribución.",
      en: "MenuQR using CDN methods to improve performance and distribution."
    },
    "technologies": [
      "HTML5",
      "CSS",
      "Javascript"
    ]
  },
  {
    "public_id": "66c73d1922e7f9df9debc064",
    "isActive": false,
    "picture": "p-04.jpg",
    "ProjectName": {
      es: "Landing Page",
      en: "Landing Page",
    },
    "company": "GASB - Comercio e Servicos de Refrigeração",
    "about": {
      es: "Landing Page utilizando métodos de CDN para mejorar performance y distribución.",
      en: "Landing Page using CDN methods to improve performance and distribution."
    },
    "technologies": [
      "HTML5",
      "CSS",
      "Javascript"
    ]
  },
  {
    "public_id": "66c73d195c2ea2182da44fb9",
    "isActive": false,
    "picture": "p-10.jpg",
    "ProjectName": {
      es: "Mu Online Web CMS",
      en: "Mu Online Web CMS",
    },
    "company": "Mu Unity",
    "about": {
      es: "Web CMS para un servidor de Mu Online, template totalmente personalizado, con consultas/inserciones no MSSQL, también con sistema de cache, para que a pagina sigue funcionando mesmo sin el servidor online.",
      en: "Web CMS for a Mu Online server, fully customized template, with MSSQL queries/insertions, also with a cache system, so that the page continues functioning even when the server is offline."
    },
    "technologies": [
      "HTML5",
      "CSS",
      "Javascript",
      "PHP",
      "MSSQL"
    ]
  },
  {
    "public_id": "66c73d190a52d7f6c12b032f",
    "isActive": true,
    "picture": "p-02.jpg",
    "ProjectName": {
      es: "Landing Page",
      en: "Landing Page",
    },
    "company": "BlackCar",
    "about": {
      es: "Landing Page utilizando métodos de CDN para mejorar performance y distribución.",
      en: "Landing Page using CDN methods to improve performance and distribution."
    },
    "technologies": [
      "HTML5",
      "CSS",
      "Javascript",
      "Vercel"
    ]
  },
  {
    "public_id": "d610d415-36af-44c2-9eab-e7b6126ea89d",
    "isActive": true,
    "picture": "p-10.jpg",
    "ProjectName":
    {
      es: "Wiki Pagina con consulta API",
      en: "Wiki Page with API consult"
    },
    "company": "Guilda Mercante",
    "about": {
      es: "Pagina dinámica con consulta a una REST Api para consultas de informaciones disponibilidades por la Api del MMORPG.",
      en: "Dynamic page with queries to a REST API for information and availability checks through the MMORPG's API"
    },
    "technologies": [
      "HTML5",
      "CSS",
      "Javascript",
      "REST API",
      "Vercel"
    ]
  },
  {
    "public_id": "66c73d1910d7a268cfa6b14b",
    "isActive": true,
    "picture": "p-01.jpg",
    "ProjectName":
    {
      es: "E-Commerce",
      en: "E-Commerce"
    },
    "company": "BlackCar.es",
    "about": {
      es: "Tienda Online, creada con PrestaShop, layout personalizado al gusto  del cliente, responsivo, siempre respetando UX/UI, utilizando métodos de cache y SEO, para mejorar performance y visibilidad de robots.",
      en: "E-Commerce, created with PrestaShop, custom layout tailored to the client's preferences, responsive, always respecting UX/UI, using cache methods and SEO to improve performance and robot visibility."
    },
    "technologies": [
      "HTML5",
      "CSS",
      "PHP",
      "PrestaShop",
      "MySQL",
      "Pasarela de pagos"
    ]
  }
]

export function DetailsPage() {

  const { language, translate } = useLanguage();
  const { ProjectID } = useParams<{ ProjectID: string }>();
  const item = DATA.find(item => item.public_id === String(ProjectID));

  if (!item || !ProjectID || !language) return <div>Item não encontrado</div>;

  return (
    <>
      <main className="container py-10 max-w-screen-xl flex max-sm:flex-col mx-auto gap-4 max-md:flex-col">

        <div className="flex flex-1">
          <img src={`./assets/img/projects/${item.picture}`} className="aspect-auto rounded shadow-md" />
        </div>

        <div className="flex flex-1 flex-col">
          <h1>{item.ProjectName[language]}</h1>
          <p className="italic text-base">{item.company}</p>
          <p>{item.about[language]}</p>

          <span className="text-xl font-semibold">{translate('team_technologies')}:</span>
          {item.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </div>

      </main>
    </>
  )
}
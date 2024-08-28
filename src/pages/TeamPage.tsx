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
  name: string;
  technologies: string[];
  cvURL: string;
  resume: TranslatedText;
  position: TranslatedText;
}

const DATA: DataItem[] = [
  {
    "public_id": "130b5701-6ea8-4e50-bb11-73b105e37756",
    "isActive": true,
    "picture": "jack.jpg",
    "name": "Alyson A. Martins",
    "position": {
      es: "CTO - FullStack Developer",
      en: "CTO - FullStack Developer"
    },
    "cvURL": "cv-alyson.pdf",
    "resume": {
      es: 'Mi pasión por la programación comenzó temprano en mi vida. Empecé a programar de manera autodidacta a los 15 años y desde entonces no he dejado de aprender y crecer en este campo cada día. \n\nCon una sólida formación técnica y una excelente hoja de servicios, me destaco por mi capacidad para explicar y desarrollar conceptos técnicos complejos de manera clara y comprensible. Mi habilidad para realizar múltiples tareas, incluida la instalación y reparación de sistemas informáticos con precisión y eficiencia, ha sido fundamental en mi carrera. \n\nMi trayectoria académica incluye participación destacada en eventos y cursos especializados como NLW Expert en React Native, ReactJS y Node.js. \n\nAdemás, mi experiencia en el desarrollo de sistemas, diseño y desarrollo de aplicaciones web, aplicaciones y juegos ha sido fundamental para mi crecimiento profesional.Destaco mis habilidades en una variedad de tecnologías, desde WordPress y PrestaShop hasta React, Angular y muchas más. \n\nMi experiencia abarca el diseño gráfico, el soporte técnico y la gestión, demostrando mi versatilidad y capacidad para adaptarme a diferentes entornos y desafíos. \n\nComo profesional altamente organizado y orientado a resultados, estoy preparado para contribuir de manera significativa en roles que requieran experiencia técnica y habilidades de desarrollo. Mi dominio de múltiples idiomas, incluidos el portugués, español e inglés, me permite colaborar de manera efectiva en entornos globales.',
      en: 'My passion for programming began early in my life. I started coding as a self-taught programmer at the age of 15 and since then, I have never stopped learning and growing in this field. \n\nWith a solid technical background and an excellent track record, I stand out for my ability to explain and develop complex technical concepts clearly and understandably. My skill in multitasking, including the precise and efficient installation and repair of computer systems, has been fundamental to my career. \n\nMy academic journey includes notable participation in events and specialized courses such as NLW Expert in React Native, ReactJS, and Node.js. Moreover, my experience in system development, web application design and development, and game development has been essential for my professional growth. \n\nI highlight my skills in a variety of technologies, from WordPress and PrestaShop to React, Angular, and many more. My experience spans graphic design, technical support, and management, demonstrating my versatility and ability to adapt to different environments and challenges. \n\nAs a highly organized and results-oriented professional, I am prepared to contribute significantly to roles that require technical expertise and development skills. My proficiency in multiple languages, including Portuguese, Spanish, and English, enables me to collaborate effectively in global environments.',
    },
    "technologies": [
      "HTML5",
      "CSS",
      "Javascript",
      "PHP",
      "Laravel",
      "React",
      "Typescript",
      "Vite",
      "Express",
      "GraphQL",
      "React Native",
      "NodeJS",
      "PrestaShop",
      "WordPress",
      "WooCommerce",
      "Docker",
      "Vercel",
      "Figma",
      "Adobe Photoshop",
      "Adobe InDesign",
      "Corel Draw",
      "MySQL",
      "MSSQL",
      "SQLite"
    ]
  }
]

export function TeamPage() {

  const { translate, language } = useLanguage();
  const { EmployerID } = useParams<{ EmployerID: string }>();
  const item = DATA.find(item => item.public_id === String(EmployerID));

  if (!item || !EmployerID) return <div>Item não encontrado</div>;

  return (
    <>
      <main className="container py-10 flex mx-auto gap-4 max-md:flex-col">

        <div className="size-auto max-md:mx-auto">
          <img src={`/assets/img/team/${item.picture}`} className="rounded" />
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex items-center gap-3 max-sm:text-center">
            <h1 className="flex flex-1 text-nowrap">{item.name}</h1>
            <a href={`/assets/${language}-${item.cvURL}`} className="text-sm">({translate('team_download_cv')})</a>
          </div>
          <p className="italic text-base">{item.position[language]}</p>
          <p className="whitespace-pre-wrap">{item.resume[language]}</p>

          <span className="text-xl font-semibold">{translate('team_technologies')}:</span>
          {item.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </div >

      </main >
    </>
  )
}
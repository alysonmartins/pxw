import { Sun } from "@phosphor-icons/react";
import { useLanguage } from "../lib/LanguageProvider";

export function ServicesSection() {

  const { translate } = useLanguage();

  return (
    <>
      <section className="">
        <div className="container flex max-md:flex-col gap-10 content-center">

          <div className="flex flex-1 flex-col bg-red-600 items-center justify-center">


            <div className="space-y-2 py-20">

              <h3 className="text-2xl font-medium uppercase">{translate('home_services_section_text_1')}</h3>
              <h2 className="font-medium text-white uppercase">{translate('home_services_section_text_2')}</h2>
              <p className="text-white">{translate('home_services_section_text_3')}</p>

            </div>

          </div>

          <div className="flex flex-1 flex-col mx-auto items-center justify-center">

            <h3 className="flex font-bold uppercase gap-2 items-center justify-center text-blue-950">
              <Sun size={32} weight="fill" />
              {translate('home_services_section_text_4')}
            </h3>

            <ul className="flex flex-col gap-1">
              <li>
                <span className="text-red-600 fw-bold mr-3">-</span>
                {translate('services_1')}
              </li>
              <li>
                <span className="text-red-600 fw-bold mr-3">-</span>
                {translate('services_2')}
              </li>
              <li>
                <span className="text-red-600 fw-bold mr-3">-</span>
                {translate('services_3')}
              </li>
              <li>
                <span className="text-red-600 fw-bold mr-3">-</span>
                {translate('services_4')}
              </li>
              <li>
                <span className="text-red-600 fw-bold mr-3">-</span>
                {translate('services_5')}
              </li>
              <li>
                <span className="text-red-600 fw-bold mr-3">-</span>
                {translate('services_6')}
              </li>
            </ul>
          </div>

        </div>


      </section>
    </>
  )
}
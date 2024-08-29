import { EnvelopeSimple, WhatsappLogo } from "@phosphor-icons/react";
import { useLanguage } from "../lib/LanguageProvider";

export function Footer() {

  const { setLanguage, translate } = useLanguage();

  return (
    <>
      <footer className="bg-blue-950">
        <div className="container grid grid-cols-3 py-4 gap-5 max-sm:grid-cols-1">

          <div className=" flex flex-col flex-1">
            <h6 className="uppercase text-white">{translate('footer_services_1')}</h6>
            <ul className="fw-light list-unstyled">
              <li><a href="/services" className="text-white">{translate('footer_services_2')}</a></li>
              <li><a href="/services" className="text-white">{translate('footer_services_3')}</a></li>
              <li><a href="/services" className="text-white">{translate('footer_services_4')}</a></li>
              <li><a href="/services" className="text-white">{translate('footer_services_5')}</a></li>
              <li><a href="/services" className="text-white">{translate('footer_services_6')}</a></li>
            </ul>
          </div>

          <div className="flex flex-col flex-1">

            <h6 className="text-white uppercase">{translate('footer_about_1')}</h6>
            <ul className="fw-light list-unstyled">

              <li><a href="/contact" className="text-white">{translate('footer_about_2')}</a></li>

              <li><a href="/team/130b5701-6ea8-4e50-bb11-73b105e37756" className="text-white">{translate('footer_about_3')}</a></li>
            </ul>

          </div>
          <div className="text-base flex flex-1 flex-col gap-2">
            <img src="/assets/img/logo.svg" className="rounded" width="120" />

            <a href="mailto:jack@proexweb.com" className="text-white flex gap-2 items-center">
              <EnvelopeSimple size={32} />
              jack@proexweb.com
            </a>

            <a href="https://wa.me/34722254330" className="text-white flex gap-2 items-center">
              <WhatsappLogo size={32} />
              {translate('footer_3')}
            </a>

            <div className='flex gap-2'>
              <span className="text-white">{translate('language')}</span>
              <span className='text-white'>[</span>
              <a className='text-white cursor-pointer' onClick={() => setLanguage('en')}>EN 🇺🇸</a>
              <span className='text-white'>|</span>
              <a className='text-white cursor-pointer' onClick={() => setLanguage('es')}>ES 🇪🇸</a>
              <span className='text-white'>]</span>
            </div>
          </div>

        </div>

        <div className="text-center">
          <span className="text-white text-sm">{translate('footer_copy')}</span>
        </div>

      </footer>
    </>
  )
}
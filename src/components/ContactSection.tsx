import { WhatsappLogo } from "@phosphor-icons/react";
import { useLanguage } from "../lib/LanguageProvider";

export function ContactUsSection() {

  const { translate } = useLanguage();
  return (
    <>
      <section className="py-8 overflow-hidden text-center bg-gradient-to-t from-purple-500 to-pink-500" id="contact">
        <div className="bg-container overlay parallax" />
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-10 col-lg-5">
              <h2 className="mb-4 text-white text-uppercase">{translate('home_contact_section_text_1')}</h2>
              <h6 className="mb-5 lh-14 text-white"></h6>
              <a href="https://wa.me/34722254330/" className="btn btn-lg btn-primary px-6">
                <div className="flex gap-2.5 justify-center items-center">
                  <WhatsappLogo size={32} />
                  {translate('footer_3')}
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
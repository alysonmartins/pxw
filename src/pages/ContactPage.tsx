import { Mailbox, WhatsappLogo } from "@phosphor-icons/react";
import { useLanguage } from "../lib/LanguageProvider";

export function ContactPage() {

  const { translate } = useLanguage();

  return (
    <>
      <main className="text-white">

        <section className="h-screen content-center">
          <div className="bg-container h-full overlay w-full -z-50 bg-contact bg-cover">
          </div>

          <div className="flex flex-col items-center justify-center gap-10">
            <h2 className="uppercase">{translate('contact_title')}</h2>

            <div>
              <h6>WhatsApp</h6>
              <a href="https://wa.me/34722254330/" className="btn btn-lg btn-primary w-64 px-3">
                <div className="flex gap-2.5 justify-center items-center">
                  <WhatsappLogo size={32} />
                  {translate('footer_3')}
                </div>
              </a>
            </div>

            <div>
              <h6>E-mail</h6>
              <a href="mailto:jack@proexweb.com" className="btn btn-lg btn-primary w-64 px-3">
                <div className="flex gap-2.5 justify-center items-center">
                  <Mailbox size={32} />
                  {translate('contact_mailme_text')}
                </div>
              </a>
            </div>

          </div>
        </section>

      </main>
    </>
  )
}
import { useLanguage } from '../lib/LanguageProvider'

export function ClientsSection() {

  const { translate } = useLanguage();

  return (
    <>
      <section>
        <div className="container">

          <div>
            <h3 className="mb-0 text-2xl font-medium text-red-600 uppercase">{translate('home_clients_section_text_1')}</h3>
            <h2 className="font-medium text-blue-950 uppercase">{translate('home_clients_section_text_2')}</h2>
          </div>


          <div className="grid grid-cols-5 gap-5 max-md:grid-cols-3">

            <img className="bg-light grayscale rounded-md" src="/assets/img/clients/arami.svg" />
            <img className="bg-light grayscale rounded-md" src="/assets/img/clients/blackcar.svg" />
            <img className="bg-light grayscale rounded-md" src="/assets/img/clients/bureauphi.svg" />
            <img className="bg-light grayscale rounded-md" src="/assets/img/clients/carmela.svg" />
            <img className="bg-light grayscale rounded-md" src="/assets/img/clients/carnicaslima.svg" />
            <img className="bg-light grayscale rounded-md" src="/assets/img/clients/croquetas.svg" />
            <img className="bg-light grayscale rounded-md" src="/assets/img/clients/gasb.svg" />
            <img className="bg-light grayscale rounded-md" src="/assets/img/clients/lamar.svg" />
            <img className="bg-light grayscale rounded-md" src="/assets/img/clients/rachel.svg" />
            <img className="bg-light grayscale rounded-md" src="/assets/img/clients/radema.svg" />
            <img className="bg-light grayscale rounded-md" src="/assets/img/clients/texas.svg" />
            <img className="bg-light grayscale rounded-md" src="/assets/img/clients/trocito.svg" />
            <img className="bg-light grayscale rounded-md" src="/assets/img/clients/unity.svg" />
            <img className="bg-light grayscale rounded-md" src="/assets/img/clients/wcr.svg" />

          </div>
        </div>

      </section>
    </>
  )
}
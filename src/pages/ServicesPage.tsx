import { useLanguage } from "../lib/LanguageProvider"


export function ServicesPage() {

  const { translate } = useLanguage();

  return (
    <>
      <main className="container py-10">

        <div className="flex flex-col items-center h-1/4 pb-10">
          <div className="bg-container h-1/4 overlay w-full -z-50 bg-contact bg-cover" />
          <div className="space-y-2 text-center text-white uppercase">
            <h2 className="font-semibold">{translate('services_title')}</h2>
            <p className="text-lg">{translate('services_sub')}</p>
          </div>
        </div>


        <div className="space-y-10 drop-shadow-md">

          <div className="flex gap-5">
            <div className="flex flex-1 bg-cover bg-contact rounded-xl overflow-hidden">
              <img src="/assets/img/backgrounds/bg-01.jpg" />
            </div>

            <div className="flex flex-1 flex-col justify-center">
              <h1>{translate('services_item_1_title')}</h1>
              <p>{translate('services_item_1_text')}</p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex flex-1 flex-col text-right justify-center">
              <h1>{translate('services_item_2_title')}</h1>
              <p>{translate('services_item_2_text')}</p>
            </div>

            <div className="flex flex-1 bg-cover bg-contact rounded-xl overflow-hidden">
              <img src="/assets/img/backgrounds/bg-02.jpg" />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex flex-1 bg-cover bg-contact rounded-xl overflow-hidden">
              <img src="/assets/img/services/sv-03.jpg" />
            </div>

            <div className="flex flex-1 flex-col justify-center">
              <h1>{translate('services_item_3_title')}</h1>
              <p>{translate('services_item_3_text')}</p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex flex-1 flex-col text-right justify-center">
              <h1>{translate('services_item_4_title')}</h1>
              <p>{translate('services_item_4_text')}</p>
            </div>

            <div className="flex flex-1 bg-cover bg-contact rounded-xl overflow-hidden">
              <img src="/assets/img/services/sv-04.jpg" />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex flex-1 bg-cover bg-contact rounded-xl overflow-hidden">
              <img src="/assets/img/services/sv-05.jpg" />
            </div>

            <div className="flex flex-1 flex-col justify-center">
              <h1>{translate('services_item_5_title')}</h1>
              <p>{translate('services_item_5_text')}</p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex flex-1 flex-col text-right justify-center">
              <h1>{translate('services_item_6_title')}</h1>
              <p>{translate('services_item_6_text')}</p>
            </div>

            <div className="flex flex-1 bg-cover bg-contact rounded-xl overflow-hidden">
              <img src="/assets/img/services/sv-07.jpg" />
            </div>
          </div>

        </div>

      </main>
    </>
  )
}
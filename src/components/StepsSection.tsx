import { useLanguage } from "../lib/LanguageProvider";

export function StepsSection() {
  const { translate } = useLanguage();

  return (
    <>
      <section id="section-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="">
              <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1   md:divide-x px-3">

                <div className="pl-2">
                  <h2 className="text-2xl font-medium uppercase">
                    <span className="text-4xl pr-2 text-red-600">01
                    </span>
                    {translate('home_step_1_title')}
                  </h2>
                  <span className="text-base">
                    {translate('home_step_1_text')}
                  </span>
                </div>

                <div className="pl-2">
                  <h2 className="text-2xl font-medium uppercase">
                    <span className="text-4xl pr-2 text-red-600">02
                    </span>
                    {translate('home_step_2_title')}
                  </h2>
                  <span className="text-base">
                    {translate('home_step_2_text')}
                  </span>
                </div>

                <div className="pl-2">
                  <h2 className="text-2xl font-medium uppercase">
                    <span className="text-4xl pr-2 text-red-600">03
                    </span>
                    {translate('home_step_3_title')}
                  </h2>
                  <span className="text-base">
                    {translate('home_step_3_text')}
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
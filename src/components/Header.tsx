import { CaretDoubleDown } from "@phosphor-icons/react";
import { useLanguage } from "../lib/LanguageProvider";


export function Header() {
  const { translate } = useLanguage();

  return (
    <>
      <section className="pt-0">
        <div className="container">
          <div className="flex flex-1 position-relative min-h-svh items-center justify-center">


            <div className="col-lg-8 col-xl-7">
              <div className="row align-items-center">
                <div className="col-lg-10">

                  <p className="text-5xl title-underline mb-5 pb-3">
                    {translate('home_text_1')}
                    <span className="text-primary">
                      {translate('home_text_2')}
                    </span>
                    {translate('home_text_3')}
                  </p>


                  <div className="row justify-content-center justify-content-lg-start">

                    <div className="flex pl-3">
                      <a href="#contact"
                        className="btn btn-primary btn-md btn-block">
                        <div className="flex justify-center items-center gap-2.5">
                          <CaretDoubleDown size={32} />
                          {translate('home_button_text')}
                        </div>
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            </div>

            <div className="flex flex-1 bg-blue-950  rounded-xl pt-7 pb-4 max-lg:hidden">
              <div className="align-items-center ml-lg-neg-7 ml-7">

                <div className="">
                  <div>
                    <img src="/assets/img/img-04.jpg" className="rounded-xl w-100" />
                  </div>

                </div>

              </div>
            </div>


            <div className="flex items-end justify-center text-center move animate-bounce" >
              <a href="#section-2"><CaretDoubleDown size={32} /></a>
            </div>


          </div>
        </div>
      </section>
    </>
  )
}
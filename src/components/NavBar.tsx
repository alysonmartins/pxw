import { useLanguage } from '../lib/LanguageProvider';

export function NavBar() {

  const { setLanguage, translate } = useLanguage();

  return (
    <>

      <header className="flex flex-1 h-auto bg-blue-950/90 backdrop-blur-sm m-0 fixed-top align-items-center shadow-shade">
        <div className="container flex h-16 gap-2 justify-between items-center ">

          <a className="" href="/">
            <img src="/assets/img/logo.svg" className="w-48" alt="ProExWeb" />
          </a>

          <div className='flex gap-2 font-bold text-base'>

            <a href="/" className="text-white">{translate('navbar_1')}</a>
            <a href="/services" className="text-white">{translate('navbar_2')}</a>
            <a href="/team/130b5701-6ea8-4e50-bb11-73b105e37756" className="text-white">{translate('navbar_3')}</a>
            <a href="/contact" className="text-white">{translate('navbar_4')}</a>


            <div className='flex gap-2 max-sm:hidden'>
              <span className='text-white'>[</span>
              <a className='text-red-600 cursor-pointer' onClick={() => setLanguage('en')}>🇺🇸</a>
              <span className='text-white'>|</span>
              <a className='text-red-600 cursor-pointer' onClick={() => setLanguage('es')}>🇪🇸</a>
              <span className='text-white'>]</span>
            </div>

          </div>


        </div>

      </header>

    </>
  )
}
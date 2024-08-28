import { useLanguage } from '../lib/LanguageProvider'

export function LatestProjectsSection() {

  const { translate } = useLanguage();

  return (
    <>
      <section>
        <div className="container">
          <div>

            <h3 className="my-0 fs-1 font-medium text-red-600 uppercase">{translate('home_projects_section_text_1')}</h3>
            <h2 className="font-medium text-blue-950 uppercase">{translate('home_projects_section_text_2')}</h2>

          </div>
        </div>

        <div className="grid grid-cols-5 container gap-5 max-sm:grid-cols-3">

          <a href="/project/66c73d1910d7a268cfa6b14b">
            <img className='rounded-md' src="/assets/img/projects/p-01.jpg" />
          </a>

          <a href="/project/66c73d190a52d7f6c12b032f">
            <img className="rounded-md" src="/assets/img/projects/p-02.jpg" />
          </a>

          <a href="/project/66c73d195c2ea2182da44fb9">
            <img className="rounded-md" src="/assets/img/projects/p-03.jpg" />
          </a>

          <a href="/project/66c73d1922e7f9df9debc064">
            <img className="rounded-md" src="/assets/img/projects/p-04.jpg" />
          </a>

          <a href="/project/66c73d1996cbf657f5ee8962">
            <img className="rounded-md" src="/assets/img/projects/p-05.jpg" />
          </a>

          <a href="/project/66c73d19eac91b41b8cb6aba">
            <img className="rounded-md" src="/assets/img/projects/p-06.jpg" />
          </a>

          <a href="/project/66c73d19a5764e7f51136b1b">
            <img className="rounded-md" src="/assets/img/projects/p-07.jpg" />
          </a>

          <a href="/project/66c73d1943c1168cfce6b4f4">
            <img className="rounded-md" src="/assets/img/projects/p-08.jpg" />
          </a>

          <a href="/project/0a9d9cf6-696c-443c-82f7-e9e2fa5be57f">
            <img className="rounded-md" src="/assets/img/projects/p-09.jpg" />
          </a>

          <a href="/project/d610d415-36af-44c2-9eab-e7b6126ea89d">
            <img className="rounded-md" src="/assets/img/projects/p-10.jpg" />
          </a>

        </div>
      </section>
    </>
  )
}
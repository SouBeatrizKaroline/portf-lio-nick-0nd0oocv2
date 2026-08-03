import { useEffect } from 'react'

export function SchemaOrg() {
  useEffect(() => {
    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Nicole Maira Passos Lopes da Silva',
      alternateName: 'Nick',
      jobTitle: 'Game Developer & Gameplay Programmer',
      description:
        'Game Developer specialized in Unity, C#, State Machines, Physics & Combat Systems.',
      url: 'https://nick.goskip.app',
      email: 'mailto:nicolemairaplsilva@gmail.com',
      knowsAbout: ['Unity', 'C#', 'Game Development', 'Gameplay Programming', 'ASP.NET Core'],
      sameAs: [
        'https://github.com/NicolePLSilva',
        'https://www.linkedin.com/in/nicole-maira/',
        'https://pls-nick.itch.io/',
      ],
    }

    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Nick (Nicole Maira) | Game Developer Portfolio',
      url: 'https://nick.goskip.app',
      author: {
        '@type': 'Person',
        name: 'Nicole Maira Passos Lopes da Silva',
      },
      inLanguage: ['pt-BR', 'en', 'es'],
    }

    const personScript = document.createElement('script')
    personScript.type = 'application/ld+json'
    personScript.text = JSON.stringify(personSchema)

    const websiteScript = document.createElement('script')
    websiteScript.type = 'application/ld+json'
    websiteScript.text = JSON.stringify(websiteSchema)

    document.head.appendChild(personScript)
    document.head.appendChild(websiteScript)

    return () => {
      document.head.removeChild(personScript)
      document.head.removeChild(websiteScript)
    }
  }, [])

  return null
}

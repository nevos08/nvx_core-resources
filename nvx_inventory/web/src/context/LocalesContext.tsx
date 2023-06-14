import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

const LocalesContext = createContext({})
export const useLocales = () => useContext(LocalesContext) as ILocales

export default function LocalesContextProvider({ children }: { children: ReactNode }) {
  const [locales, setLocales] = useState<ILocales>({
    title: 'Inventory',
    use: 'Use',
    give: 'Give',
  })

  useEffect(() => {
    const handler = ({ data }: any) => {
      if (data.eventName == 'setLocales') {
        setLocales(data.locales)
      }
    }

    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [])

  return <LocalesContext.Provider value={locales}>{children}</LocalesContext.Provider>
}

import {Suspense, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Outlet} from 'react-router-dom'
import {I18nProvider} from '../_metronic/i18n/i18nProvider'
import {LayoutProvider, LayoutSplashScreen} from '../_metronic/layout/core'
import {MasterInit} from '../_metronic/layout/MasterInit'
import {AuthInit} from './modules/auth'

const App = () => {
  const {lang} = useSelector((state: any) => state.language)
  useEffect(() => {
    if (lang === 'ar') {
      document.documentElement.setAttribute('direction', 'rtl')
      document.documentElement.setAttribute('direction', 'rtl')
      document.documentElement.setAttribute('dir', 'rtl')
      document.documentElement.setAttribute('dir', 'rtl')
      document.documentElement.style.direction = 'rtl'
    } else {
      document.documentElement.setAttribute('direction', 'ltr')
      document.documentElement.setAttribute('direction', 'ltr')
      document.documentElement.setAttribute('dir', 'ltr')
      document.documentElement.setAttribute('dir', 'ltr')
      document.documentElement.style.direction = 'ltr'
    }
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        <LayoutProvider>
          <AuthInit>
            <Outlet />
            <MasterInit />
          </AuthInit>
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
  )
}

export {App}

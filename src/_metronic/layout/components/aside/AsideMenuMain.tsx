/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'
import {useSelector} from 'react-redux'
import {KTSVG} from '../../../helpers'
import {AsideMenuItem} from './AsideMenuItem'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'

export function AsideMenuMain() {
  const {lang} = useSelector((state: any) => state.language)
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={lang === 'ar' ? 'لوحة المعلومات' : intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/builder'
        icon='/media/icons/duotune/general/gen019.svg'
        title={lang === 'ar' ? 'منشيء التنسيق' : 'Layout Builder'}
        fontIcon='bi-layers'
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1 fw-bold'>
            {lang === 'ar' ? 'المكونات الجاهزة' : 'Crafted'}
          </span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='/crafted/pages'
        title={lang === 'ar' ? 'الصفحات' : 'Pages'}
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
        <AsideMenuItemWithSub
          to='/crafted/pages/profile'
          title={lang === 'ar' ? 'الملف الشخصي' : 'Profile'}
          hasBullet={true}
        >
          <AsideMenuItem
            to='/crafted/pages/profile/overview'
            title={lang === 'ar' ? 'نظرة عامة' : 'Overview'}
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/pages/profile/projects'
            title={lang === 'ar' ? 'المشاريع' : 'Projects'}
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/pages/profile/campaigns'
            title={lang === 'ar' ? 'الحملات' : 'Campaigns'}
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/pages/profile/documents'
            title={lang === 'ar' ? 'الوثائق' : 'Documents'}
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/pages/profile/connections'
            title={lang === 'ar' ? 'الارتباطات' : 'Connections'}
            hasBullet={true}
          />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub
          to='/crafted/pages/wizards'
          title={lang === 'ar' ? 'المساعدين' : 'Wizards'}
          hasBullet={true}
        >
          <AsideMenuItem
            to='/crafted/pages/wizards/horizontal'
            title={lang === 'ar' ? 'أفقي' : 'Horizontal'}
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/pages/wizards/vertical'
            title={lang === 'ar' ? 'عمودي' : 'Vertical'}
            hasBullet={true}
          />
        </AsideMenuItemWithSub>
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/crafted/accounts'
        title={lang === 'ar' ? 'الحسابات' : 'Accounts'}
        icon='/media/icons/duotune/communication/com006.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem
          to='/crafted/account/overview'
          title={lang === 'ar' ? 'نظرة عامة' : 'Overview'}
          hasBullet={true}
        />
        <AsideMenuItem
          to='/crafted/account/settings'
          title={lang === 'ar' ? 'الإعدادات' : 'Settings'}
          hasBullet={true}
        />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/error'
        title={lang === 'ar' ? 'الأخطاء' : 'Errors'}
        fontIcon='bi-sticky'
        icon='/media/icons/duotune/general/gen040.svg'
      >
        <AsideMenuItem
          to='/error/404'
          title={lang === 'ar' ? 'خطأ 404' : 'Error 404'}
          hasBullet={true}
        />
        <AsideMenuItem
          to='/error/500'
          title={lang === 'ar' ? 'خطأ 500' : 'Error 500'}
          hasBullet={true}
        />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/crafted/widgets'
        title={lang === 'ar' ? 'الأدوات' : 'Widgets'}
        icon='/media/icons/duotune/general/gen025.svg'
        fontIcon='bi-layers'
      >
        <AsideMenuItem
          to='/crafted/widgets/lists'
          title={lang === 'ar' ? 'القوائم' : 'Lists'}
          hasBullet={true}
        />
        <AsideMenuItem
          to='/crafted/widgets/statistics'
          title={lang === 'ar' ? 'الإحصائيات' : 'Statistics'}
          hasBullet={true}
        />
        <AsideMenuItem
          to='/crafted/widgets/charts'
          title={lang === 'ar' ? 'الرسوم البيانية' : 'Charts'}
          hasBullet={true}
        />
        <AsideMenuItem
          to='/crafted/widgets/mixed'
          title={lang === 'ar' ? 'مختلط' : 'Mixed'}
          hasBullet={true}
        />
        <AsideMenuItem
          to='/crafted/widgets/tables'
          title={lang === 'ar' ? 'الجداول' : 'Tables'}
          hasBullet={true}
        />
        <AsideMenuItem
          to='/crafted/widgets/feeds'
          title={lang === 'ar' ? 'المشاركات والتعليقات' : 'Feeds'}
          hasBullet={true}
        />
      </AsideMenuItemWithSub>
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>
            {lang === 'ar' ? 'التطبيقات' : 'Apps'}
          </span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='/apps/chat'
        title={lang === 'ar' ? 'المحادثة' : 'Chat'}
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem
          to='/apps/chat/private-chat'
          title={lang === 'ar' ? 'المحادثة الخاصة' : 'Private Chat'}
          hasBullet={true}
        />
        <AsideMenuItem
          to='/apps/chat/group-chat'
          title={lang === 'ar' ? 'المحادثة الجماعية' : 'Group Chat'}
          hasBullet={true}
        />
        <AsideMenuItem
          to='/apps/chat/drawer-chat'
          title={lang === 'ar' ? 'المحادثة التدرجية' : 'Drawer Chat'}
          hasBullet={true}
        />
      </AsideMenuItemWithSub>
      <AsideMenuItem
        to='/apps/user-management/users'
        icon='/media/icons/duotune/general/gen051.svg'
        title={lang === 'ar' ? 'إدارة المستخدم' : 'User Management'}
        fontIcon='bi-layers'
      />
      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>
      <div className='menu-item'>
        <a
          target='_blank'
          className='menu-link'
          href={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}
        >
          <span className='menu-icon'>
            <KTSVG path='/media/icons/duotune/general/gen005.svg' className='svg-icon-2' />
          </span>
          <span className='menu-title'>
            {lang === 'ar' ? 'سجل التغيرات' : 'Changelog'} {process.env.REACT_APP_VERSION}
          </span>
        </a>
      </div>
    </>
  )
}

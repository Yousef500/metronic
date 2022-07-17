import {useIntl} from 'react-intl'
import {useSelector} from 'react-redux'
import {MegaMenu} from './MegaMenu'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import {MenuItem} from './MenuItem'

export function MenuInner() {
  const {lang} = useSelector((state: any) => state.language)

  const intl = useIntl()
  return (
    <>
      <MenuItem
        title={lang === 'ar' ? 'لوحة المعلومات' : intl.formatMessage({id: 'MENU.DASHBOARD'})}
        to='/dashboard'
      />
      <MenuItem title={lang === 'ar' ? 'منشيء التنسيق' : 'Layout Builder'} to='/builder' />
      <MenuInnerWithSub
        title={lang === 'ar' ? 'المكونات الجاهزة' : 'Crafted'}
        to='/crafted'
        menuPlacement='bottom-start'
        menuTrigger='click'
      >
        {/* PAGES */}
        <MenuInnerWithSub
          title={lang === 'ar' ? 'الصفحات' : 'Pages'}
          to='/crafted/pages'
          fontIcon='bi-archive'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuInnerWithSub
            title={lang === 'ar' ? 'الملف الشخصي' : 'Profile'}
            to='/crafted/pages/profile'
            hasArrow={true}
            hasBullet={true}
            menuPlacement='right-start'
            menuTrigger={`{default:'click', lg: 'hover'}`}
          >
            <MenuItem
              to='/crafted/pages/profile/overview'
              title={lang === 'ar' ? 'نظرة عامة' : 'Overview'}
              hasBullet={true}
            />
            <MenuItem
              to='/crafted/pages/profile/projects'
              title={lang === 'ar' ? 'المشاريع' : 'Projects'}
              hasBullet={true}
            />
            <MenuItem
              to='/crafted/pages/profile/campaigns'
              title={lang === 'ar' ? 'الحملات' : 'Campaigns'}
              hasBullet={true}
            />
            <MenuItem
              to='/crafted/pages/profile/documents'
              title={lang === 'ar' ? 'الوثائق' : 'Documents'}
              hasBullet={true}
            />
            <MenuItem
              to='/crafted/pages/profile/connections'
              title={lang === 'ar' ? 'الارتباطات' : 'Connections'}
              hasBullet={true}
            />
          </MenuInnerWithSub>
          <MenuInnerWithSub
            title={lang === 'ar' ? 'المساعدين' : 'Wizards'}
            to='/crafted/pages/wizards'
            hasArrow={true}
            hasBullet={true}
            menuPlacement='right-start'
            menuTrigger={`{default:'click', lg: 'hover'}`}
          >
            <MenuItem
              to='/crafted/pages/wizards/horizontal'
              title={lang === 'ar' ? 'أفقي' : 'Horizontal'}
              hasBullet={true}
            />
            <MenuItem
              to='/crafted/pages/wizards/vertical'
              title={lang === 'ar' ? 'عمودي' : 'Vertical'}
              hasBullet={true}
            />
          </MenuInnerWithSub>
        </MenuInnerWithSub>

        {/* ACCOUNT */}
        <MenuInnerWithSub
          title={lang === 'ar' ? 'الحسابات' : 'Accounts'}
          to='/crafted/accounts'
          fontIcon='bi-person'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem
            to='/crafted/account/overview'
            title={lang === 'ar' ? 'نظرة عامة' : 'Overview'}
            hasBullet={true}
          />
          <MenuItem
            to='/crafted/account/settings'
            title={lang === 'ar' ? 'الإعدادات' : 'Settings'}
            hasBullet={true}
          />
        </MenuInnerWithSub>

        {/* ERRORS */}
        <MenuInnerWithSub
          title={lang === 'ar' ? 'الأخطاء' : 'Errors'}
          to='/error'
          fontIcon='bi-sticky'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem
            to='/error/404'
            title={lang === 'ar' ? 'خطأ 404' : 'Error 404'}
            hasBullet={true}
          />
          <MenuItem
            to='/error/500'
            title={lang === 'ar' ? 'خطأ 500' : 'Error 500'}
            hasBullet={true}
          />
        </MenuInnerWithSub>

        {/* Widgets */}
        <MenuInnerWithSub
          title={lang === 'ar' ? 'الأدوات' : 'Widgets'}
          to='/crafted/widgets'
          fontIcon='bi-layers'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem
            to='/crafted/widgets/lists'
            title={lang === 'ar' ? 'القوائم' : 'Lists'}
            hasBullet={true}
          />
          <MenuItem
            to='/crafted/widgets/statistics'
            title={lang === 'ar' ? 'الإحصائيات' : 'Statistics'}
            hasBullet={true}
          />
          <MenuItem
            to='/crafted/widgets/charts'
            title={lang === 'ar' ? 'الرسوم البيانية' : 'Charts'}
            hasBullet={true}
          />
          <MenuItem
            to='/crafted/widgets/mixed'
            title={lang === 'ar' ? 'مختلط' : 'Mixed'}
            hasBullet={true}
          />
          <MenuItem
            to='/crafted/widgets/tables'
            title={lang === 'ar' ? 'الجداول' : 'Tables'}
            hasBullet={true}
          />
          <MenuItem
            to='/crafted/widgets/feeds'
            title={lang === 'ar' ? 'المشاركات والتعليقات' : 'Feeds'}
            hasBullet={true}
          />
        </MenuInnerWithSub>
      </MenuInnerWithSub>

      <MenuInnerWithSub
        title={lang === 'ar' ? 'التطبيقات' : 'Apps'}
        to='/apps'
        menuPlacement='bottom-start'
        menuTrigger='click'
      >
        {/* PAGES */}
        <MenuInnerWithSub
          title={lang === 'ar' ? 'المحادثة' : 'Chat'}
          to='/apps/chat'
          icon='/media/icons/duotune/communication/com012.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem
            to='/apps/chat/private-chat'
            title={lang === 'ar' ? 'المحادثة الخاصة' : 'Private Chat'}
            hasBullet={true}
          />
          <MenuItem
            to='/apps/chat/group-chat'
            title={lang === 'ar' ? 'المحادثة الجماعية' : 'Group Chat'}
            hasBullet={true}
          />
          <MenuItem
            to='/apps/chat/drawer-chat'
            title={lang === 'ar' ? 'المحادثة التدرجية' : 'Drawer Chat'}
            hasBullet={true}
          />
        </MenuInnerWithSub>
        <MenuItem
          icon='/media/icons/duotune/general/gen051.svg'
          to='/apps/user-management/users'
          title={lang === 'ar' ? 'إدارة المستخدم' : 'User Management'}
        />
      </MenuInnerWithSub>

      <MenuInnerWithSub
        isMega={true}
        title={lang === 'ar' ? 'القائمة الكبيرة' : 'Mega Menu'}
        to='/mega-menu'
        menuPlacement='bottom-start'
        menuTrigger='click'
      >
        <MegaMenu />
      </MenuInnerWithSub>
    </>
  )
}

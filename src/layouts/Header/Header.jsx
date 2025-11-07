import './Header.scss'
import Logo from '@/components/Logo'
import clsx from 'clsx'
import Socials from '@/components/Socials'
import BurgerButton from '@/components/BurgerButton'

export default (props) => {
  const { url } = props

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Recipes', href: '/recipes' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'About us', href: '/about' },
  ]

  return (
    <header className='header' data-js-mobile-menu="">
      <div className="header__inner container">
        <Logo className="header__logo" />
        <nav className="header__menu" data-js-mobile-menu-overlay="">
            <ul className="header__menu-list">
              {menuItems.map(({ label, href }) => (
                <li key={label} className="header__menu-item">
                  <a className={clsx('header__menu-link',
                    { 'header__menu-link--active': url === href })} href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
        </nav>
        <Socials className="header__socials" />
        <BurgerButton 
          className="header__burger-button visible-mobile" 
          extraAttrs={{ 'data-js-mobile-menu-burger-button': '' }} 
        />
      </div>
    </header>
  )
}

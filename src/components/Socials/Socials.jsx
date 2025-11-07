import './Socials.scss'
import clsx from 'clsx'
import Icon from '../Icon'

export default (props) => {
  const { className } = props

  const links = [
    { label: 'Facebook', icon: 'facebook' },
    { label: 'Twitter', icon: 'twitter' },
    { label: 'Instagram', icon: 'instagram' },
  ]
  return (
    <div className={clsx('socials', className)}>
      <ul className="socials__list">
        {links.map(({ label, icon }) => (
          <li key={label} className="socials__item">
            <a className="socials__link" href="/" title={label}>
              <span className="visually-hidden">{label}</span>
              <Icon name={icon} hasFill />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
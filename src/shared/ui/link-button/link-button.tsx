import {ButtonHTMLAttributes} from 'react'

import './link-button.scss';

type LinkButtonVariant = 'green' | 'secondary';
export type LinkButtonProps = {
  variant?: LinkButtonVariant
} & ButtonHTMLAttributes<HTMLButtonElement>;

const _Link = 'link-button'

export const LinkButton = ({className, variant = 'green', label, href, ...props}: LinkButtonProps) => {
  const text = label && label.length > 0 ? label : href;

  return (
    <a
      className={`${_Link} ${_Link}_${variant} ${className}`}
      href={href}
      {...props}
    >
      {text}
    </a>
  )
}

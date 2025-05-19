import classNames from 'classnames';

import styles from './button.module.scss'


type ButtonProps = {
  className: string,
  text: string,
  isEnabled: boolean,
  onClick: () => void,
}

export default function Button({
  className,
  text,
  isEnabled,
  onClick,
}: ButtonProps) {
  const classes = classNames(
    className,
    styles.button,
  )

  return (
    <button
      className={classes}
      type='button'
      onClick={onClick}
      disabled={!isEnabled}
    >
      {text}
    </button>
  );
}

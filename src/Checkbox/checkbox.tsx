import classNames from 'classnames';

import styles from './checkbox.module.scss'


type CheckboxProps = {
  className: string,
  text?: string,
  id: string,
  value: boolean,
  onChange: () => void,
}

export default function Checkbox({
  className,
  text,
  id,
  value,
  onChange
}: CheckboxProps) {
  const classes = classNames(
    className,
    styles.checkbox,
  )

  return (
    <div className={classes}>
      <input type="checkbox" id={id} onChange={onChange} checked={value} />
      <label htmlFor={id}>{text}</label>
    </div>
  );
}

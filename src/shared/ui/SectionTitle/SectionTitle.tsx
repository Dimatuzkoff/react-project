// react
import type {FC} from 'react'
// styles
import styles from './SectionTitle.module.scss'

interface SectionTitleProps {
  title?: string
}

export const SectionTitle:FC<SectionTitleProps> = ({title}) => {
return (
  <div className={styles.sectionTitle}>
    <div className={styles.line}></div>
    <h2>{title}</h2>
</div>
)
}

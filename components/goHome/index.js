import Link from 'next/link'
import styles from 'components/goHome/goHome.module.css'

const GoHome = () => {
  return (
    <div className="styles.container">
      <Link href="/">
        <a>Go Home</a>
      </Link>
    </div>
  )
}

export default GoHome

import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.container}>

      <main className={styles.main}>

        <div className={styles.grid}>
          <a style={{cursor:'pointer'}} onClick={()=>router.push('/login')} className={styles.card}>
            <h2>Click To Login Test &rarr;</h2>
            <p>You can click register on login page to create account</p>
          </a>
        </div>
      </main>
    </div>
  )
}

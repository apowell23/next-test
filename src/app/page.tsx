import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
  

      <div className={styles.center}>
      
          <Image
          src="https://cdn.mediavalet.com/cato/solutionengineers/lKLUeHu4j06oAqLKyl7jiA/iEwQjE9Rrkm3hKm0iN5YBA/Large/Higher%20education_2.jpeg"
          alt="13" width={800} height={250} priority />
       
      </div>  
  
      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>

      </div>
    </main>
  )
}

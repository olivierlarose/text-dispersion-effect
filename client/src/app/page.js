'use client';
import styles from './page.module.css'
import { useRef } from 'react';
import TextDisperse from '@/components/TextDisperse';

export default function Home() {

  const background = useRef(null);

  const setBackground = (isActive) => {
    background.current.style.opacity = isActive ? 0.8 : 0
  }

  return (
    <main className={styles.main}>
      <div className={styles.body}>

        <div className='introLine'>
          <p>Nathan</p>
          <p>Smith</p>
        </div>

        <div className='introLine'>
          <p>Design</p>
          <p>&</p>
        </div>

        <div className='introLine'>
          <p>Art</p>
          <p>Direction</p>
        </div>

        <TextDisperse setBackground={setBackground}>
          <p>+447533063596</p>
        </TextDisperse>

        <TextDisperse setBackground={setBackground}>
          <p>→Email</p>
        </TextDisperse>

        <TextDisperse setBackground={setBackground}>
          <p>→Insta</p>
        </TextDisperse>

      </div>
      <div ref={background} className={styles.background}></div>
    </main>
  )
}


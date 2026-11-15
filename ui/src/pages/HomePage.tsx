import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Home</h1>
      <p className={styles.hint}>
        Replace this page with your own. Add routes in{' '}
        <code className={styles.code}>src/app/router.tsx</code>.
      </p>
    </main>
  )
}

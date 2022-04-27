import { useEffect, useContext, useState } from 'react'
import styles from '../styles/Guides.module.css'
import AuthContext from '../stores/authContext'

export default function Guides() {
  const { user, authReady } = useContext(AuthContext)
  const [guides, setGuides] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    if (authReady) {
    fetch('/.netlify/functions/guides', user && {
      headers: {
        Authorization: 'Bearer ' + user.token.access_token
      }
    })
    .then(res => {
      if(!res.ok) {
        throw Error('login first')
      }
      return res.json()
    })
    .then(data => {
      setGuides(data)
      setError(null)
    })
    .catch((err) => {
      setError(err.message)
      setGuides([])
    })
  }
  }, [user, authReady])
  
  return (
    <div className={styles.guides}>
      {!authReady && <p>Loading...</p>}
      {error && (
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      )}
      {guides && guides.map(guide => (
        <div key= {guide.title} className={styles.card}>
          <h2>{guide.title}</h2>
          <p>{guide.description}</p>
        </div>
        
      ))}   
      </div>
  )
}

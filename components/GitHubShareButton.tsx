import React from 'react'

import styles from './styles.module.css'

export const GitHubShareButton: React.FC = () => {
  return (
    <a
      href='https://www.thelapyae.com'
      target='_blank'
      rel='noopener noreferrer'
      className={styles.githubCorner}
      aria-label='visit my page'
    >
      
    </a>
  )
}

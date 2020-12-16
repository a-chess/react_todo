import React from 'react'
import { Book } from '@js/redux/books/actions'
import styles from './style.css'

interface Props {
  book: Book
}

export default (props: Props) => {
  const { book } = props

  return (
    <div className={styles.container}>
      <div className={styles.text}>{book.id}</div>
      <div className={styles.text}>{book.title}</div>
    </div>
  )
}

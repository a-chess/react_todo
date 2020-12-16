/*
 * action types
 */

import { Action } from 'redux'

export const FETCH_BOOKS = 'BOOK/FETCH_BOOKS'
export type Book = {
  id: number
  title: string
}

interface FetchBooksAction extends Action {
  type: typeof FETCH_BOOKS
  payload: Book[]
}
/*
 * action creators
 */

export type BooksActionTypes = FetchBooksAction

export const fetchBooks = (books: Book[]) => {
  return { type: FETCH_BOOKS, payload: books }
}

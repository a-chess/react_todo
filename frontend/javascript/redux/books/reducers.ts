import * as Actions from './actions'
import { Book } from './actions'

export type BookStore = {
  books: Book[]
}

const initialState: BookStore = {
  books: [],
}

export const booksReducer = (
  state = initialState,
  action: Actions.BooksActionTypes
) => {
  switch (action.type) {
    case Actions.FETCH_BOOKS: {
      return {
        ...state,
        books: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

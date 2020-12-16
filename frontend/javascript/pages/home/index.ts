import { connect } from 'react-redux'
import { Dispatch, Action } from 'redux'
import { BookStore, fetchBooks } from '../../redux/books'
import { Book } from '@js/redux/books/actions'
import ShowUI from './show_ui'

const mapStateToProps = (state: { booksReducer: BookStore }) => {
  return {
    books: state.booksReducer.books,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    fetchBooks: (books: Book[]) => dispatch(fetchBooks(books)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowUI)

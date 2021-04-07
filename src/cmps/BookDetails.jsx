

export default class BookDetails extends Component {

  state = {
    book: null,
  }

  componentDidMount() {
    this.loadBooks()
  }

 
  render() {

    return (
      <div className="wishlist-app">

      </div>
    )
  }
}
import axios from 'axios'
import Layout from '../components/Layout'
import Link from 'next/link'
import Card from '../components/Card'
import searchStore from '../store/searchStore'
import {observer} from 'mobx-react' // TODO:

class Page extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      dropdownValue: '',
      isSearchComplete: false,
      searchList: []
    }
  }

  get = async () => {

    let search = this.state.inputValue

    let res = await axios.get('http://www.omdbapi.com/', {
      params: {
        s: search,
        apikey: 'd5b5a7ff'
      }
    })

    console.log(res.data['Search'])

    let temp = res.data['Search']

    temp.forEach(x => {
      this.state.searchList.push({
        title: x['Title'],
        imageUrl: x['Poster'] === 'N/A' ? '' : x['Poster'],
        releaseDate: x['Released'],
        imdbRating: x['imdbRating'],
        isAddedToFav: false
      })
    })

    localStorage.setItem('favorites', temp) // TODO: Will be use MOBX

    this.setState({
      isSearchComplete: true
    })
  }

  updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value
    })
  }

  render() {
    let {inputValue, isSearchComplete, searchList} = this.state

    return (
        <Layout>
          <div className="container">
            <div className="starter text-center">
              <h1>Search Engine</h1>
              <p className="lead">You can find your favorite movie, series or episodes.<br/> Also, you can add these
                your favorite list.</p>


              <div className="input-group mb-3">
                <input value={inputValue} onChange={evt => this.updateInputValue(evt)} type="text"
                       className="form-control" placeholder="Name" aria-label="Name"
                       aria-describedby="basic-addon1"/>
              </div>

              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                       value="option1"/>
                <label className="form-check-label" htmlFor="inlineRadio1">Movie</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                       value="option2"/>
                <label className="form-check-label" htmlFor="inlineRadio2">Series</label>
              </div>
              <div className="form-check form-check-inline mb-3">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                       value="option3"/>
                <label className="form-check-label" htmlFor="inlineRadio2">Episode</label>
              </div>

              <div>
                <button onClick={() => this.get()} type="button" className="btn btn-primary mb-3">Search</button>
              </div>

              <div className="row">
                {isSearchComplete && searchList.map(item =>
                    <Card title={item.title} imageUrl={item.imageUrl} releaseDate={item.releaseDate}
                          imdbRating={item.imdbRating}/>)}
              </div>

            </div>
          </div>
        </Layout>
    )
  }
}

export default Page

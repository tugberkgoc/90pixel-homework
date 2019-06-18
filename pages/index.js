import axios from 'axios'
import Layout from '../components/Layout'
import Link from 'next/link'
import Card from '../components/Card'

class Page extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      dropdownValue: '',
      isSearchComplete: false,
      title: '',
      released: '',
      poster: null
    }
  }

  get = async () => {

    let title = this.state.inputValue

    let res = await axios.get('http://www.omdbapi.com/', {
      params: {
        t: title,
        apikey: 'd5b5a7ff'
      }
    })

    this.state.title = res.data['Title']
    this.state.released = res.data['Released']
    this.state.poster = res.data['Poster']

    this.setState({
      isSearchComplete: true
    })

    console.log(this.state.title)

    console.log(res.data)
  }

  updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value
    })
  }

  updateDropdown = (val) => {
    this.setState({
      dropdownValue: val
    })
  }


  render() {
    let {inputValue, isSearchComplete, title, released, poster} = this.state

    return (
        <Layout>
          <div className="container">
            <div className="starter text-center">
              <h1>Search Engine</h1>
              <p className="lead">You can find your favorite movie, series or episodes.<br/> Also, you can add these your favorite list.</p>


              <div className="input-group mb-3">
                <input value={inputValue} onChange={evt => this.updateInputValue(evt)} type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1"/>
              </div>

              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                <label className="form-check-label" htmlFor="inlineRadio1">Movie</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label className="form-check-label" htmlFor="inlineRadio2">Series</label>
              </div>
              <div className="form-check form-check-inline mb-3">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                <label className="form-check-label" htmlFor="inlineRadio2">Episode</label>
              </div>

              <div>
                <button onClick={() => this.get()} type="button" className="btn btn-primary mb-3">Search</button>
              </div>


              <div>
                {isSearchComplete && <Card title={title} releaseDate={released} imageUrl={poster}/>}
              </div>


            </div>
          </div>
        </Layout>
    )
  }
}

export default Page

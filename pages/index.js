import axios from 'axios'
import Layout from '../components/Layout'
import Link from 'next/link'
import Card from '../components/Card'
import searchStore from '../store/searchStore'
import {observer} from 'mobx-react'

const Page = observer(
    class Page extends React.Component {

      constructor(props) {
        super(props);
        this.state = {
          inputValue: '',
          isSelected: null
        }
      }

      get = async () => {

        let res = await axios.get('http://www.omdbapi.com/', {
          params: {
            s: this.state.inputValue,
            type: this.state.isSelected !== false && this.state.isSelected,
            apikey: 'd5b5a7ff'
          }
        })

        res.data['Search'].forEach(async item => {

          let {data} = await axios.get('http://www.omdbapi.com/', {
            params: {
              i: item['imdbID'],
              apikey: 'd5b5a7ff'
            }
          })

          searchStore.newSearchItem({
            title: item['Title'],
            imageUrl: item['Poster'] === 'N/A' ? '' : item['Poster'],
            releaseDate: data['Released'],
            imdbRating: data.imdbRating,
            isAddedToFav: false
          })
        })
      }

      updateInputValue = (evt) => {
        this.setState({
          inputValue: evt.target.value
        })
      }

      updateSearchList = (val) => {
        this.setState({
          searchList: val
        })
      }

      render() {
        const {inputValue} = this.state

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
                    <input className="form-check-input"
                           type="radio"
                           name="inlineRadioOptions"
                           value="option1"
                           onClick={() => this.state.isSelected = 'movie'}/>
                    <label className="form-check-label" htmlFor="inlineRadio1">Movie</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input"
                           type="radio"
                           name="inlineRadioOptions"
                           id="inlineRadio2"
                           value="option2"
                           onClick={() => this.state.isSelected = 'series'}/>
                    <label className="form-check-label" htmlFor="inlineRadio2">Series</label>
                  </div>
                  <div className="form-check form-check-inline mb-3">
                    <input className="form-check-input"
                           type="radio"
                           name="inlineRadioOptions"
                           id="inlineRadio3"
                           value="option3"
                           onClick={() => this.state.isSelected = 'episode'}/>
                    <label className="form-check-label" htmlFor="inlineRadio2">Episode</label>
                  </div>

                  <div>
                    <button onClick={() => this.get()} type="button" className="btn btn-primary mb-3">Search</button>
                  </div>

                  <div className="row">
                    {searchStore.searchList.map(item =>
                        <Card title={item.title} imageUrl={item.imageUrl} releaseDate={item.releaseDate}
                              imdbRating={item.imdbRating} isAddedToFav={item.isAddedToFav}/>)}
                  </div>

                </div>
              </div>
            </Layout>
        )
      }
    }
)

export default Page

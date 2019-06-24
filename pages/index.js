import React from 'react'
import dynamic from 'next/dynamic'
import {observer} from 'mobx-react'
import Layout from '../components/Layout'
import searchStore from '../store/searchStore'

const Card = dynamic(
    () => import('../components/Card'),
    {
      ssr: false,
    }
)

@observer
class Page extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      yearValue: '',
      inputValue: '',
      selectedOption: 'movie'
    }
  }

  getSearchList = async () => {
    let response = await searchStore.addToSearchList(this.state.inputValue, this.state.yearValue, this.state.selectedOption)
    response === 200 ? console.log('Success') : console.log('Unable to get data')
  }

  updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value
    })
  }

  updateYearValue = (evt) => {
    this.setState({
      yearValue: evt.target.value
    })
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    })
  }

  renderList = () => {
    return [...searchStore.searchList].map(item => {
      return (
          <Card
              key={item.id}
              id={item.id}
              title={item.title}
              imageUrl={item.imageUrl}
              imdbRating={item.imdbRating}
              releaseDate={item.releaseDate}
              isAddedToFav={item.isAddedToFav}/>
      )
    })
  }

  render() {
    const {inputValue, yearValue} = this.state

    return (
        <Layout>
          <div className="container">
            <div className="starter text-center">
              <h1>Search Engine</h1>
              <p className="lead">You can find your favorite movie, series or episodes.<br/> Also, you can add these
                your favorite list.</p>

              <div className="row pb-3">
                <div className="input-group col-md-6">
                  <input value={inputValue}
                         onChange={evt => this.updateInputValue(evt)}
                         type="text"
                         className="form-control"
                         placeholder="Name"/>
                </div>
                <div className="input-group col-md-6">
                  <input value={yearValue}
                         onChange={evt => this.updateYearValue(evt)}
                         type="text"
                         className="form-control"
                         placeholder="Year"/>
                </div>
              </div>

              <div className="form-check form-check-inline">
                <input className="form-check-input"
                       type="radio"
                       name="inlineRadioOptions"
                       value="movie"
                       checked={this.state.selectedOption === 'movie'}
                       onChange={this.handleOptionChange}/>
                <label className="form-check-label" htmlFor="inlineRadio1">Movie</label>
              </div>

              <div className="form-check form-check-inline">
                <input className="form-check-input"
                       type="radio"
                       name="inlineRadioOptions"
                       value="series"
                       checked={this.state.selectedOption === 'series'}
                       onChange={this.handleOptionChange}/>
                <label className="form-check-label" htmlFor="inlineRadio2">Series</label>
              </div>
              <div className="form-check form-check-inline mb-3">
                <input className="form-check-input"
                       type="radio"
                       name="inlineRadioOptions"
                       value="episode"
                       checked={this.state.selectedOption === 'episode'}
                       onChange={this.handleOptionChange}/>
                <label className="form-check-label" htmlFor="inlineRadio2">Episode</label>
              </div>

              <div>
                <button onClick={() => this.getSearchList()}
                        type="button"
                        className="btn btn-primary mb-3">
                  Search
                </button>
              </div>

              <div className="row">
                {this.renderList()}
              </div>

            </div>
          </div>
        </Layout>
    )
  }
}

export default Page

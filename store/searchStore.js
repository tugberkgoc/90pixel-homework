import axios from "axios"
import {computed, observable} from 'mobx'

class SearchStore {
  @observable searchList = []
  @observable favList = []

  @computed get getSearchList() {
    return this.searchList
  }

  @computed get getFavList() {
    return this.favList
  }

  setSearchList = (payload) => this.searchList = payload

  pushItemToSearchList = (item) => this.searchList.push(item)

  setFavList = (payload) => this.favList = payload

  addToFav = (item) => {
    this.favList.push(item)
    this.setSearchList(this.getSearchList.filter(x => x.id !== item.id))
    localStorage.setItem('fav', JSON.stringify(this.favList))
  }

  removeToFav = (item) => {
    this.setFavList(this.getFavList.filter(x => x.id !== item.id))
    localStorage.setItem('fav', JSON.stringify(this.favList))
  }

  addToSearchList = async (inputValue, yearValue, isSelected) => {
    this.setSearchList([])

    let res = await axios.get('http://www.omdbapi.com/', {
      params: {
        s: inputValue,
        y: yearValue !== '' && yearValue,
        type: isSelected !== false && isSelected,
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

      this.pushItemToSearchList({
        id: item['imdbID'],
        title: item['Title'],
        imageUrl: item['Poster'] === 'N/A' ? '' : item['Poster'],
        releaseDate: data['Released'],
        imdbRating: data.imdbRating,
        isAddedToFav: false
      })
    })

    return res.status
  }
}

export default new SearchStore()

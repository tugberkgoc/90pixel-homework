import {decorate, observable} from 'mobx'

class SearchStore {
  searchList = [] || localStorage.getItem('favorites')
  favList = [] //  typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('fav')) :

  newSearchItem = (searchItem) => {
    this.searchList.push(searchItem)
    localStorage.setItem('favorites', JSON.stringify(this.searchList))
  }

  addToFav = (item) => {
    item.isAddedToFav = true
    this.favList.push(item)
    localStorage.setItem('fav', JSON.stringify(this.favList))
  }
}

decorate(SearchStore, {
  searchList: observable
})

export default new SearchStore()

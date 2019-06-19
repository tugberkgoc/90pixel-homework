import {decorate, observable} from 'mobx'

class SearchStore {
  searchList = [] || localStorage.getItem('favorites')
  favList = []

  newSearchItem = (searchItem) => {
    this.searchList.push(searchItem)
    localStorage.setItem('favorites', this.searchList)
  }

  addToFav = (item) => {
    item.isAddedToFav = true
    this.favList.push(item)
    localStorage.setItem('fav', this.favList)
  }
}

decorate(SearchStore, {
  searchList: observable
})

export default new SearchStore()

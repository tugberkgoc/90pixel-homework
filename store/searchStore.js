import {decorate, observable} from 'mobx'

class SearchStore {
  searchList = []
  favList = []

  newSearchItem = (searchItem) => {
    this.searchList.push(searchItem)
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

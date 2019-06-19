import {decorate, observable} from 'mobx' // TODO:

class SearchStore {
  searchList = []
}

decorate(SearchStore, {
  searchList: observable
})

export default new SearchStore()

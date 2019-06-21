import React from "react"
import dynamic from "next/dynamic"
import {observer} from 'mobx-react'
import Layout from '../components/Layout'
import searchStore from "../store/searchStore"

const Card = dynamic(
    () => import('../components/Card'),
    {
      ssr: false,
    }
)

@observer
class Favorites extends React.Component {

  renderList = () => {
    return [...searchStore.favList].map(item => {
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

  componentDidMount() {
    searchStore.favList = JSON.parse(localStorage.getItem('fav'))
  }

  render() {

    return (
        <Layout>

          <h1 className="text-center pt-3 pb-3">Favorites</h1>

          <div className="row text-center">
            {this.renderList()}
          </div>

        </Layout>
    )
  }
}

export default Favorites

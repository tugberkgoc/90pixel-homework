import Layout from '../components/Layout'
import Link from 'next/link'
import React from "react"
import searchStore from "../store/searchStore";
import Card from "../components/Card";

class Favorites extends React.Component {

  componentDidMount(){
    searchStore.favList = JSON.parse(localStorage.getItem('fav'))
  }

  render() {

    return (
        <Layout>

          <h1 className="text-center pt-3 pb-3">Favorites</h1>

          <div className="row">
            {searchStore.favList.map(item =>
                <Card title={item.title} imageUrl={item.imageUrl} releaseDate={item.releaseDate}
                      imdbRating={item.imdbRating} isAddedToFav={item.isAddedToFav}/>)}
          </div>

        </Layout>
    )
  }
}

export default Favorites

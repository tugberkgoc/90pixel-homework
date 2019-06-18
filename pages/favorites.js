import axios from 'axios'
import Layout from '../components/Layout'
import Link from 'next/link'
import React from "react"

class Favorites extends React.Component {

  render() {

    return (
        <Layout>

          <div className="card mb-3" style={{maxWidth: "540px"}}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src="https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg" className="card-img"/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Guardians of the Galaxy Vol. 2</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </Layout>
    )
  }
}

export default Favorites

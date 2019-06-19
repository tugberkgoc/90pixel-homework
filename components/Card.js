import {MdFavorite, MdFavoriteBorder} from "react-icons/md"
import searchStore from '../store/searchStore'

const Card = ({title, imageUrl, releaseDate, imdbRating, isAddedToFav}) => (

    <div className="col-md-6">
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            {imageUrl !== '' ? <img src={imageUrl} className="card-img" style={{height: "250px"}} alt={title}/> : <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEXz9Pa5vsq2u8jN0dnV2N/o6u7w8fTi5OnFydO+ws3f4ee6v8vY2+H29/jy9Pbu7/LJztbCx9HR1ty/NMEIAAAC8ElEQVR4nO3b67ZrMBiFYaSh1HHd/8XuFap1SFolXb7s8T4/18EwOyNCiSIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACryrezAy2kulR+lVl6dqip7Jr412Zyeizj7yjODjYqvhRQTMQm/1rC/OxsvapIht3xehDeN1lIOBSrtt+ZW+t1Kh02GrciEvaDNLl4Ph1e+hqvEk4Z94SZ580WchJGJNyHhH/JlrDR+uC+iU6Yqf7c2JXNga0KTlj/xOP5ujuwdpabML0mz1VXUu7eqtyEP5OAvysdvXerYhMWs4C/a+e9uyg1YXVdXh7sXTtLTagXFcaJ2rlVqQmXgzSOu5f76J5shSasylXC/NVJUbknW6kJLx8lNPNu6WhRaMKPRmmtzB+7WpSasNk+09TjmdPeotSEVbfs0HW7LFXjh2FvUWrC1Z1F1yCt1aRtW4tiE0ZqPk4dp4NUzYaypUW5CaNuGtExjdSLz8HSouCEjRqvnuLcceE/b9D+UQhOGFWZys093e7S2IfoqkFbi5ITRv1NDN24ds7SoKVF4QlfsTa4bjHchOmPI+AiYrgJXQ0uB2qoCWt3g4sWQ034qsF5i4EkbBY3ol43OGsxjIT6luvp7NG+DfhsMYSElc7jpHteAL85BhcthpBQ38zPny1uadD8x3C9JT+habD/RXdfu21rsP822fy5/IR9g/GjxXpjg+ZSKoiEY4OPFrc2GEzCR4O9XL87D4aWcNrgEHFzvkASzhv8UAAJVw3+dwkPNRhAwoMNBpDwYIPiEx5uUHzCww1KT1htX7qEmnD9/SEJSXhutgEJSUjC8/lOKPs+jfla7ajh/qPUhP6Q8C+RcJdKUML7W0HK75vA9+/hrmenM8bHgr/y7pqS8O7a43nEb7x/6Pvo3iddPa3njYx3SKMoO37rwu4mo8LIPJB4fLG2lggZoz3d5l6PQuPWahHTzEgXF79KQQUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAp/gHLTI30QIHnooAAAAASUVORK5CYII=" style={{height: "250px", width: "180px"}}/>}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title} {isAddedToFav ?
                  <span onClick={() => isAddedToFav = !isAddedToFav}><MdFavorite/></span> :
                  <span onClick={() => isAddedToFav = !isAddedToFav}><MdFavoriteBorder/></span>}</h5>
              <p className="card-text">{imdbRating === 'N/A' ? '0.0' : imdbRating}</p>
              <p className="card-text">
                {releaseDate !== 'N/A' && <small className="text-muted">{releaseDate}</small>}
              </p>
              <button onClick={() => searchStore.addToFav({title, imageUrl, releaseDate, imdbRating, isAddedToFav})}>Add to Favorites</button>
            </div>
          </div>
        </div>
      </div>
    </div>

)

export default Card

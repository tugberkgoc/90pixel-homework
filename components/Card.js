const Card = ({title, releaseDate, imageUrl}) => (

    <div className="card mb-3" style={{maxWidth: "540px"}}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={imageUrl} className="card-img"/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">Sample Text.</p>
            <p className="card-text">
              <small className="text-muted">{releaseDate}</small>
            </p>
          </div>
        </div>
      </div>
    </div>

)

export default Card

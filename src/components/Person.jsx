import PropTypes from "prop-types"

const Person = ( { id, name, role, img } ) => {
    return (
      <div className="col ">
        <div className="card" style={{width: "18rem;"}}>
          <img src={img} className="card-img-top img-huevo"/>
              <div className="card-body">
                  <h5 className="card-title">{ name }</h5>
                  <p className="card-text">{ role }</p>
              </div>
              <div>
                <button className="btn btn-success mx-2">
                    Editar
                </button>
                <button className="btn btn-danger mx-2">
                    Eliminar
                </button>
              </div>
          </div>
      </div>
    )
  }
  
  Person.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    role: PropTypes.string,
    img: PropTypes.string
  }

  export default Person
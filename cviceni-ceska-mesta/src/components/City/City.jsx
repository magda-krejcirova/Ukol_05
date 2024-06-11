import "./style.css"

export const City = ({name, population, area, photo, district}) => {
  return (
  <div className="city">
    <h2>{name}</h2>
      <img src={photo} alt={name}></img>
      <p>District: {district}</p>
      <p>Population: {population}</p>
      <p>Area: {area} sq.km</p>
    </div>)
  }
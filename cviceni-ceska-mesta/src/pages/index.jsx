import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { cities } from './cz-cities';
import { City } from '../components/City/city.jsx';

const CityElements = () => (
  <div>
    <h1>Česká města</h1>
    {cities.map((mesto) => (
      <City
        key={mesto.name}
        name={mesto.name}
        photo={mesto.photo}
        district={mesto.district}
        population={mesto.population} 
        area={mesto.area} />)
      )}
  </div>
)

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <CityElements />
  </div>
);

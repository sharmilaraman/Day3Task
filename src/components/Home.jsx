import React from 'react'
import XManimg from '../Images/XMan.jpg';
import XMan3img from '../Images/XMan3.webp';
import XMan4img from '../Images/XMan4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../components/Home.css';

;
const Home = () => {
  
  return (
    <div className='container'>
     <nav className='navbar'>
          <h1 className='logo'>BINGO</h1>
          <div className="search-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search" className="search-bar" />
        </div>
          <button className="logout-btn">Log Out</button>

     </nav>
     <div className='banner-section'>
     <div className="banner">
        <img src={XManimg} alt="Banner" className="banner-img" />
      </div>
      <div className="categories">
        <h2>
          Choose from tons of <span className="highlight">Categories</span> to
          Watch
        </h2>
        <div className="category-buttons">
          <button>Romantic</button>
          <button>Comedy</button>
          <button>Thriller</button>
          <button>Horror</button>
          <button>Action</button>
          <button>Emotional</button>
        </div>
      </div>
      </div>
      <section className="movies-section">
        <h2>Based on previous watch</h2>
        <div className="movies-list">
          <div className="movie-card">
            <img src={XManimg} alt="X-Man" />
            <p>X-Man</p>
            <span>69%</span>
          </div>
          <div className="movie-card">
            <img src={XMan4img}  alt="Aquaman" />
            <p>Aquaman</p>
            <span>69%</span>
          </div>
          <div className="movie-card">
            <img src={XMan3img}alt="Deadpool" />
            <p>Deadpool</p>
            <span>69%</span>
          </div>
          <div className="movie-card">
            <img src={XMan4img} alt="X-Man" />
            <p>X-Man</p>
            <span>69%</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

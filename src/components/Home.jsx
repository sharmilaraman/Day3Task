import React from 'react'
import XManimg from '../Images/XMan.jpg';
import XMan3img from '../Images/XMan3.webp';
import XMan4img from '../Images/XMan4.jpg';
import NewlyReleasedImg from '../Images/Newmovieimg.png';
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
          <div className='image-container'>
            <img src={XMan3img}alt="Deadpool" />
            <div className='movie-info'>
            <p>X-Man</p>
            <span>69%</span>
            </div>
          </div>
          </div>
          <div className="movie-card">
          <div className='image-container'>
            <img src={XMan4img}alt="Deadpool" />
            <div className='movie-info'>
            <p>X-Man</p>
            <span>69%</span>
            </div>
          </div>
          </div>
          <div className="movie-card">
            <div className='image-container'>
            <img src={XMan3img}alt="Deadpool" />
            <div className='movie-info'>
            <p>X-Man</p>
            <span>69%</span>
            </div>
          </div>
          </div>
          <div className="movie-card">
          <div className='image-container'>
            <img src={XManimg}alt="Deadpool" />
            <div className='movie-info'>
            <p>X-Man</p>
            <span>69%</span>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* newly released movies */}
      <section className="newly-released">
        <h2>Newly Released Movies</h2>
        <div className="newly-released-card">
          <img src={NewlyReleasedImg} alt="Newly Released Movies" />
        </div>
      </section>

      <footer className="copyright">
        <p>
          Copyright © Epsilon team. All Rights Reserved, Pesto. All contents and website codes.
          Copyright of Pesto Epsilon team and unfair use may lead to actions. All rights Reserved.
        </p>
      </footer>
    </div>
  )
}

export default Home

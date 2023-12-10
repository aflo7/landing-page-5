import { useState } from 'react';
import './App.css';
import Divider from '@mui/material/Divider';
import { IoSearch } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <div className="top-nav">
          <div className="left-nav">
            <img
              src="https://www.wrg-ins.com/images/default-source/site-images/wrg-logo.png"
              height="100px"
            />
            <h1>Recreation by Andres</h1>
          </div>
          <div className="right-nav">
            <div className="flex-with-gap-10">
              <div>Contact Us</div>
              <Divider orientation="vertical" variant="middle" flexItem />
              <div>Careers</div>
              <Divider orientation="vertical" variant="middle" flexItem />
              <div>Become an Agent</div>
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <div style={{ display: 'flex', gap: '10px' }}>
                <div className="top-nav-btn">Make a Payment</div>
                <div className="top-nav-btn">Make a Claim</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="top-nav-btn">Save With Simplisafe!</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="bottom-nav">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '1000px',
              padding: '10px 0px',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div style={{ display: 'flex', gap: '40px', fontSize: '1.2rem' }}>
              <div>CSS</div>
              <div>HTML</div>
              <div>Javascript</div>
              <div>About Us</div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
              <IoSearch size="1.5em" />
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-img">
        <IoIosArrowBack
          size="3rem"
          style={{ color: 'white', cursor: 'pointer' }}
        />
        <IoIosArrowForward
          size="3rem"
          style={{ color: 'white', cursor: 'pointer' }}
        />
      </div>

      <div className="form-wrapper">
        <div className="form-wrapper-inner">
          <div>
            <h2>Get A Quote</h2>
            <div>
              <p>Type of Personal Insurance</p>
              <input type="text" style={{ width: '100%' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button className="go-btn" type="button">
                Go!
              </button>
            </div>
          </div>

          <div>
            <h2>Find An Andres</h2>
            <div>
              <p>Postal Code</p>
              <input type="text" style={{ width: '100%' }} />
            </div>
            <div>
              <p>Within</p>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <input type="text" />
                <button className="go-btn" type="button">
                  Go!
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2>Agent Login</h2>
            <p>
              Click the GO button to login to the Agent Portal. You will be
              prompted for your credentials on the next screen.
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button className="go-btn" type="button">
                Go!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

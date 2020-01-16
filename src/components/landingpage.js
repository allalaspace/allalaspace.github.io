import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <p>Full Stack Developer</p>

              <hr />

              <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>
              <p>ASP NET | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>


              <Grid className="social-grid">
                <Cell col={2}>
                  {/* LinkedIn */}
                  <div className="social-links">
                    <a href="https://www.linkedin.com/in/mohamed-ali-boudich-90a44b55/" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>
                  </div>
                </Cell>
                <Cell col={2}>
                  {/* Github */}
                  <div className="social-links">
                    <a href="https://github.com/allalaspace?tab=repositories" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-github-square" aria-hidden="true" />
                    </a>
                  </div>
                </Cell>
              </Grid>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;

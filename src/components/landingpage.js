import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Logo from '../me.png';


class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={Logo}
              alt="avatar"
              className="avatar-img"
              />
            <div className="banner-text">
              <p>Full Stack Developer</p>

              <hr />
              <p>ASP NET | HTML/CSS |Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>


              <Grid className="social-grid">
                <Cell col={6}>
                  {/* LinkedIn */}
                  <div className="social-links">
                    <a href="https://www.linkedin.com/in/mohamed-ali-boudich-90a44b55/" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>
                  </div>
                </Cell>
                <Cell col={6}>
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

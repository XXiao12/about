import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import WrapperComponent from '../../components/Wrapper';
import profile_image from '../../img/profile_photo.png';

import './styles.css';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class About extends Component {
  render() {
    const { classes } = this.props;

    return (
      <WrapperComponent>
        <div className="about">
          <div className="about__container">
            <img className="about__profilephoto" src={profile_image} alt="profile" width="130px" />
            <div className="about__content">
              <div>
                <p>Hi there!</p>
                <p>I am a recent graduate from Queen's University with a B.A Honours in the Computing and Creative Arts Specialization. I have experience as a graphic designer and as a front-end developer. I love to build and design websites and apps with beautiful interfaces and meaningful user experiences.
                </p>
              </div>
            </div>

            <p>What I am up to...</p>
            <ul>
              <li>working part-time on contract with QoC Health Inc</li>
              <li>seeking a full-time job as a Web Designer / Developer</li>
              <li>continue to update and find ways to improve this portfolio site</li>
              <li>continue to take courses with IDF (<a href="https://www.interaction-design.org/" >Interactive Design Foundation</a>)</li>
            </ul>

            <p>Please email me at shirley.xiao1996@gmail.com or reach out to me on social media through the links below.</p>
          </div>
          <div className="about__links">
            <div className="about__header">
              <h2>You can also find me on</h2>
            </div>
            <div className="about__buttons">
              <Button
                variant="outlined"
                href="https://github.com/XXiao12"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                className={classes.button}>
                Github
            </Button>
              <Button
                variant="outlined"
                href="https://www.linkedin.com/in/shirley-xiao-b72335a7/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit" className={classes.button}>
                LinkedIn
            </Button>
              <Button
                variant="outlined"
                href="https://dribbble.com/shirley_x"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                className={classes.button}>
                Dribbble
            </Button>
            </div>
          </div>
        </div>
      </WrapperComponent>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);

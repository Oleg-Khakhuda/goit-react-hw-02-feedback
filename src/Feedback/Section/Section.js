import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

export default class Section extends Component {
  render() {
    return (
      <>
        <h2 className={s.title}>{this.props.title}</h2>
        {this.props.children}
      </>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

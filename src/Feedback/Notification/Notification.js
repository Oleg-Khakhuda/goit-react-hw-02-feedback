import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Notification.module.css';

export default class Notification extends Component {
  render() {
    return (
      <div className={s.notification}>
        <h2 className={s.notificationMessage}>{this.props.message}</h2>
      </div>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};

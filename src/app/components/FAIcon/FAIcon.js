import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { pascal } from 'case';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class FAIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      iconData: {},
    };
  }

  componentDidMount() {
    const { icon, set } = this.props;
    const iconName = `fa${pascal(icon)}`;

    import(`@fortawesome/${set}-svg-icons/${iconName}.js`)
      .then((iconData) => {
        this.setState({
          isLoaded: true,
          iconData: iconData[iconName],
        });
      })
      .catch(e => console.error(e)); // eslint-disable-line no-console
  }

  render() {
    const { isLoaded, iconData } = this.state;
    const { className, size } = this.props;
    return isLoaded
      ? (
        <FontAwesomeIcon
          icon={iconData}
          {...(className && { className })}
          size={size}
        />
      )
      : null;
  }
}

FAIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  set: PropTypes.oneOf(['free-regular', 'free-solid']),
  className: PropTypes.string,
  size: PropTypes.string,
};

FAIcon.defaultProps = {
  set: 'free-solid',
  className: '',
  size: '2x',
};

export default FAIcon;

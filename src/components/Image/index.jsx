import PropTypes from 'prop-types';
import React from 'react';

export function Image({
  mobileSource = '',
  regularSource,
  alt,
  width = 200,
  height = 200,
}) {
  return (
    <picture>
      <source srcSet={mobileSource} />
      <img width={width} height={height} src={regularSource} alt={alt} />
    </picture>
  );
}

Image.propTypes = {
  mobileSource: PropTypes.string,
  regularSource: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

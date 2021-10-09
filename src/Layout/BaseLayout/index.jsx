import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import './index.css';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
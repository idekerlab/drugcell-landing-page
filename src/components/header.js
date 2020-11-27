import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from '../components/image'
import './header.css'
import ccmi from '../images/ccmi2.png'

const Header = ({ siteTitle }) => (
  <header id='header'>
    <div id='headerContentDiv'>
    <a href='https://ccmi.org/' target='_blank' rel='noopener noreferrer'>
      <img src={ccmi} alt='CCMI Logo' id='ccmiLogo' />
    </a>
      <h1 id='headerContent'>
        <a 
          id='ucsdLink'
          className='externalLink'
          href='https://medschool.ucsd.edu/Pages/default.aspx' 
          target='_blank'
        >
          UC San Diego
        </a> 
        <a
          id='hyphenLink'
          className='externalLink'
          href='http://idekerlab.ucsd.edu'
          target='_blank'  
        >
          {' - '}
        </a>
        <a 
          id='idekerLink'
          className='externalLink'
          href='http://idekerlab.ucsd.edu'
          target='_blank'
        >
          Ideker Lab
        </a>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

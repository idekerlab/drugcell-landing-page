import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import cy3logo from '../images/cy3logoOrange.svg'
import SEO from '../components/seo'
import './index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="DrugCell" />
    <div id='topDivWrapper'>
      <div id='topDiv'>
        <div id='topDivContents'>
          <div id='titlesDiv'>
            <div id='titleDiv'>
              DrugCell
            </div>
            <div id='subtitleDiv'>
              Neural Net Predictions of Drug Response
            </div>
          </div>
          <div id='buttonsContainer'>
            <div id='buttonsDiv'>
              <div className='buttonDiv'>
                <form
                  target='_blank'
                  action='http://drugcell-oracle-dev.ndexbio.org/'
                >
                  <button type="submit">
                    <span className='buttonText'>
                      DrugCell Oracle
                    </span>
                  </button>
                </form>
              </div>
              
              <div className='buttonDiv'>
                <form
                  target='_blank' 
                  action="">
                  <button type="submit">
                    <span className='buttonText'>
                      Application B
                    </span>
                  </button>
                </form>
              </div>
              
              <div className='buttonDiv'>
                <form
                  target='_blank' 
                  action="">
                  <button type="submit">
                    <span className='buttonText'>
                      Application C
                    </span>
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div id='bottomDiv'>
      <div id='bottomTitle'>
        <div id='bottomTitleText'>
          What is DrugCell?
        </div>
      </div>
      <div id='bottomText'>
        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
      </div>
    </div>
    
    
    
    {/*<h1>Project Name</h1>
    <p>(You can add any contents here).</p>
    <p>Now go build something great.</p>
    <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
      <img src={cy3logo} />
    </div>
    <h2>Main contents</h2>
    <ul>
      <li>
        <Link to="/docs/doc1">Document written in Markdown</Link>
      </li>
    </ul>*/}
  </Layout>
)

export default IndexPage

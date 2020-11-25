import React from 'react'
import { Link } from 'gatsby'

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
                  action='http://drugcell.ucsd.edu/oracle/'
                >
                  <button type="submit">
                    <div className='buttonText'>
                      DrugCell Oracle
                    </div>
                    <div className='buttonCaption'>
                      Browse VNN Predictions
                    </div>
                  </button>
                </form>
              </div>

            
              <div className='buttonDiv'>
                <form
                  target='_blank' 
                  action="http://drugcell.ucsd.edu/analyze/finddrugs/">
                  <button type="submit">
                    <div className='buttonText'>
                      Find Drugs
                    </div>
                    <div className='buttonCaption'>
                      Analyze a genome using DrugCell
                    </div>
                  </button>
                </form>
              </div>

              <div className='buttonDiv'>
              <form
                  target='_blank' 
                  action="http://drugcell.ucsd.edu/analyze/findcells/">
                  <button type="submit">
                    <div className='buttonText'>
                      Find Cells
                    </div>
                    <div className='buttonCaption'>
                      Analyze a drug using DrugCell
                    </div>
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
        {"While deep learning framework has been applied to predict cellular response to cancer therapies, a fundamental problem of being a “black-box” has not yet been fully addressed. To build an interpretable deep learning-based model, we developed DrugCell, a \“visible\” neural network that predicts anti-cancer drug responses by modeling the hierarchical organization of a human cancer cell. During the training phase, genotypes and compound structures induce differential patterns of subsystem activity, enabling in silico investigations of the molecular mechanisms underlying cancer drug response which is crucial to the novel drug discovery and better implementation of precision medicine."}
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

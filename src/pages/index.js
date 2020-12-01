import React from 'react'
import { Link } from 'gatsby'
import LinkOut from '../components/LinkOut';
import Layout from '../components/layout'
import Panel from '../components/panel'
import cy3logo from '../images/cy3logoOrange.svg'
import SEO from '../components/seo'
import './index.css'

import styles from './pageStyles/index.module.css';

const contrastBackgroundColor = 'rgba(65,182,255, 0.25)';
const contrastTextColor = 'black';

const IndexPage = () => (
  <Layout>
    <SEO title="DrugCell" />
    <div id='topDivWrapper'>
      <div id='topDiv'>
        <div id='topDivContents'>
          <div id='titlesDiv'>
            <div id='titleDiv'>
              DrugCell Oracle
            </div>
            <div id='subtitleDiv'>
              Interpretable Deep Learning for Drug Response<br></br>
              via Visible Neural Networks
            </div>
          </div>
          <div id='buttonsContainer'>
            <div id='buttonsDiv'>
              <div className='buttonDiv'>
                <form
                  method='post'
                  target='_blank'
                  action='http://drugcell.ucsd.edu/findpathways/'
                >
                  <button type="submit">
                    <div className='buttonText'>
                      VNN Browser
                    </div>
                    <div className='buttonCaption'>
                      Browse DrugCell predictions for synergistic drug targets
                    </div>
                  </button>
                </form>
              </div>


              <div className='buttonDiv'>
                <form
                  method='post'
                  target='_blank'
                  action="http://drugcell.ucsd.edu/analyze/finddrugs/">
                  <button >
                    <div className='buttonText'>
                      Genotype Analyzer
                    </div>
                    <div className='buttonCaption'>
                      Simulate response of genotype to drugs
                    </div>
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  {/* old version of bottom texts
    <div id='bottomDiv'>
      <div id='bottomTitle'>
        <div id='bottomTitleText'>
          What is DrugCell?
        </div>
      </div>
      <div id='bottomText'>
        <p> While deep learning framework has been applied to predict cellular response to cancer therapies, a fundamental problem of being a “black-box” has not yet been fully addressed. To build an interpretable deep learning-based model, we developed DrugCell, a \“visible\” neural network (VNN) that predicts anti-cancer drug responses by modeling the hierarchical organization of a human cancer cell. During the training phase, genotypes and compound structures induce differential patterns of subsystem activity, enabling in silico investigations of the molecular mechanisms underlying cancer drug response which is crucial to the novel drug discovery and better implementation of precision medicine. </p>

          <p>Please cite the following when utilizing this application in your study:</p>
          <ul>
          <li>Kuenzi BM, Park J, Fong SH, Sanchez KS, Lee J, Kreisberg JF, Ma J, Ideker T. Predicting drug response and synergy using a deep learning model of human cancer cells. Cancer Cell. 2020 Nov 9;38(5):672-84. </li>
         
          <li>Ma J, Yu MK, Fong S, Ono K, Sage E, Demchak B, Sharan R, Ideker T. Using deep learning to model the hierarchical structure and function of a cell. Nature methods. 2018 Apr;15(4):290.</li>
        </ul>
      </div>
    </div>
  */}
            
    <div className={styles.flexChild}>
        <Panel backgroundColor='white' textColor='rgba(0, 0, 0, 0.8)'>  
        <h2>What is DrugCell?</h2>
        <p> While deep learning framework has been applied to predict cellular response to cancer therapies, 
            a fundamental problem of being a “black-box” has not yet been fully addressed. To build an interpretable deep learning-based model, 
            we developed DrugCell, a “visible” neural network (VNN) that predicts anti-cancer drug responses by modeling the hierarchical 
            organization of a human cancer cell. During the training phase, genotypes and compound structures induce differential patterns of 
            subsystem activity, enabling in silico investigations of the molecular mechanisms underlying cancer drug response which is crucial 
            to the novel drug discovery and better implementation of precision medicine.
        </p>
        </Panel>

        <Panel backgroundColor={contrastBackgroundColor} textColor={contrastTextColor}>
        <h2>Code Availability</h2>
        <p>
            The codebase for training a DrugCell model along with instructions to set up the required computational environment is published in 
            a GitHub repository. The Github repository also contains a pre-trained DrugCell model that we used our analysis and example command lines. 
            The DrugCell GitHub repository can be found at: <br/>
            <LinkOut link='https://github.com/idekerlab/DrugCell'>
                https://github.com/idekerlab/DrugCell
            </LinkOut>
        </p>
        </Panel>
      
        <Panel backgroundColor={'white'} textColor={contrastTextColor}>
        <h2>Publications</h2>
          <p> Please cite the following when utilizing this application in your study:
          <ul>
          <li>Kuenzi BM, Park J, Fong SH, Sanchez KS, Lee J, Kreisberg JF, Ma J, Ideker T. Predicting drug response and synergy using a deep learning model of human cancer cells. Cancer Cell. 2020 Nov 9;38(5):672-84. </li>
          <li>Ma J, Yu MK, Fong S, Ono K, Sage E, Demchak B, Sharan R, Ideker T. Using deep learning to model the hierarchical structure and function of a cell. Nature methods. 2018 Apr;15(4):290.</li>
          <li></li>
          </ul>
          </p>
        </Panel>
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

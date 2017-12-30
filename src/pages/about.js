import React from 'react'
import Link from 'gatsby-link'

import Me from '../images/me.png'

// icons
import ReactIcon from '../images/about-icons/react.png'
import ReactNativeIcon from '../images/about-icons/react-native.png'
import WPIcon from '../images/about-icons/wordpress.png'
import NodeIcon from '../images/about-icons/node.png'
import PolymerIcon from '../images/about-icons/polymer.png'
import PhaserIcon from '../images/about-icons/phaser_logo.png'
import JavascriptIcon from '../images/about-icons/javascript.png'
import Phenomiclogo from '../images/about-icons/phenomic.svg'
import Hexologo from '../images/about-icons/hexo-logo.png'
import Jekylllogo from '../images/about-icons/jekyll.png'
import PHPlogo from '../images/about-icons/php.png'
import Unitylogo from '../images/about-icons/unity-logo.png'
import AdobeIllustratorlogo from '../images/about-icons/adobe-illustrator-cc.svg'
import AdobeAfterEffectslogo from '../images/about-icons/after-effects-cc.svg'
import AdobePhotoshoplogo from '../images/about-icons/photoshop-cc.svg'
import AdobeInDesignlogo from '../images/about-icons/indesign-cc.svg'
import AdobePremierePrologo from '../images/about-icons/premiere-cc.svg'
import AffinityDesignerlogo from '../images/about-icons/affinity-designer.png'
import AffinityPhotologo from '../images/about-icons/affinity-photo.png'
import RaspberryPilogo from '../images/about-icons/raspberry-pi-logo.png'
import ArduinoLogo from '../images/about-icons/arduino-logo.png'
import FirebaseLogo from '../images/about-icons/firebase.png'
import VueLogo from '../images/about-icons/Vue.js_Logo.svg'
import GatsbyLogo from '../images/about-icons/gatsby.svg'
import MongoDBLogo from '../images/about-icons/mongodb-logo.jpg'
import ExpressLogo from '../images/about-icons/express.png'
import HTMLCSSIcon from '../images/about-icons/html-css-logos.png'

const AboutPage = () => (
  <div className="about-page">
    <div className="grid grid--gutters reverse-sm">
      <div className="grid-cell">
        <h1>✌️ Hey, I'm Josh.</h1>
        <p>I program things for the web, virtual reality, the real world. <span className="text-blue" style={{fontWeight: 'bold'}}>JavaScript</span> is my jam, but I speak <a href="#tech">other languages</a> too.</p>

        <p><a href="https://github.com/8ctopotamus" target="_blank">Check out my github</a> to see some code.</p>

        <p>Want to know more?</p>

        <Link to="/projects/"
              className="btn btn-blue"
              style={{marginRight: 14, marginBottom: 14}}>
              See projects
        </Link>
        <Link to="/contact/"
              className="btn btn-green"
              style={{marginBottom: 14}}>
            Contact</Link>
      </div>
      <div className="grid-cell josh-melodica-cell">
        <div className="josh-melodica-wrap"></div>
      </div>
    </div>

    <hr/>

    <h3 style={{marginTop: 50}}>What I can do for you</h3>
    <ul style={{columnCount: 3}}>
      <li>WordPress themes</li>
      <li>WordPress plugins</li>
      <li>Static sites</li>
      <li>(Progressive) web apps</li>
      <li>React Native (Android/iOS)</li>
      <li>Graphics</li>
      <li>Email</li>
      <li>Video editing</li>
      <li>Animation</li>
      <li>Mobile Games</li>
      <li>Virtual Reality</li>
      <li>3D Games</li>
      <li>Music</li>
    </ul>

    <h2 className="sr-only">Technologies</h2>
    <div id="tech" className="about-icons">
      <a href="https://facebook.github.io/react/" target="_blank" title="React">
        <img src={ReactIcon} alt="React logo" />
        <span>React</span>
      </a>
      <a href="https://facebook.github.io/react-native/" target="_blank" title="React Native">
        <img src={ReactNativeIcon} alt="React Native logo" />
        <span>React Native</span>
      </a>
      <a href="https://vuejs.org/" target="_blank" title="Vue">
        <img src={VueLogo} alt="Vue logo" />
        <span>Vue</span>
      </a>
      <a href="https://wordpress.org/" target="_blank" title="WordPress">
        <img className="white-bkgd" src={WPIcon} alt="WordPress logo" />
        <span>WordPress</span>
      </a>
      <a href="https://nodejs.org/en/" target="_blank" title="Javascript">
        <img className="white-bkgd" src={NodeIcon} alt="NodeJS logo" />
        <span>NodeJS</span>
      </a>
      <a href="https://www.polymer-project.org/" target="_blank" title="Polymer">
        <img src={PolymerIcon} alt="Polymer logo" />
        <span>Polymer</span>
      </a>
      <a href="https://phaser.io/" target="_blank" title="Phaser">
        <img className="white-bkgd" src={PhaserIcon} alt="Phaser logo" />
        <span>Phaser</span>
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" title="Javascript">
        <img src={JavascriptIcon} alt="Javascript logo" />
        <span>JavaScript</span>
      </a>
      <a href="https://www.w3schools.com/" target="_blank" title="HTML/CSS">
        <img src={HTMLCSSIcon} alt="HTML/CSS logo" />
        <span>HTML/CSS</span>
      </a>
      <a href="https://www.gatsbyjs.org/" target="_blank" title="Gatsby">
        <img className="white-bkgd" src={GatsbyLogo} alt="Gatsby logo" />
        <span>Gatsby</span>
      </a>
      <a href="https://jekyllrb.com/" target="_blank" title="Jekyll">
        <img src={Jekylllogo} alt="Jekyll logo" />
        <span>Jekyll</span>
      </a>
      <a href="https://secure.php.net/" target="_blank" title="PHP">
        <img src={PHPlogo} alt="PHP logo" />
        <span>PHP</span>
      </a>
      <a href="https://unity3d.com/" target="_blank" title="Unity">
        <img className="white-bkgd" src={Unitylogo} alt="Unity logo" />
        <span>Unity</span>
      </a>
      <a href="https://www.mongodb.com/" target="_blank" title="Express">
        <img className="white-bkgd" src={ExpressLogo} alt="Express logo" />
        <span>Express</span>
      </a>
      <a href="https://www.mongodb.com/" target="_blank" title="MongoDB">
        <img className="white-bkgd" src={MongoDBLogo} alt="Mongo DB logo" />
        <span>MongoDB</span>
      </a>
      <a href="https://www.adobe.com/products/illustrator.html" target="_blank" title="Adobe Illustrator">
        <img src={AdobeIllustratorlogo} alt="Adobe Illustrator logo" />
        <span>Illustrator</span>
      </a>
      <a href="https://www.adobe.com/products/aftereffects.html" target="_blank" title="Adobe After Effects">
        <img src={AdobeAfterEffectslogo} alt="Adobe After Effects logo" />
        <span>After Effects</span>
      </a>
      <a href="https://www.adobe.com/products/photoshop.html" target="_blank" title="Adobe Photoshop">
        <img src={AdobePhotoshoplogo} alt="Adobe Photoshop logo" />
        <span>Photoshop</span>
      </a>
      <a href="https://www.adobe.com/products/indesign.html" target="_blank" title="Adobe InDesign">
        <img src={AdobeInDesignlogo} alt="Adobe InDesign logo" />
        <span>InDesign</span>
      </a>
      <a href="https://www.adobe.com/products/premiere.html" target="_blank" title="Adobe Premiere Pro">
        <img src={AdobePremierePrologo} alt="Adobe Premiere Pro logo" />
        <span>Premiere Pro</span>
      </a>
      <a href="https://affinity.serif.com/en-us/designer/" target="_blank" title="Affinity Designer">
        <img src={AffinityDesignerlogo} alt="Affinity Designer" />
        <span>Affinity Designer</span>
      </a>
      <a href="https://affinity.serif.com/en-us/photo/" target="_blank" title="Affinity Photo">
        <img src={AffinityPhotologo} alt="Affinity Photo logo" />
        <span>Affinity Photo</span>
      </a>
      <a href="https://www.raspberrypi.org/" target="_blank" title="Raspberry Pi">
        <img src={RaspberryPilogo} alt="Raspberry Pi logo" />
        <span>Raspberry Pi</span>
      </a>
      <a href="https://www.arduino.cc/" target="_blank" title="Arduino">
        <img src={ArduinoLogo} alt="Arduino logo" />
        <span>Arduino</span>
      </a>
    </div>
  </div>
)

export default AboutPage

import React from 'react'
import Link from 'gatsby-link'

// icons
import ReactIcon from '../assets/images/about-icons/react.png'
import ReactNativeIcon from '../assets/images/about-icons/react-native.png'
import WPIcon from '../assets/images/about-icons/wordpress.png'
import NodeIcon from '../assets/images/about-icons/node.png'
import PolymerIcon from '../assets/images/about-icons/polymer.png'
import PhaserIcon from '../assets/images/about-icons/phaser_logo.png'
import JavascriptIcon from '../assets/images/about-icons/javascript.png'
import Phenomiclogo from '../assets/images/about-icons/phenomic.svg'
import Hexologo from '../assets/images/about-icons/hexo-logo.png'
import Jekylllogo from '../assets/images/about-icons/jekyll.png'
import PHPlogo from '../assets/images/about-icons/php.png'
import Unitylogo from '../assets/images/about-icons/unity-logo.png'
import AdobeIllustratorlogo from '../assets/images/about-icons/adobe-illustrator-cc.svg'
import AdobeAfterEffectslogo from '../assets/images/about-icons/after-effects-cc.svg'
import AdobePhotoshoplogo from '../assets/images/about-icons/photoshop-cc.svg'
import AdobeInDesignlogo from '../assets/images/about-icons/indesign-cc.svg'
import AdobePremierePrologo from '../assets/images/about-icons/premiere-cc.svg'
import AffinityDesignerlogo from '../assets/images/about-icons/affinity-designer.png'
import AffinityPhotologo from '../assets/images/about-icons/affinity-photo.png'
import RaspberryPilogo from '../assets/images/about-icons/raspberry-pi-logo.png'

const AboutPage = () => (
  <div>
    {/* <h1>Making neat things with since 2014.</h1> */}
    <div className="row">
      <div className="col">
        <h3>What I can do for you</h3>
        <ul>
          <li>WordPress themes</li>
          <li>WordPress plugins</li>
          <li>Static sites</li>
          <li>Web Apps (with progressive enhancements)</li>
          <li>Android + iOS Apps (I use React Native)</li>
          <li>Graphics and logos</li>
          <li>Email design</li>
          <li>Video editing</li>
          <li>Animation</li>
          <li>Mobile Games</li>
          <li>Hosting</li>
        </ul>
      </div>
      <div className="col">
        <h3>References</h3>
        <ul>
          <li>In-house Computer Services (ICS)</li>
          <li>RealWealth</li>
          <li>Rebel Green</li>
          <li>Justine Fit</li>
          <li>Direct Supply</li>
          <li>Oranj</li>
          <li>Aztalan Engineering, Inc</li>
          <li>Newport Network Solutions, Inc</li>
          <li>New Sky Websites</li>
          <li>Creative Circle</li>
          <li>LiFE of HOPE</li>
          <li>Hope Center WI</li>
        </ul>
      </div>
    </div>

    <h2>Technologies</h2>
    <div className="about-icons">
      <a href="https://facebook.github.io/react/" target="_blank" title="React">
        <img src={ReactIcon} alt="React logo" />
        <span>React</span>
      </a>
      <a href="https://facebook.github.io/react-native/" target="_blank" title="React Native">
        <img src={ReactNativeIcon} alt="React Native logo" />
        <span>React Native</span>
      </a>
      <a href="https://wordpress.org/" target="_blank" title="WordPress">
        <img className="white-bkgd" src={WPIcon} alt="WordPress logo" />
        <span>WordPress, Custom WP themes + plugins</span>
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" title="Javascript">
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
      <a href="https://phenomic.io/" target="_blank" title="Phenomic">
        <img className="white-bkgd" src={Phenomiclogo} alt="Phenomic logo" />
        <span>Phenomic</span>
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
        <img src="../assets/images/about-icons/affinity-designer.png" alt={AffinityDesignerlogo} />
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
    </div>


  </div>
)

export default AboutPage

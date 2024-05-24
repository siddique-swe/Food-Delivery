import React from 'react'
import './FooTer.css'
import { assets } from '../../assets/assets'
const FooTer = () => {
  return (
    <div className="footer" id="footer">
    <div className="footer-content">
        <div className="footer-content-left">
            <img className='footer-logo' src={assets.logo} alt="" />
            <p>At Eat&Enjoy, we bring together the best of Indian and Chinese cuisine to tantalize your taste buds. Our passion for culinary excellence and commitment to quality ensures every meal is a memorable experience. Whether you're dining in or ordering online, we're dedicated to providing you with delicious food and exceptional service.</p>
          <div className="footer-social-icons">
            <img src= {assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
        <h2>COMPANY</h2>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </div>
      <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
            <ul>
                <li>+88018-29053089</li>
                <li>siddique.swe@gmail.com</li>
            </ul>

      </div>
    </div>
    <hr />
    <p className='footer-copyright'>© 2024 Eat&Enjoy. All Rights Reserved.</p>
</div>
  )
}

export default FooTer

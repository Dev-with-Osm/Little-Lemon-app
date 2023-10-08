import React from 'react'

const Footer = () => {
  return (
    <footer class="section-p1">
        <div class="col">
            <img  src="/assets/image/logo.png" alt=""/>
            <h4>Contact</h4>
            <p><strong>Address: </strong> Centre commercial ACIMA ,boulevard massira 3, marrakech</p>
            <p><strong>Phone:</strong> 63 7118 961 /(+212) 69 9844 879</p>
            <p><strong>Hours:</strong>09:00 - 00:00, Mon - Sat </p>
            <div class="follow">
                <h4>Follow us</h4>
                <div class="icon">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-pinterest-p"></i>
                    <i class="fab fa-youtube"></i>
                </div>
            </div>
        </div>
        <div class="col">
            <h4>About</h4>
            <a href="#">About us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact us</a>
        </div>
        <div class="col">
            <h4>My Account</h4>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
        </div>
        <div class="copyright">
            <p>
                © 2023 Little Lemon, Inc. All Rights Reserved</p>
        </div>

    </footer>

  )
}

export default Footer
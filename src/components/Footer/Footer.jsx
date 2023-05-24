import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
        <h1>Links</h1>
          <span>Women</span>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
          
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto quasi natus ratione culpa neque nisi placeat, totam quia eos at nam quaerat veritatis ipsum ducimus deserunt porro molestiae quas?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptatem saepe veniam ab sequi dolorem fugit voluptatum, suscipit quibusdam laboriosam velit iste fugiat eligendi quidem nobis ipsa possimus illo voluptas.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>fameSTORE</span>
          <span className='copyright'>Made with ❤️ by Yaga Baba</span>
        </div>
        <div className="right">
          <img src='/img/payment.png' alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Footer
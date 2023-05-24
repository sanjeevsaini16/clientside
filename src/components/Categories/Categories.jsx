import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'

const Categories = () => {
    return (
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img src='https://images.pexels.com/photos/3056059/pexels-photo-3056059.jpeg' alt=''/>
                <button>
                    <Link className='link' to="/products/1">Sale</Link>
                </button>
                </div>
                <div className="row">
                <img src='https://images.pexels.com/photos/1877736/pexels-photo-1877736.jpeg' alt=''/>
                <button>
                    <Link className='link' to="/products/1">Women</Link>
                </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                <img src='https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg' alt=''/>
                <button>
                    <Link className='link' to="/products/1">Men</Link>
                </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                        <img src='https://images.pexels.com/photos/6594253/pexels-photo-6594253.jpeg' alt=''/>
                <button>
                    <Link className='link' to="/products/1">Shoes</Link>
                </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                        <img src='https://images.pexels.com/photos/1377179/pexels-photo-1377179.jpeg' alt=''/>
                <button>
                    <Link className='link' to="/products/1">Accessories</Link>
                </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                <img src='https://images.pexels.com/photos/4307689/pexels-photo-4307689.jpeg' alt=''/>
                <button>
                    <Link className='link' to="/products/1">Ethnic</Link>
                </button>
                </div>
            </div>
        </div>
    )
}

export default Categories
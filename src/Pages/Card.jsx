import React from 'react'
import './Style.css'

const Card = ({ item }) => {
    return (
        <div className="category-card p-4 mb-4 text-center border rounded ">
            {/* Icon Wrapper: Limits the size of your large PNGs */}
            <div className="icon-wrapper mb-4">
                <img
                    src={item?.img}
                    alt={item?.title}
                    style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
            </div>

            <div className="card-content">
                <h5 className="card-title fw-bold" style={{ color: '#003366', transition: '0.3s' }}>
                    {item.title}
                </h5>
                <p className="card-text" style={{ color: '#ff1e6d', fontWeight: '500', transition: '0.3s' }}>
                    {item.subtitle}
                </p>
            </div>
        </div>
    )
}

export default Card

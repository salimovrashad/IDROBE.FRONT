import React from 'react'

const FilterSec = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-3">
            <div className="container-fluid">
                <button className="navbar-toggler menu-icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon " />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav category">
                        <li className="nav-item">
                            <div className="nav-link cursor"></div>
                        </li>
                    </ul>
                </div>
                <ul className='navbar-nav'>
                    <li className='nav-link cursor'>Sort by Price(high-low)</li>
                    <li className='nav-link cursor'>Sort by Price(low-high)</li>
                </ul>
            </div>
        </nav>
    )
}

export default FilterSec
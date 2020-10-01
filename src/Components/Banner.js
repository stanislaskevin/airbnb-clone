import React , { useState } from 'react'
import { Button } from '@material-ui/core'
import Search from './Search'
import './Banner.css'

function Banner() {
    const [showSearch, setShowSearch] = useState(false)

    return (
        <div className="banner">
            <div className="banner_search">
                {showSearch && <Search />}
                <Button onClick={() => setShowSearch(!showSearch)}
                    className="banner_searchButton"
                    variant="outlined"
                >
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className="banner_info">
                <h1>
                    Get out and stretch your immagination
                </h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <Button
                    onClick={() => setShowSearch(!showSearch)} 
                    className="banner_searchButton"
                    variant="outlined"
                >
                    Bouton deux 
                </Button>
                {showSearch && <Search />}
            </div>
        </div>
    )
}

export default Banner

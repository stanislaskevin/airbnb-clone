import React from 'react'
import './SearchPage.css'
import SearchResult from '../Components/SearchResult'
import { Button } from '@material-ui/core'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_info">
                <p>62 stays • 2 novembre to 30 novembre • 2 guest</p>
                <h1>Stays nearby</h1>
                <Button
                variant="outlined">Cancellation Flexibility</Button>
                <Button
                variant="outlined">Type of place</Button>
                <Button
                variant="outlined">Price</Button>
                <Button
                variant="outlined">Rooms and beds</Button>
                <Button
                variant="outlined">More filters</Button>
            </div>
            <SearchResult 
                img="https://a0.muscache.com/im/pictures/6b510592-2a8f-4301-835b-e8fffafc627b.jpg?im_w=720"
                location="Private room in center of London"
                title="Stay at this spacious Villa Creole"
                description="1 bed • 1.5 shared bethrooms • wifi • kitchen• Free parking • Washing Machine"
                start={4.73}
                price="€30\night"
                total="€117 total"
            />
            <SearchResult 
                img="https://a0.muscache.com/im/pictures/6b510592-2a8f-4301-835b-e8fffafc627b.jpg?im_w=720"
                location="Private room in center of London"
                title="Stay at this spacious Villa Creole"
                description="1 bed • 1.5 shared bethrooms • wifi • kitchen• Free parking • Washing Machine"
                start={4.73}
                price="€30\night"
                total="€117 total"
            />
            <SearchResult 
                img="https://a0.muscache.com/im/pictures/6b510592-2a8f-4301-835b-e8fffafc627b.jpg?im_w=720"
                location="Private room in center of London"
                title="Stay at this spacious Villa Creole"
                description="1 bed • 1.5 shared bethrooms • wifi • kitchen• Free parking • Washing Machine"
                start={4.73}
                price="€30\night"
                total="€117 total"
            />
            <SearchResult 
                img="https://a0.muscache.com/im/pictures/6b510592-2a8f-4301-835b-e8fffafc627b.jpg?im_w=720"
                location="Private room in center of London"
                title="Stay at this spacious Villa Creole"
                description="1 bed • 1.5 shared bethrooms • wifi • kitchen• Free parking • Washing Machine"
                start={4.73}
                price="€30\night"
                total="€117 total"
            />
            <SearchResult 
                img="https://a0.muscache.com/im/pictures/6b510592-2a8f-4301-835b-e8fffafc627b.jpg?im_w=720"
                location="Private room in center of London"
                title="Stay at this spacious Villa Creole"
                description="1 bed • 1.5 shared bethrooms • wifi • kitchen• Free parking • Washing Machine"
                start={4.73}
                price="€30\night"
                total="€117 total"
            />
            <SearchResult 
                img="https://a0.muscache.com/im/pictures/6b510592-2a8f-4301-835b-e8fffafc627b.jpg?im_w=720"
                location="Private room in center of London"
                title="Stay at this spacious Villa Creole"
                description="1 bed • 1.5 shared bethrooms • wifi • kitchen• Free parking • Washing Machine"
                start={4.73}
                price="€30\night"
                total="€117 total"
            />
        </div>
    )
}

export default SearchPage

import React from "react"

class Header extends React.Component {
    render() {
        const title = "Book Recommendations"
        return(
            <div>
                <h1>{title}</h1>
                <h2>Find a book to rate.</h2>
            </div>
        )
    }

}

export default Header
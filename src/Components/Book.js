import React from 'react';
import config from '../config';

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          rank: 0,
          title: "",
          author: "",
          book_image: "",
          amazon_product_url: ""
        };
    }

    URL = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=';
    mykey = config.MY_KEY;
}

export default Book
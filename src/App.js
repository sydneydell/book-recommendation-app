import React from 'react';
import './styles.css';
import logo from './img/logo.jpg';

function App() {
    return (
        <div>
            <nav class="navbar">
                <ul class="nav-list">
                    <div class="logo">
                        <img src = {logo} alt="logo"/>
                    </div>
                    <li>
                        <a href="#User Profile">User</a>
                    </li>
                    <li>
                        <a href="#Reading History">Reading History</a>
                    </li>
                </ul>
            </nav>
        
            <div className="new-rating">
                <AddRatingButton />
            </div>

            <div className="reading-history">
                <GetReadingHistory />
            </div>
        </div>
    );
}

function AddRatingButton() {
    return(
        <button className="add-rating-button">
            <span className="plus-sign">+</span> Add a new rating
        </button>
    );
}

function GetReadingHistory() {
    return (
        <div>
            <h2>Reading History</h2>
            <p>You haven't rated any books yet</p>
        </div>
    );
}

export default App
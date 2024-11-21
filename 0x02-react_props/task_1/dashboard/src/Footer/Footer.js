import React from 'react';
import logo from '../assets/holberton-logo.jpg'; // Assuming you're using the logo somewhere
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

export default function Footer() {
    // Get current year and footer copy text
    const year = getFullYear();
    const footerText = getFooterCopy(false); // or true, depending on the condition you want

    return (
        <footer className="App-footer">
            <p>Copyright {year} - {footerText}</p>
        </footer>
    );
}

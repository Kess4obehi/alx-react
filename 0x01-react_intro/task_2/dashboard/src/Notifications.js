import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import close from './close-icon.png';

export default function Notifications() {

    const styles = {
        position: 'relative',
        left: '1175px',
        bottom: 'none',
        background: 'transparent'
    };

    const handleClose = () => {
        console.log('Close button has been clicked');
      };

    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <button style={styles} aria-label="Close" onclick={handleClose}>
                <img src={close} alt="Close" width="10px"/>
            </button>
            <ul>
            <li data-priority="default">New course available</li>
            <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{__html: notification}}></li>
            </ul>
        </div>
    );
}
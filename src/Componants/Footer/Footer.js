import React from 'react';


const styles = {
    backgroundColor: '#111318',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    fontFamily: 'Montserrat, sans-serif',
    color: 'grey',
    paddingBottom: '10px',
    textAlign: 'center',
    paddingTop: '20px'
}

const Footer = () => {
    return (
        <div style={styles}>
            <p>Designed by SarwarPutul © SMSP Studio 2021 All right reserved</p>
        </div>
    );
};

export default Footer;
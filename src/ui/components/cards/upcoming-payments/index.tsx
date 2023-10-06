import React from 'react';
import ServerImage from '../assets/images/server.png';
import Image from 'next/image';

const UpcomingPayments = () => {
  return (
    <main className='upcoming-payments' >
      <div className='main-content'>
        <header>Upcoming Payments</header>
        <Image src={ServerImage} alt='ServerImage' />
        <footer>$1065.83</footer>
      </div>
      <button className='button-secondary'>Pay Now</button>
    </main>
  );
};
export default UpcomingPayments;

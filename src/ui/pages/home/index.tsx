import React, { useState, useEffect } from 'react';
import apiService from '@/services/apiservice';

export default function About() {
    const [hello, setHello] = useState<string>('');
  useEffect(() => {
    const fetchData = async () => {
        apiService.api.getHello().then(
            (res) => {
                console.log(res)
                setHello(res.data.name)
          }
      );
    };
    fetchData();
  }, []);

  return (
    <div className='h-screen w-screen bg-gray-900'>
      <span className='text-white p-8'>hello</span>
      <span className='text-white p-8'>hello</span>
      <p className='mt-16 text-white p-8'>{`This is Home page!${hello}`}</p>
    </div>
  );
}

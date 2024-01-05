import React, { useEffect } from 'react';
import { Axios } from '../App';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Successpay = () => {
  const navigate = useNavigate();



  useEffect(() => {
    
  let isSuccess = true;
  const successData = async () => {
    try {
      const response = await Axios.get('/api/users/payment/success');
      if (response.status === 200 && isSuccess) {
        toast.success('Payment successful')
        navigate('/')
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }

  }
    const timeoutId = setTimeout(successData, 3000);

    return () => {
      isSuccess = false;
      clearTimeout(timeoutId);
    };
  

  },[]);

  return (
    <div className="payment-success d-flex justify-content-md-center">
      <img
        src="https://cdn.dribbble.com/users/253392/screenshots/6906291/check.gif"
        alt="Success"
      />
    </div>
  );
};

export default Successpay

import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '../context/appContext';
import iconClose from '../assets/icons/icon_close.png';
import styles from '../styles/OrderItem.module.scss';

const OrderItem = (props) => {
  const { item, indexValue } = props;
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (index) => {
    removeFromCart(index);
  };

  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image src={item?.images[0]} width={50} height={50} alt={item?.title} />
      </figure>
      <p>{item?.title}</p>
      <p>${item?.price}</p>
      <Image src={iconClose} width={20} height={20} alt="close" onClick={() => handleRemove(indexValue)} />
    </div>
  );
};

export default OrderItem;

import React from 'react';

import styles from './Modal.module.scss';
import Cross from "../Cross/Cross";

const Modal = ({ products, countable, modalTitle, onClose, onRemove, onChangeCount }) => {
  const total = products.reduce((sum, cur) => {
    return sum + cur.price * (cur.count || 1);
  }, 0)

  const onClickOutside = ({target, currentTarget}) => {
    if (target === currentTarget) {
      onClose();
    }
  }

  return (
    <div className={styles.wrapper} onClick={onClickOutside}>
      <div className={styles.modal}>
        <div className={styles.modal_header}>
          <div className={styles.modalTitle}>{ modalTitle }</div>
          <div onClick={onClose}>
            <Cross />
          </div>
        </div>
        <div className={styles.content}>
          {products.length === 0 &&
            <div>{modalTitle} is empty!</div>
          }
          {products.map((product) =>
            <div className={styles.product} key={product.id}>
              <img src={product.imageUrl} alt="img" />
              <div className={styles.title}>{ product.title }</div>
              <div className={styles.price}>${ product.price }</div>
              {countable && (
                <div className={styles.count}>
                  <div
                    className={styles.minus}
                    onClick={() => onChangeCount({id: product.id, count: product.count - 1})}
                  >-</div>
                  <div>{ product.count }</div>
                  <div
                    className={styles.plus}
                    onClick={() => onChangeCount({id: product.id, count: product.count + 1})}
                  >+</div>
                </div>
              )}
              <div onClick={() => onRemove(product.id)}>
                <Cross className={styles.delete}/>
              </div>
            </div>
          )}
          {products.length ? <div>Total: ${total}</div> : null}
        </div>
      </div>
    </div>
  );
};

export default Modal;

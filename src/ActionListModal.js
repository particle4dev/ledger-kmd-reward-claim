import React from 'react';
import Modal from './Modal';
import Boolean from './Boolean';
import './ActionListModal.scss';

const ActionListModal = ({actions = [], ...modalProps}) => (
  <div className="ActionListModal">
    <Modal {...modalProps}>
      <div className="panel">
        {Object.keys(actions).map(action => {
          const {icon, text, state} = actions[action];

          return (
            <div key={action} className={`panel-block ${state === 'loading' ? 'is-active' : ''}`}>
              <span className="left-icon icon has-text-grey">
                <i className={icon}></i>
              </span>
                {text}
              <div className="right-icon">
                {typeof state === 'boolean' ? (
                  <Boolean value={state} />
                ) : state === 'loading' ? (
                  <span className="icon has-text-grey">
                    <i className="fas fa-circle-notch fa-spin" aria-hidden="true"></i>
                  </span>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </Modal>
  </div>
);

export default ActionListModal;
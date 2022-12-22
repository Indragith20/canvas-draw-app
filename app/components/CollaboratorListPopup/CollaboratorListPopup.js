import React from 'react';
import Modal from '../Common/Modal/Modal';

import styles from './CollaboratorListPopup.css';

export const CollaboratorsListPopupLinks = () => ([{
  rel: 'stylesheet',
  href: styles
}])

function CollaboratorListPopup({ showPopup, onCancel, collaboratorList, transitionState }) {
  console.log(collaboratorList, "collaboratorList", transitionState)
  return (
    <Modal show={showPopup} close={onCancel}>
      <Modal.Header needCloseIcon={true}>
        <span className='popup-header'>
          Collaborators
        </span>
      </Modal.Header>
      <Modal.Content>
        <div className='content'>
          {collaboratorList && transitionState !== 'loading' ? collaboratorList.map((collaborator) => {
            return (
              <li key={collaborator.id} className='collaborator-item'>
                <span className='avatar'>{collaborator.name.split('')[0].toUpperCase()}</span>
                {collaborator.name}
              </li>
            )

          }) : <>Loading Collaborators...</>}
        </div>

      </Modal.Content>
    </Modal>
  )
}

export default React.memo(CollaboratorListPopup);
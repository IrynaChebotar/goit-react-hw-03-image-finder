import React, { Component } from 'react';
import { ModalContainer, Overlay } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleCloseModal = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleCloseModal}>
        <ModalContainer>
          <img src={this.props.largeImageURL} alt="" />
        </ModalContainer>
      </Overlay>
    );
  }
}

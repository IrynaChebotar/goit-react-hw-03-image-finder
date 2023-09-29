import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { fetchImages } from './Api';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    totalImages: 0,
  };

  componentDidUpdate = async (_, prevState) => {
    const { page, query } = this.state;
    if (page !== prevState || query !== prevState.query) {
      this.setState({ isLoading: true });
      try {
        const data = await fetchImages(query, page);
        if (!data.length) return;
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          totalImages: data.totalHits,
        }));
      } catch (error) {
        console.error(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  };

  handleSubmit = async newQuery => {
    this.setState({ query: newQuery, images: [], page: 1, totalImages: 0 });
  };

  handleLoadMore = async () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  handleImageClick = largeImageUrl => {
    this.setState({ largeImageUrl, showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ largeImageUrl: '', showModal: false });
  };

  render() {
    const { images, isLoading, showModal, largeImageUrl, totalImages } =
      this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} onItemClick={this.handleImageClick} />
        {isLoading && <Loader />}
        {images.length !== totalImages && !isLoading && (
          <Button onClick={this.handleLoadMore} />
        )}
        {showModal && (
          <Modal
            largeImageURL={largeImageUrl}
            onClose={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}

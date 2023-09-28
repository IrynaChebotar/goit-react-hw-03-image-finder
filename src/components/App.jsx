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
  };

  handleSubmit = async newQuery => {
    this.setState({ query: newQuery, images: [], page: 1 });

    try {
      const newImages = await fetchImages(newQuery, 1);
      this.setState({ images: newImages });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleLoadMore = async () => {
    const { query, page } = this.state;
    const nextPage = page + 1;

    this.setState({ isLoading: true });

    try {
      const newImages = await fetchImages(query, nextPage);
      this.setState(prevState => ({
        images: [...prevState.images, ...newImages],
        page: nextPage,
      }));
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleImageClick = largeImageUrl => {
    this.setState({ largeImageUrl, showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ largeImageUrl: '', showModal: false });
  };

  render() {
    const { images, isLoading, showModal, largeImageUrl } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} onItemClick={this.handleImageClick} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
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

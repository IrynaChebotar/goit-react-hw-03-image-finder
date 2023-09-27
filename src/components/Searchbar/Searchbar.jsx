import React, { Component } from 'react';
import {
  SearchbarContainer,
  SearchButton,
  SearchForm,
  SearchInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchbarContainer>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">Search</SearchButton>
          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarContainer>
    );
  }
}

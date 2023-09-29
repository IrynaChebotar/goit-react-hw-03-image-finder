import axios from 'axios';

const API_KEY = '38660146-342c23407320306ce6d6468a8';

export const fetchImages = async (query, page) => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data;
  } catch (error) {
    throw new Error('Error fetching images:', error);
  }
};

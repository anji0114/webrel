import axios from 'axios';

export const createProjectUrl = async (projectId: string, url: string) => {
  try {
    const response = await axios.post(`/api/projects/${projectId}/urls`, {
      url,
    });

    console.log('success');

    return response;
  } catch (error) {
    console.log(error);
  }
};

const baseUrl = 'http://hacker-games-trainline20170126053304.azurewebsites.net/api';

export const getUser = () => dispatch => {
  return fetch(`${baseUrl}/user`).then(res => {
    console.log(res);
  });
};

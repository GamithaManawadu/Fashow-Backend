import axios from 'axios';


export const register = newadmin => {
  return axios
    .post('admin/register', {
      username: newadmin.username,
      email: newadmin.email,
      address: newadmin.address,
      contact: newadmin.contact,
      job: newadmin.job,
      password: newadmin.password
    })
    .then(response => {
      console.log('Registered');
    })
    .catch(err => {
      console.log(err);
    });
};

export const login = admin => {
  return axios
    .post('admins/login', {
      email: admin.email,
      password: admin.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data);
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const getProfile = user => {
  return axios
    .get('users/profile', {
    })
    .then(response => {
      console.log(response);
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });


};


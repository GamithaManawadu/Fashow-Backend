
import EditUser from "./EditUser";

export const EditUserConfig = {
  routes: [
    {
      path: '/edit/:id',
      exact: true,
      component: EditUser
    }
  ]
};
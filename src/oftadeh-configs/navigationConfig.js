// import { MaterialUIComponentsNavigation } from "../pages/documentation/material-ui-components/MaterialUIComponentsNavigation";

const navigationConfig = [
    {
      id: "Main",
      title: "MAIN",
      type: "group",
      children: [
        {
          id: "dashboard",
          title: "Dashboard",
          type: "item",
          icon: "",
          url: "/",
          exact: true,
        },
        {
          id: "posts",
          title: "Posts",
          type: "collapse",
          icon: "",
         
          children: [
            {
              id: "all posts",
              title: "All Posts",
              type: "item",
              url: "/pages/posts",
              exact: true,
            },
            {
              id: "add post",
              title: "Add Post",
              type: "item",
              url: "/pages/posts/add-post",
              exact: true,
            },
          ],
        },
        {
          id: "calendar",
          title: "Calendar",
          type: "item",
          icon: "",
          url: "/pages/calendar",
          exact: true,
        },
      ],
    },
    {
      id: "Pages",
      title: "Pages",
      type: "group",
      children: [
        {
          id: "Authentication",
          title: "Admin",
          type: "collapse",
          icon: "",
          children: [
            {
              id: "Login",
              title: "Login",
              type: "item",
              url: "/pages/auth/login",
              exact: true,
            },
            {
              id: "Register",
              title: "Register",
              type: "item",
              url: "/pages/auth/register",
              exact: true,
            },
            {
              id: "ViewUser",
              title: "ViewUser",
              type: "item",
              url: "/pages/auth/ViewUser",
              exact: true,
            },
            {
              id: "Forgot Password",
              title: "Forgot Password",
              type: "item",
              url: "/pages/auth/forgot-password",
              exact: true,
            },
          ],
        },

          
        
        {
          id: "About",
          title: "Feedback",
          type: "item",
          icon: "",
          url: "/pages/about",
          exact: true,
        },
        {
          id: "Errors",
          title: "Errors",
          type: "collapse",
          icon: "",
         
          children: [
            {
              id: "404",
              title: "404",
              type: "item",
              url: "/pages/errors/error-404",
              exact: true,
            },
            {
              id: "500",
              title: "500",
              type: "item",
              url: "/pages/errors/error-500",
              exact: true,
            },
          ],
        },
      ],
    },
    {
      id: "divider-1",
      type: "divider",
    },
    {
      id: "Documentation",
      title: "DOCUMENTATION",
      type: "group",
      children: [
       
        {
          id: "Oftadeh - React Admin",
          title: "Oftadeh - React Admin",
          type: "link",
          icon: "",
          url: "https://github.com/mohammadoftadeh/oftadeh-react-admin",
          exact: true,
        },
      ],
    },
    // {
    //   id: "dashboard",
    //   title: "Dashboard",
    //   type: "item",
    //   icon: "dashboard",
    //   url: "/",
    //   exact: true
    // },
    // {
    //   id: "pages",
    //   title: "Pages",
    //   type: "group",
    //   icon: "pages",
    //   children: [
    //     {
    //       id: "all pages",
    //       title: "Pages",
    //       type: "collapse",
    //       icon: "stars",
    //       badge: {
    //         title: "new",
    //         bg: "#525E8A",
    //         fg: "#FFFFFF"
    //       },
    //       children: [
    //         {
    //           id: "about",
    //           title: "About",
    //           type: "item",
    //           icon: "info",
    //           url: "/pages/about",
    //           exact: true
    //         },
    //         {
    //           id: "contact",
    //           title: "Contact",
    //           type: "item",
    //           icon: "group",
    //           url: "/pages/contact",
    //           exact: true
    //         }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   id: "divider-1",
    //   type: "divider"
    // },
    // {
    //   id: "oftadeh-github",
    //   title: "Oftadeh Github",
    //   type: "link",
    //   icon: "link",
    //   url: "https://github.com/mohammadoftadeh",
    //   target: "_blank",
    //   badge: {
    //     title: "git",
    //     bg: "green",
    //     fg: "#FFFFFF"
    //   }
    // }
  ];
  
  export default navigationConfig;
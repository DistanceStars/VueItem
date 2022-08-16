import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta:{
      isShow:false,
    },
    redirect:"/index",
    children:[
      {
        path: "/courseList",
        name: "CourseList",
        component: ()=>import('../views/courseList.vue'),
        meta:{
          isShow:true,
          title:'检索设置'
        }
      },
      {
        path: "/other",
        name: "Other",
        component: ()=>import('../views/other.vue'),
        meta:{
          isShow:true,
          title:'其他设置'
        }
      },
      {
        path: "/personal",
        name: "Personal",
        component: ()=>import('../views/personal.vue'),
        meta:{
          isShow:true,
          title:'个人设置'
        }
      },
      {
        path: "/index",
        name: "Index",
        component: ()=>import('../views/index.vue'),
        meta:{
          isShow:false,
        }
      },
    ]
  },
  
  {
    path: "/",
    name: "Login",
    component: Login,
    meta:{
      isShow:false,
    }
  },
 
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

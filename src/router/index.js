import Vue from 'vue'
import Router from 'vue-router'
import Home from './../pages/home/home'
import Mine from './../pages/mine/mine'
import Group from './../pages/group/group'
import Video from './../pages/video/video'
import Borde from './../pages/borde/borde'
//  Video 二级路由
import Movie from './../components/video_two_router/movie'
import Tv from './../components/video_two_router/tv'
import City from './../components/video_two_router/city'
import Read from './../components/video_two_router/read'
import Music from './../components/video_two_router/music'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/video',
      name: 'Video',
      component: Video,
      children:[
        {
          path: '/',
          name: '',
          redirect: 'Movie'
        },
        {
          path: 'movie',
          name: 'Movie',
          component: Movie
        },
        {
          path: 'tv',
          name: 'Tv',
          component: Tv
        },
        {
          path: 'city',
          name: 'City',
          component: City
        },
        {
          path: 'read',
          name: 'Read',
          component: Read
        },
        {
          path: 'music',
          name: 'Music',
          component: Music
        }
      ]
    },
    {
      path: '/borde',
      name: 'Borde',
      component: Borde
    },
  ]
})

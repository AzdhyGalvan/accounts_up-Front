import  Carousel  from '../components/Carousel'
import Signup from '../components/Signup'
import Login from '../components/Login'
import AboutUs from '../components/AboutUs'
import Profile from '../components/Profile'




const routes = (props) =>{
    return[
{
    path:'/', element:<Carousel  {...props}/>
},
{
    path:'/signup', element:<Signup {...props}/>
},
{
    path:'/login', element:<Login  {...props}/>
},
{
    path:'/profile',element:<Profile {...props}  />
},
{
    path:'/aboutus', element:<AboutUs/>
}

]
   
}

export default routes
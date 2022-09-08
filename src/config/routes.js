import  Carousel  from '../components/Carousel'
import Signup from '../components/Signup'
import Login from '../components/Login'
import AboutUs from '../components/AboutUs'
import Profile from '../components/Profile'
import NewSale from '../components/NewSale'
import NewPurchase from '../components/NewPurchase'
import NewCost from '../components/NewCost'




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
    path:'/aboutus', element:<AboutUs {...props}/>
},
{
    path:'/new-sale', element:<NewSale {...props}/>
},
{
    path:'/new-purchase', element:<NewPurchase {...props}/>
},
{
    path:'/new-cost', element:<NewCost {...props}/>
},

]
   
}

export default routes
import  Carousel  from '../components/Carousel'
import Signup from '../components/Signup'
import Login from '../components/Login'
import AboutUs from '../components/AboutUs'
import Profile from '../components/Profile'
import NewSale from '../components/NewSale'
import NewPurchase from '../components/NewPurchase'
import NewCost from '../components/NewCost'
import Services from '../components/Services'
import ResultCost from '../components/ResultsCost'
import ResultSales from '../components/ResultsSales'
import ResultsPurchases from '../components/ResultsPurchases'
import GlobalResults from '../components/GlobalResults'




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
{
    path:'/services', element:<Services {...props}/>
},
{
    path:'/list-costs', element:<ResultCost {...props}/>
},
{
    path:'/list-ventas', element:<ResultSales {...props}/>
},
{
    path:'/list-purchases', element:<ResultsPurchases {...props}/>
},
{
    path:'/global-results', element:<GlobalResults {...props}/>
},
]
   
}

export default routes
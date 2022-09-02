import  Carousel  from './components/Carousel'
import {Routes,Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'




function RootRouter(){
    return(
        <Routes>
            <Route path='/' element={<Carousel/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />


        </Routes>
    )
}

export default RootRouter
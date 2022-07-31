import { lazy } from 'react'
import {  Routes, Route, Navigate } from 'react-router-dom'
import { RequireAuth } from './helpers/auth'
import { AuthProvider } from './helpers/authProvider'
import MainLayout from './layouts/mainLayout'

const  Login = lazy(() => import("./pages/login"))
const  Categories = lazy(() => import("./pages/categories"))
const  Customers = lazy(() => import("./pages/customers"))
const  Dashboard = lazy(() => import("./pages/dashboard"))
const  Discount = lazy(() => import("./pages/discount"))
const  Menus = lazy(() => import("./pages/menus"))
const  Orders = lazy(() => import("./pages/orders"))
const  Permissions = lazy(() => import("./pages/permissions"))
const  Product = lazy(() => import("./pages/product"))
const  Roles = lazy(() => import("./pages/roles"))
const  Suppliers = lazy(() => import("./pages/suppliers"))
const  Users = lazy(() => import("./pages/users"))
const  PageNotFound = lazy(() => import("./pages/404"))

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/login' element={<Login/>} />

        <Route path='/' element={ <RequireAuth> <MainLayout/> </RequireAuth>}>
          <Route path='/' element={<Navigate to="/dashboard"/>}/>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/customers' element={<Customers/>} />

          <Route path='/catalog' >
            <Route path='categories' index element={<Categories/>}/>
            <Route path='product'  element={<Product/>}/>
          </Route>

          <Route path='/master' >
            <Route path='menus' index element={<Menus/>}/>
            <Route path='permissions' element={<Permissions/>}/>
            <Route path='roles' element={<Roles/>}/>
          </Route>

          <Route path='/seller' element={<Orders/>}/>
          <Route path='/discount' element={<Discount/>}/>
          <Route path='/suppliers' element={<Suppliers/>}/>
          <Route path='/users' element={<Users/>}/>
        </Route>

        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </AuthProvider>
  )
}

export default App

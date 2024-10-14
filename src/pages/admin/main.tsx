


import AdminEvents from './AdminEvents'
import AdminNewsletter from './AdminNewsLetter'
import AdminServices from './Service-Admin'
import AdminAttendancePage from './adminresults/AttendanceResult'
import ServiceResult from './adminresults/ServiceResult'
import Navbar from '../user/Navbar'

const Main = () => {
  return (
    <div>
    <Navbar/>
      <AdminEvents/>
      <AdminNewsletter/>
      <AdminServices/>
      <ServiceResult/>
      <AdminAttendancePage/>
  
    </div>
  )
}

export default Main

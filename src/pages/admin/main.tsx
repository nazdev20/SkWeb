

import MyMapComponent from '../user/Map'
import AdminEvents from './AdminEvents'
import AdminNewsletter from './AdminNewsLetter'
import AdminServices from './Service-Admin'
import AdminAttendancePage from './adminresults/AttendanceResult'
import ServiceResult from './adminresults/ServiceResult'

const Main = () => {
  return (
    <div>
    
      <AdminEvents/>
      <AdminNewsletter/>
      <AdminServices/>
      <ServiceResult/>
      <AdminAttendancePage/>
      <MyMapComponent/>
    </div>
  )
}

export default Main

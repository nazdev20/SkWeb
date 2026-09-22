


import AdminEvents from './AdminEvents'
import AdminNewsletter from './AdminNewsLetter'
import AdminServices from './Service-Admin'
import AdminAttendancePage from './adminresults/AttendanceResult'
import ServiceResult from './adminresults/ServiceResult'

const Main = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-100 pb-10">
      <header className="bg-slate-900 px-4 py-6 text-white shadow-md sm:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">Sangguniang Kabataan</p>
          <h1 className="mt-1 text-3xl font-bold">Admin dashboard</h1>
          <p className="mt-2 text-slate-300">Manage events, services, newsletters, applications, and attendance.</p>
        </div>
      </header>
      <main className="mx-auto w-full max-w-7xl space-y-8 px-3 py-8 sm:px-6 lg:px-8">
        <AdminEvents/>
        <AdminNewsletter/>
        <AdminServices/>
        <ServiceResult/>
        <AdminAttendancePage/>
      </main>
    </div>
  )
}

export default Main

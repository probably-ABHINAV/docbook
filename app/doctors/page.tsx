import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { DoctorSearch } from "@/components/doctors/doctor-search"
import { DoctorFilters } from "@/components/doctors/doctor-filters"
import { DoctorList } from "@/components/doctors/doctor-list"

export default function DoctorsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Page Header */}
          <div className="space-y-4">
            <h1 className="text-3xl lg:text-4xl font-bold">Find Doctors</h1>
            <p className="text-lg text-muted-foreground">
              Discover and book appointments with verified medical professionals near you
            </p>
          </div>

          {/* Search */}
          <DoctorSearch />

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <DoctorFilters />
            </div>

            {/* Doctor List */}
            <div className="lg:col-span-3">
              <DoctorList />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

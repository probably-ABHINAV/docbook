import { DoctorCard } from "./doctor-card"

// Mock data - in real app, this would come from API
const doctors = [
  {
    id: "660e8400-e29b-41d4-a716-446655440001",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    experience: 12,
    rating: 4.8,
    totalReviews: 156,
    fee: 200,
    location: "New York, NY",
    avatar: "/placeholder.svg?height=100&width=100",
    verified: true,
    languages: ["English", "Spanish"],
    teleconsultationAvailable: true,
    nextAvailable: "Today 2:30 PM",
    clinicName: "Heart Care Clinic",
  },
  {
    id: "660e8400-e29b-41d4-a716-446655440002",
    name: "Dr. Michael Chen",
    specialty: "Dermatology",
    experience: 8,
    rating: 4.9,
    totalReviews: 203,
    fee: 150,
    location: "Los Angeles, CA",
    avatar: "/placeholder.svg?height=100&width=100",
    verified: true,
    languages: ["English", "Mandarin"],
    teleconsultationAvailable: true,
    nextAvailable: "Tomorrow 10:00 AM",
    clinicName: "Skin Health Center",
  },
  {
    id: "660e8400-e29b-41d4-a716-446655440003",
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    experience: 15,
    rating: 4.7,
    totalReviews: 89,
    fee: 120,
    location: "Chicago, IL",
    avatar: "/placeholder.svg?height=100&width=100",
    verified: true,
    languages: ["English", "Spanish"],
    teleconsultationAvailable: false,
    nextAvailable: "Dec 28, 9:00 AM",
    clinicName: "Children's Medical Group",
  },
]

export function DoctorList() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Available Doctors</h2>
        <select className="border rounded-lg px-3 py-2 text-sm">
          <option>Sort by Relevance</option>
          <option>Sort by Rating</option>
          <option>Sort by Price (Low to High)</option>
          <option>Sort by Price (High to Low)</option>
          <option>Sort by Experience</option>
        </select>
      </div>

      <div className="grid gap-6">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Load More Doctors
        </button>
      </div>
    </div>
  )
}

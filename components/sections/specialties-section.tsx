import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const specialties = [
  {
    name: "Cardiology",
    icon: "❤️",
    description: "Heart and cardiovascular specialists",
    doctorCount: 245,
    avgRating: 4.8,
  },
  {
    name: "Dermatology",
    icon: "🧴",
    description: "Skin, hair, and nail specialists",
    doctorCount: 189,
    avgRating: 4.9,
  },
  {
    name: "Neurology",
    icon: "🧠",
    description: "Brain and nervous system specialists",
    doctorCount: 156,
    avgRating: 4.7,
  },
  {
    name: "Orthopedics",
    icon: "🦴",
    description: "Bone, joint, and muscle specialists",
    doctorCount: 298,
    avgRating: 4.8,
  },
  {
    name: "Pediatrics",
    icon: "👶",
    description: "Child healthcare specialists",
    doctorCount: 167,
    avgRating: 4.9,
  },
  {
    name: "Psychiatry",
    icon: "🧘",
    description: "Mental health specialists",
    doctorCount: 134,
    avgRating: 4.6,
  },
  {
    name: "General Medicine",
    icon: "🩺",
    description: "Primary care physicians",
    doctorCount: 412,
    avgRating: 4.7,
  },
  {
    name: "Gynecology",
    icon: "👩‍⚕️",
    description: "Women's health specialists",
    doctorCount: 203,
    avgRating: 4.8,
  },
]

export function SpecialtiesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="mb-4">
            🏥 Medical Specialties
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold">
            Find Specialists in
            <span className="text-primary block">Every Medical Field</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Browse through our comprehensive network of verified medical professionals across all major specialties and
            subspecialties.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {specialties.map((specialty, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl mb-3">{specialty.icon}</div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {specialty.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{specialty.description}</p>
                  </div>

                  <div className="space-y-2 text-center">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Doctors:</span>
                      <span className="font-medium">{specialty.doctorCount}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Avg Rating:</span>
                      <div className="flex items-center gap-1">
                        <span className="font-medium">{specialty.avgRating}</span>
                        <span className="text-yellow-500">⭐</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <Link href={`/doctors?specialty=${specialty.name.toLowerCase()}`}>
                      View Doctors
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/specialties">
              View All Specialties
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

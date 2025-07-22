import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Patient",
    location: "New York, USA",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "DocBook made finding a cardiologist so easy! I booked an appointment within minutes and the doctor was excellent. The platform is user-friendly and trustworthy.",
    specialty: "Cardiology",
  },
  {
    name: "Dr. Michael Chen",
    role: "Cardiologist",
    location: "Los Angeles, USA",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "As a doctor, I love how DocBook streamlines my practice. The appointment management system is fantastic and helps me serve more patients efficiently.",
    specialty: "Healthcare Provider",
  },
  {
    name: "Emily Rodriguez",
    role: "Patient",
    location: "Miami, USA",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "The telemedicine feature saved me so much time! I had a consultation from home and received excellent care. Highly recommend DocBook to everyone.",
    specialty: "Telemedicine",
  },
  {
    name: "James Wilson",
    role: "Patient",
    location: "Chicago, USA",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "Finding a pediatrician for my daughter was stress-free with DocBook. The reviews helped me choose the right doctor, and booking was instant.",
    specialty: "Pediatrics",
  },
  {
    name: "Dr. Lisa Park",
    role: "Dermatologist",
    location: "Seattle, USA",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "DocBook has transformed my practice management. The patient review system helps build trust, and the scheduling system reduces no-shows significantly.",
    specialty: "Healthcare Provider",
  },
  {
    name: "Robert Martinez",
    role: "Patient",
    location: "Phoenix, USA",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "I needed an urgent orthopedic consultation and DocBook connected me with a top-rated specialist the same day. Outstanding service and care quality.",
    specialty: "Orthopedics",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="mb-4">
            💬 What Our Users Say
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold">
            Real Stories from
            <span className="text-primary block">Real People</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from patients and healthcare providers who have experienced the difference DocBook makes in healthcare
            accessibility and quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm relative overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start">
                    <Quote className="w-8 h-8 text-primary/20" />
                    <Badge variant="outline" className="text-xs">
                      {testimonial.specialty}
                    </Badge>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-muted-foreground leading-relaxed">"{testimonial.text}"</blockquote>

                  {/* User Info */}
                  <div className="flex items-center gap-4 pt-4 border-t">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} • {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>98% Customer Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>15,000+ Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

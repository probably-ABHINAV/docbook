import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, Shield, Star, Video, Clock, Heart, Users } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Smart Doctor Discovery",
    description: "AI-powered search to find the perfect doctor based on symptoms, specialty, or location.",
    badge: "AI Powered",
  },
  {
    icon: Calendar,
    title: "Instant Booking",
    description: "Book appointments in real-time with available slots and instant confirmation.",
    badge: "Real-time",
  },
  {
    icon: Video,
    title: "Telemedicine Ready",
    description: "Secure video consultations with integrated meeting links and health records.",
    badge: "Secure",
  },
  {
    icon: Shield,
    title: "Verified Professionals",
    description: "All doctors are verified with credentials, licenses, and patient reviews.",
    badge: "Trusted",
  },
  {
    icon: Star,
    title: "Review System",
    description: "Transparent reviews and ratings to help you make informed decisions.",
    badge: "Transparent",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your healthcare needs.",
    badge: "Always Available",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="mb-4">
            <Heart className="w-3 h-3 mr-1" />
            Why Choose DocBook
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold">
            Healthcare Made
            <span className="text-primary block">Simple & Accessible</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're revolutionizing healthcare access with cutting-edge technology, verified professionals, and
            patient-first approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
            >
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>Trusted by over 10,000 patients and 5,000 doctors worldwide</span>
          </div>
        </div>
      </div>
    </section>
  )
}

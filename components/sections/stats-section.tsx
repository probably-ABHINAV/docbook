import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, Star, Globe } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Happy Patients",
    description: "Patients trust our platform",
  },
  {
    icon: Calendar,
    value: "5,000+",
    label: "Verified Doctors",
    description: "Medical professionals",
  },
  {
    icon: Star,
    value: "50,000+",
    label: "Appointments Booked",
    description: "Successful consultations",
  },
  {
    icon: Globe,
    value: "25+",
    label: "Countries Served",
    description: "Global healthcare access",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            📊 Our Impact
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold">
            Trusted by Thousands
            <span className="block">Worldwide</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Join our growing community of patients and healthcare providers who are transforming the way medical care is
            accessed and delivered.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="space-y-2">
                    <div className="text-4xl lg:text-5xl font-bold text-white">{stat.value}</div>
                    <div className="text-lg font-semibold text-white">{stat.label}</div>
                    <div className="text-sm text-primary-foreground/70">{stat.description}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center">
          <p className="text-lg text-primary-foreground/80">🌟 Rated 4.9/5 stars by our users across all platforms</p>
        </div>
      </div>
    </section>
  )
}

export default StatsSection

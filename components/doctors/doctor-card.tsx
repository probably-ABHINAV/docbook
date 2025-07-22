import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MapPin, Calendar, Video, Shield, Clock, Languages, DollarSign } from "lucide-react"

interface Doctor {
  id: string
  name: string
  specialty: string
  experience: number
  rating: number
  totalReviews: number
  fee: number
  location: string
  avatar: string
  verified: boolean
  languages: string[]
  teleconsultationAvailable: boolean
  nextAvailable: string
  clinicName: string
}

interface DoctorCardProps {
  doctor: Doctor
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Doctor Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-start gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={doctor.avatar || "/placeholder.svg"} alt={doctor.name} />
                <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold">{doctor.name}</h3>
                  {doctor.verified && (
                    <Badge variant="secondary" className="text-xs">
                      <Shield className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>

                <div className="space-y-1 text-sm text-muted-foreground">
                  <p className="font-medium text-primary">{doctor.specialty}</p>
                  <p>{doctor.experience} years experience</p>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>
                      {doctor.clinicName}, {doctor.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="flex items-center gap-2">
              <Languages className="w-4 h-4 text-muted-foreground" />
              <div className="flex gap-1">
                {doctor.languages.map((lang) => (
                  <Badge key={lang} variant="outline" className="text-xs">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Rating & Reviews */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{doctor.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">({doctor.totalReviews} reviews)</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <DollarSign className="w-4 h-4 text-muted-foreground" />
                <span className="font-medium">${doctor.fee}</span>
                <span className="text-muted-foreground">consultation fee</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-green-600 font-medium">{doctor.nextAvailable}</span>
              </div>
            </div>

            {/* Consultation Types */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>In-person consultation</span>
              </div>
              {doctor.teleconsultationAvailable && (
                <div className="flex items-center gap-2 text-sm">
                  <Video className="w-4 h-4 text-green-600" />
                  <span>Video consultation</span>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <Button asChild className="w-full">
              <Link href={`/doctors/${doctor.id}`}>View Profile</Link>
            </Button>

            <Button variant="outline" asChild className="w-full bg-transparent">
              <Link href={`/book/${doctor.id}`}>
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Link>
            </Button>

            {doctor.teleconsultationAvailable && (
              <Button variant="ghost" size="sm" className="w-full text-green-600">
                <Video className="w-4 h-4 mr-2" />
                Video Consult Available
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

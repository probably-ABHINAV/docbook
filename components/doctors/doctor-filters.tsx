"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const specialties = [
  "Cardiology",
  "Dermatology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Psychiatry",
  "General Medicine",
  "Gynecology",
]

const consultationTypes = [
  { id: "online", label: "Online Consultation" },
  { id: "offline", label: "In-Person Visit" },
  { id: "both", label: "Both Available" },
]

const languages = ["English", "Spanish", "French", "German", "Mandarin", "Arabic"]

export function DoctorFilters() {
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([])
  const [feeRange, setFeeRange] = useState([0, 500])
  const [selectedConsultationType, setSelectedConsultationType] = useState<string[]>([])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [minRating, setMinRating] = useState([4])

  const clearFilters = () => {
    setSelectedSpecialties([])
    setFeeRange([0, 500])
    setSelectedConsultationType([])
    setSelectedLanguages([])
    setMinRating([4])
  }

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Filters</CardTitle>
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Specialties */}
        <div className="space-y-3">
          <h4 className="font-medium">Specialties</h4>
          <div className="space-y-2">
            {specialties.map((specialty) => (
              <div key={specialty} className="flex items-center space-x-2">
                <Checkbox
                  id={specialty}
                  checked={selectedSpecialties.includes(specialty)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedSpecialties([...selectedSpecialties, specialty])
                    } else {
                      setSelectedSpecialties(selectedSpecialties.filter((s) => s !== specialty))
                    }
                  }}
                />
                <label htmlFor={specialty} className="text-sm cursor-pointer">
                  {specialty}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Consultation Fee */}
        <div className="space-y-3">
          <h4 className="font-medium">Consultation Fee</h4>
          <div className="space-y-2">
            <Slider value={feeRange} onValueChange={setFeeRange} max={500} step={10} className="w-full" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>${feeRange[0]}</span>
              <span>${feeRange[1]}</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Consultation Type */}
        <div className="space-y-3">
          <h4 className="font-medium">Consultation Type</h4>
          <div className="space-y-2">
            {consultationTypes.map((type) => (
              <div key={type.id} className="flex items-center space-x-2">
                <Checkbox
                  id={type.id}
                  checked={selectedConsultationType.includes(type.id)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedConsultationType([...selectedConsultationType, type.id])
                    } else {
                      setSelectedConsultationType(selectedConsultationType.filter((t) => t !== type.id))
                    }
                  }}
                />
                <label htmlFor={type.id} className="text-sm cursor-pointer">
                  {type.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Minimum Rating */}
        <div className="space-y-3">
          <h4 className="font-medium">Minimum Rating</h4>
          <div className="space-y-2">
            <Slider value={minRating} onValueChange={setMinRating} min={1} max={5} step={0.5} className="w-full" />
            <div className="flex items-center gap-1">
              <span className="text-sm">{minRating[0]} stars & above</span>
              <span className="text-yellow-500">⭐</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Languages */}
        <div className="space-y-3">
          <h4 className="font-medium">Languages</h4>
          <div className="space-y-2">
            {languages.map((language) => (
              <div key={language} className="flex items-center space-x-2">
                <Checkbox
                  id={language}
                  checked={selectedLanguages.includes(language)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedLanguages([...selectedLanguages, language])
                    } else {
                      setSelectedLanguages(selectedLanguages.filter((l) => l !== language))
                    }
                  }}
                />
                <label htmlFor={language} className="text-sm cursor-pointer">
                  {language}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Active Filters */}
        {(selectedSpecialties.length > 0 || selectedConsultationType.length > 0 || selectedLanguages.length > 0) && (
          <>
            <Separator />
            <div className="space-y-3">
              <h4 className="font-medium">Active Filters</h4>
              <div className="flex flex-wrap gap-2">
                {selectedSpecialties.map((specialty) => (
                  <Badge key={specialty} variant="secondary" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
                {selectedConsultationType.map((type) => (
                  <Badge key={type} variant="secondary" className="text-xs">
                    {consultationTypes.find((t) => t.id === type)?.label}
                  </Badge>
                ))}
                {selectedLanguages.map((language) => (
                  <Badge key={language} variant="secondary" className="text-xs">
                    {language}
                  </Badge>
                ))}
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}

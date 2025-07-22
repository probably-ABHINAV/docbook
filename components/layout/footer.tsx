import Link from "next/link"
import { Stethoscope, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Stethoscope className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold">DocBook</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Connecting patients with trusted medical professionals worldwide. Find, book, and manage your healthcare
              appointments with ease.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* For Patients */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">For Patients</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/doctors" className="text-muted-foreground hover:text-primary">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link href="/specialties" className="text-muted-foreground hover:text-primary">
                  Specialties
                </Link>
              </li>
              <li>
                <Link href="/book-appointment" className="text-muted-foreground hover:text-primary">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/health-records" className="text-muted-foreground hover:text-primary">
                  Health Records
                </Link>
              </li>
              <li>
                <Link href="/telemedicine" className="text-muted-foreground hover:text-primary">
                  Telemedicine
                </Link>
              </li>
            </ul>
          </div>

          {/* For Doctors */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">For Doctors</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/doctor-registration" className="text-muted-foreground hover:text-primary">
                  Join DocBook
                </Link>
              </li>
              <li>
                <Link href="/doctor-dashboard" className="text-muted-foreground hover:text-primary">
                  Doctor Dashboard
                </Link>
              </li>
              <li>
                <Link href="/manage-appointments" className="text-muted-foreground hover:text-primary">
                  Manage Appointments
                </Link>
              </li>
              <li>
                <Link href="/patient-reviews" className="text-muted-foreground hover:text-primary">
                  Patient Reviews
                </Link>
              </li>
              <li>
                <Link href="/practice-management" className="text-muted-foreground hover:text-primary">
                  Practice Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-primary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-muted-foreground hover:text-primary">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 DocBook. All rights reserved. | Made with ❤️ for better healthcare access.</p>
        </div>
      </div>
    </footer>
  )
}

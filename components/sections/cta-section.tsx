import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Smartphone } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                🚀 Get Started Today
              </Badge>

              <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                Ready to Transform
                <span className="block">Your Healthcare?</span>
              </h2>

              <p className="text-xl text-primary-foreground/90 max-w-lg">
                Join thousands of patients and doctors who trust DocBook for their healthcare needs. Start your journey
                to better health today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild className="text-primary">
                <Link href="/register">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/doctors" className="flex items-center">
                  Find Doctors
                </Link>
              </Button>
            </div>

            {/* Features List */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>✅ Free to use for patients</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>✅ Verified doctors only</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>✅ Instant booking confirmation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>✅ 24/7 customer support</span>
              </div>
            </div>
          </div>

          {/* Right Content - App Preview */}
          <div className="relative">
            <div className="relative z-10 max-w-sm mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="text-center">
                    <Smartphone className="w-16 h-16 mx-auto mb-4 text-white" />
                    <h3 className="text-xl font-semibold mb-2">Download Our App</h3>
                    <p className="text-primary-foreground/80 text-sm">
                      Get the DocBook mobile app for the best experience
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Button variant="secondary" className="w-full text-primary" size="lg">
                      <Download className="w-5 h-5 mr-2" />
                      Download for iOS
                    </Button>
                    <Button variant="secondary" className="w-full text-primary" size="lg">
                      <Download className="w-5 h-5 mr-2" />
                      Download for Android
                    </Button>
                  </div>

                  <div className="text-center text-xs text-primary-foreground/60">
                    Available on App Store and Google Play
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

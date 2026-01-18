import Image from "next/image"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 px-4 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/zag-text-logo.png"
              alt="Zentusi Art Glass Logo"
              width={60}
              height={40}
              className="h-10 w-auto"
            />
            <span className="font-serif text-xl md:text-2xl font-semibold text-foreground tracking-wide">
              Zentusi Art Glass
            </span>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex px-5 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance">
            Custom Art Glass for<br className="hidden md:block" /> Interior & Exterior Spaces
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Transforming spaces with handcrafted art glass pieces. From stunning interior accents to captivating backyard features, we bring your vision to life.
          </p>
          <p className="text-sm text-muted-foreground uppercase tracking-widest">
            Greater Toronto Area and Surrounds
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center text-foreground mb-4">
            Our Work
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Each piece is uniquely crafted to complement your space and style.
          </p>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Photo 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/glass-sunset.jpg"
                  alt="Art glass piece with warm golden sunset tones and light refractions"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Photo 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/glass-20bars.jpeg"
                  alt="Colorful fused glass bars showcasing variety of colors and materials"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center text-foreground mb-12">
            What We Create
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Interior Design"
              description="Custom glass panels, room dividers, and decorative accents that add elegance to any indoor space."
            />
            <ServiceCard
              title="Exterior Features"
              description="Weather-resistant art glass for gardens, patios, and backyard installations that catch the light beautifully."
            />
            <ServiceCard
              title="Bespoke Commissions"
              description="Fully custom pieces designed in collaboration with you to match your unique vision and space."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 px-4 md:px-8 bg-secondary/30">
        <div className="max-w-xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center text-foreground mb-4">
            Start Your Project
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Have an idea or want to learn more? Send us a message and we will get back to you.
          </p>
          <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm border border-border">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Image
              src="/images/zag-text-logo.png"
              alt="Zentusi Art Glass Logo"
              width={30}
              height={20}
              className="h-5 w-auto opacity-70"
            />
            <span>Zentusi Art Glass</span>
          </div>
          <p>Greater Toronto Area, Ontario</p>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 rounded-lg bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

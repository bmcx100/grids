import { Hero } from '@/components/marketing/Hero'
import { TrustBar } from '@/components/marketing/TrustBar'
import { FeatureCards } from '@/components/marketing/FeatureCards'
import { PhilosophyBand } from '@/components/marketing/PhilosophyBand'
import { HowItWorks } from '@/components/marketing/HowItWorks'
import { PricingGrid } from '@/components/marketing/PricingGrid'

export default function MarketingPage() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto px-6">
        <Hero />
        <TrustBar />
        <FeatureCards />
      </div>
      <PhilosophyBand />
      <div className="max-w-[1200px] mx-auto px-6">
        <HowItWorks />
        <PricingGrid />
      </div>
    </>
  )
}

import { Hero } from '@/components/marketing/Hero'
import { TrustBar } from '@/components/marketing/TrustBar'
import { SwapSection } from '@/components/marketing/SwapSection'
import { ForYouBoth } from '@/components/marketing/ForYouBoth'
import { GameShowcase } from '@/components/marketing/GameShowcase'
import { Customization } from '@/components/marketing/Customization'
import { SocialProof } from '@/components/marketing/SocialProof'
import { PricingGrid } from '@/components/marketing/PricingGrid'

export default function MarketingPage() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto px-6">
        <Hero />
      </div>
      <TrustBar />
      <div className="max-w-[1200px] mx-auto px-6">
        <SwapSection />
      </div>
      <ForYouBoth />
      <div className="max-w-[1200px] mx-auto px-6">
        <GameShowcase />
        <Customization />
      </div>
      <SocialProof />
      <div className="max-w-[1200px] mx-auto px-6">
        <PricingGrid />
      </div>
    </>
  )
}

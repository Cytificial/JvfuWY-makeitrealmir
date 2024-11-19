import {
  LandingContainer,
  LandingCTA,
  LandingFAQ,
  LandingFeatures,
  LandingHero,
  LandingHowItWorks,
  LandingPainPoints,
  LandingPricing,
  LandingSocialProof,
  LandingSocialRating,
  LandingTestimonials,
} from '~/designSystem'

export default function LandingPage() {
  const features = [
    {
      heading: `Professional Quality Images`,
      description: `Generate stunning visuals that are indistinguishable from professional photography using our advanced AI algorithms.`,
      icon: <i className="las la-camera-retro"></i>,
    },
    {
      heading: `Unlimited Creations`,
      description: `Create as many unique images as you need without any generation limits or quality compromises.`,
      icon: <i className="las la-infinity"></i>,
    },
    {
      heading: `Lightning Fast`,
      description: `Get your perfect images in seconds instead of waiting days or weeks for traditional design work.`,
      icon: <i className="las la-bolt"></i>,
    },
    {
      heading: `Commercial Rights`,
      description: `Full ownership and commercial usage rights for all generated images - use them anywhere without restrictions.`,
      icon: <i className="las la-copyright"></i>,
    },
    {
      heading: `Precise Control`,
      description: `Fine-tune every aspect of your generated images with our intuitive controls and detailed prompting system.`,
      icon: <i className="las la-sliders-h"></i>,
    },
    {
      heading: `Cost Effective`,
      description: `Save thousands on professional photography and design while getting unlimited high-quality visuals.`,
      icon: <i className="las la-piggy-bank"></i>,
    },
  ]

  const testimonials = [
    {
      name: `Sarah Chen`,
      designation: `Digital Marketing Manager`,
      content: `Imagine AI has revolutionized our content creation process. We're now producing 10x more visual content at a fraction of our previous budget.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Marcus Rodriguez`,
      designation: `E-commerce Entrepreneur`,
      content: `The quality of product images I can create with Imagine AI is incredible. My conversion rates have increased by 47% since switching.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Emily Thompson`,
      designation: `Social Media Influencer`,
      content: `This tool is a game-changer for creating unique, eye-catching content. My engagement rates have doubled since I started using Imagine AI.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Creator`,
      description: `Perfect for individual content creators and small businesses`,
      monthly: 29,
      yearly: 290,
      features: [
        `100 generations/month`,
        `Commercial usage rights`,
        `Standard resolution`,
        `Basic support`,
      ],
    },
    {
      title: `Professional`,
      description: `Ideal for growing businesses and professional marketers`,
      monthly: 79,
      yearly: 790,
      features: [
        `Unlimited generations`,
        `Priority processing`,
        `4K resolution`,
        `Priority support`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `Custom solutions for large organizations`,
      monthly: 199,
      yearly: 1990,
      features: [
        `Custom API access`,
        `Dedicated account manager`,
        `Custom training`,
        `24/7 support`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How does Imagine AI compare to professional photography?`,
      answer: `Imagine AI produces professional-quality images at a fraction of the cost and time of traditional photography, with unlimited revisions and variations possible.`,
    },
    {
      question: `Do I own the rights to generated images?`,
      answer: `Yes, you receive full commercial usage rights for all images generated through our platform.`,
    },
    {
      question: `How quickly can I get my images?`,
      answer: `Images are generated within seconds of submitting your description, with unlimited revisions available instantly.`,
    },
    {
      question: `Can I generate images for commercial use?`,
      answer: `Absolutely! All our plans include commercial usage rights for generated images.`,
    },
  ]

  const steps = [
    {
      heading: `Describe Your Vision`,
      description: `Simply type in what you want to see - from product shots to lifestyle scenes.`,
    },
    {
      heading: `AI Generation`,
      description: `Our advanced AI transforms your description into stunning visuals in seconds.`,
    },
    {
      heading: `Refine & Perfect`,
      description: `Fine-tune your results with simple controls until they're exactly right.`,
    },
    {
      heading: `Download & Use`,
      description: `Get your professional-quality images ready for any platform or purpose.`,
    },
  ]

  const painPoints = [
    {
      emoji: `💰`,
      title: `Spending thousands on professional photography`,
    },
    {
      emoji: `⏰`,
      title: `Waiting weeks for photoshoots and editing`,
    },
    {
      emoji: `😤`,
      title: `Settling for generic stock photos`,
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Transform Words into Professional Visuals in Seconds`}
        subtitle={`Create unlimited stunning, commercial-ready images with AI that understands your vision perfectly`}
        buttonText={`Start Creating Now`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/JvfuWY-makeitrealmir-PtNm`}
        socialProof={
          <LandingSocialRating
            numberOfUsers={25000}
            suffixText={`creators growing their business with us`}
          />
        }
      />
      <LandingSocialProof title={`Trusted By Leading Brands`} />
      <LandingPainPoints
        title={`Businesses spend $2000+ per photoshoot while waiting weeks for results - there's a better way`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Your Vision to Reality in 4 Simple Steps`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Everything You Need for Professional Visual Content`}
        subtitle={`Create unlimited professional-quality images for any purpose, without the traditional costs and delays`}
        features={features}
      />
      <LandingTestimonials
        title={`Join Thousands of Creators Who Transformed Their Content`}
        subtitle={`See how businesses are scaling their visual content creation with Imagine AI`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Start Creating Professional Visuals Today`}
        subtitle={`Choose the perfect plan for your content needs`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Common Questions About Imagine AI`}
        subtitle={`Everything you need to know about transforming your visual content`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Transform Your Visual Content?`}
        subtitle={`Join thousands of creators already using Imagine AI to grow their business`}
        buttonText={`Start Creating Now`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}

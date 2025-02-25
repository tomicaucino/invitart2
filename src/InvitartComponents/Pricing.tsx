interface PricingPlanProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ name, price, description, features, isPopular }) => (
  <div className={`pricing-card ${isPopular ? 'popular' : ''}`}>
    {isPopular && <div className="popular-badge">Most Popular</div>}
    <div className="pricing-header">
      <h3>{name}</h3>
      <div className="pricing-price">
        <span className="currency">$</span>
        <span className="amount">{price}</span>
      </div>
      <p className="pricing-description">{description}</p>
    </div>
    <ul className="pricing-features">
      {features.map((feature, index) => (
        <li key={index}>
          <i className="fas fa-check"></i> {feature}
        </li>
      ))}
    </ul>
    <a href="#contact" className="btn pricing-btn">
      Choose Plan
    </a>
  </div>
);

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Essential",
      price: "99",
      description: "Perfect for simple wedding announcements",
      features: [
        "Basic design customization",
        "Mobile responsive design",
        "Digital RSVP management",
        "Event details page",
        "30-day support"
      ]
    },
    {
      name: "Premium",
      price: "199",
      description: "Our most popular package for couples",
      features: [
        "Advanced design customization",
        "Photo gallery (up to 30 photos)",
        "Custom RSVP questions",
        "Interactive maps & directions",
        "Gift registry integration",
        "60-day support"
      ],
      isPopular: true
    },
    {
      name: "Luxury",
      price: "349",
      description: "The ultimate wedding invitation experience",
      features: [
        "Fully custom design",
        "Unlimited photos & galleries",
        "Custom website domain",
        "Digital save the dates",
        "Thank you card management",
        "Guest accommodation booking",
        "Premium animations & effects",
        "Priority support for 90 days"
      ]
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-title">
          <span>Affordable Options</span>
          <h2>Pricing Plans</h2>
        </div>
        
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <PricingPlan 
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
        
        <div className="pricing-note">
          <p>
            <i className="fas fa-info-circle"></i> All plans include unlimited guests, no ads, and secure data storage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
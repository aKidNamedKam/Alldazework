export const SERVICES = [
    {
      icon: "Zap",
      title: "Vision Casting & Blue Sky Design",
      description: "Transform ambitious ideas into clear, actionable product visions that align teams and inspire stakeholders.",
      color: "from-blue-500/10 to-blue-600/10",
      border: "border-blue-200/50"
    },
    {
      icon: "Target", 
      title: "Professional Website Design",
      description: "Create stunning, conversion-focused websites that perfectly represent your brand and drive business results.",
      color: "from-green-500/10 to-green-600/10",
      border: "border-green-200/50"
    },
    // ... more services
  ] as const;
  
  export const TRUST_INDICATORS = [
    { value: "150%", label: "Conversion Improvements", color: "text-blue-600", icon: "TrendingUp" },
    { value: "2x", label: "Faster Development", color: "text-green-600", icon: "Zap" },
    { value: "50+", label: "Successful Projects", color: "text-purple-600", icon: "Target" },
    { value: "100%", label: "Client Satisfaction", color: "text-orange-600", icon: "Award" }
  ] as const;
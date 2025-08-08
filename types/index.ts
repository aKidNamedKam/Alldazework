export interface Service {
    icon: string;
    title: string;
    description: string;
    color: string;
    border: string;
  }
  
  export interface TrustIndicator {
    value: string;
    label: string;
    color: string;
    icon: string;
  }
  
  export interface AnimationProps {
    delay?: number;
    duration?: number;
    className?: string;
  }
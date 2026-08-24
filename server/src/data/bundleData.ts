export const bundleSteps = [
  { id: "step-1", order: 1, title: "Choose your cameras", subtitle: "STEP 1 OF 4", category: "cameras" },
  { id: "step-2", order: 2, title: "Choose your plan", subtitle: "STEP 2 OF 4", category: "plan" },
  { id: "step-3", order: 3, title: "Choose your sensors", subtitle: "STEP 3 OF 4", category: "sensors" },
  { id: "step-4", order: 4, title: "Add extra protection", subtitle: "STEP 4 OF 4", category: "accessories" }
];

export const bundleProducts = [
  {
    id: "wyze-cam-v4",
    stepId: "step-1",
    title: "Wyze Cam v4",
    description: "The clearest Wyze Cam ever made.",
    learnMoreUrl: "#",
    price: 27.98,
    compareAtPrice: 35.98,
    discount: "22%",
    image: "/assets/images/Wyze%20Cam%20v4.png",
    category: "Cameras",
    defaultQuantity: 1, // ← مختار افتراضيًا زي الصورة
    variants: [
      { id: "v-v4-white", name: "White", hex: "#FFFFFF", image: "/assets/images/Wyze%20Cam%20v4.png" },
      { id: "v-v4-grey", name: "Grey", hex: "#808080", image: "/assets/images/Wyze%20Cam%20v4.png" },
      { id: "v-v4-black", name: "Black", hex: "#111111", image: "/assets/images/Wyze%20Cam%20v4.png" }
    ]
  },
  {
    id: "wyze-cam-pan-v3",
    stepId: "step-1",
    title: "Wyze Cam Pan v3",
    description: "360° pan and 180° tilt security camera.",
    learnMoreUrl: "#",
    price: 34.98,
    compareAtPrice: 39.98,
    discount: "12%",
    image: "/assets/images/Wyze%20Cam%20Pan%20v3.png",
    category: "Cameras",
    defaultQuantity: 2, // ← الصورة بتوري 2
    variants: [
      { id: "v-pan3-white", name: "White", hex: "#FFFFFF", image: "/assets/images/Wyze%20Cam%20Pan%20v3.png" },
      { id: "v-pan3-black", name: "Black", hex: "#111111", image: "/assets/images/Wyze%20Cam%20Pan%20v3.png" }
    ]
  },
  {
    id: "wyze-cam-floodlight-v2",
    stepId: "step-1",
    title: "Wyze Cam Floodlight v2",
    description: "2K floodlight camera with a 160° wide-angle view for your garage.",
    learnMoreUrl: "#",
    price: 69.98,
    compareAtPrice: 89.98,
    discount: "22%",
    image: "/assets/images/Wyze%20Cam%20Floodlight%20v2.png",
    category: "Cameras",
    variants: [
      { id: "v-flood-white", name: "White", hex: "#FFFFFF", image: "/assets/images/Wyze%20Cam%20Floodlight%20v2.png" },
      { id: "v-flood-black", name: "Black", hex: "#111111", image: "/assets/images/Wyze%20Cam%20Floodlight%20v2.png" }
    ]
  },
  {
    id: "wyze-duo-cam-doorbell",
    stepId: "step-1",
    title: "Wyze Duo Cam Doorbell",
    description: "Two cameras. Two views. Double the porch protection.",
    learnMoreUrl: "#",
    price: 69.98,
    image: "/assets/images/Wyze%20Duo%20Cam%20Doorbell.png",
    category: "Cameras"
  },
  {
    id: "wyze-battery-cam-pro",
    stepId: "step-1",
    title: "Wyze Battery Cam Pro",
    description: "Protect anywhere. See everything in 2.5K HDR. No power outlet or electrician needed.",
    learnMoreUrl: "#",
    price: 89.98,
    image: "/assets/images/Wyze%20Battery%20Cam%20Pro.png",
    category: "Cameras",
    variants: [
      { id: "v-bat-white", name: "White", hex: "#FFFFFF", image: "/assets/images/Wyze%20Battery%20Cam%20Pro.png" },
      { id: "v-bat-black", name: "Black", hex: "#111111", image: "/assets/images/Wyze%20Battery%20Cam%20Pro.png" }
    ]
  },
  {
    id: "wyze-cam-plus-plan",
    stepId: "step-2",
    title: "Cam Unlimited",
    description: "Unlimited cameras, 14-day cloud recording, and smart AI alerts.",
    learnMoreUrl: "#",
    price: 9.99,
    compareAtPrice: 12.99, // ← ضروري عشان يظهر الـ strikethrough $12.99/mo زي الصورة
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=600&q=85&auto=format&fit=crop",
    category: "Plan",
    defaultQuantity: 1
  },
  {
    id: "wyze-sense-motion-sensor",
    stepId: "step-3",
    title: "Wyze Sense Motion Sensor",
    description: "Detect human motion up to 25 feet away.",
    learnMoreUrl: "#",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&q=85&auto=format&fit=crop",
    category: "Sensors",
    defaultQuantity: 2 // ← 2×29.99 = 59.98 زي الصورة
  },
  {
    id: "wyze-sense-hub",
    stepId: "step-3",
    title: "Wyze Sense Hub (Required)",
    description: "The hub that connects all your Wyze sensors.",
    learnMoreUrl: "#",
    price: 0,
    compareAtPrice: 29.92, // ← بيظهر مشطوب والسعر الفعلي "FREE"
    image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=600&q=85&auto=format&fit=crop",
    category: "Sensors",
    defaultQuantity: 1
  },
  {
    id: "wyze-microsd-card",
    stepId: "step-4",
    title: "Wyze MicroSD Card (256GB)",
    description: "Local storage for continuous recording.",
    learnMoreUrl: "#",
    price: 20.98,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&q=85&auto=format&fit=crop",
    category: "Accessories",
    defaultQuantity: 2 // ← 2×20.98 = 41.96 زي الصورة
  },
  {
    id: "wyze-chime-pro",
    stepId: "step-4",
    title: "Wyze Chime Pro",
    description: "Hear alerts anywhere in your home.",
    learnMoreUrl: "#",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=600&q=85&auto=format&fit=crop",
    category: "Accessories"
  }
];
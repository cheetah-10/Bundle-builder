export const bundleSteps = [
  {
    id: "step-1",
    order: 1,
    title: "Choose your cameras",
    subtitle: "STEP 1 OF 4",
    category: "cameras"
  },
  {
    id: "step-2",
    order: 2,
    title: "Choose your plan",
    subtitle: "STEP 2 OF 4",
    category: "plan"
  },
  {
    id: "step-3",
    order: 3,
    title: "Choose your sensors",
    subtitle: "STEP 3 OF 4",
    category: "sensors"
  },
  {
    id: "step-4",
    order: 4,
    title: "Add extra protection",
    subtitle: "STEP 4 OF 4",
    category: "accessories"
  }
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
    discountBadge: "Save 22%",
    image: "https://images.wyze.com/wyze-cam-v4/v4-white.png",
    category: "Cameras",
    variants: [
      { id: "v-v4-white", name: "White", hex: "#FFFFFF" },
      { id: "v-v4-grey", name: "Grey", hex: "#808080" },
      { id: "v-v4-black", name: "Black", hex: "#111111" }
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
    discountBadge: "Save 12%",
    image: "https://images.wyze.com/pan-v3/pan-v3-white.png",
    category: "Cameras",
    variants: [
      { id: "v-pan3-white", name: "White", hex: "#FFFFFF" },
      { id: "v-pan3-black", name: "Black", "hex": "#111111" }
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
    discountBadge: "Save 22%",
    image: "https://images.wyze.com/floodlight-v2/white.png",
    category: "Cameras",
    variants: [
      { id: "v-flood-white", name: "White", hex: "#FFFFFF" },
      { id: "v-flood-black", name: "Black", hex: "#111111" }
    ]
  },
  {
    id: "wyze-duo-cam-doorbell",
    stepId: "step-1",
    title: "Wyze Duo Cam Doorbell",
    description: "Two cameras. Two views. Double the porch protection.",
    learnMoreUrl: "#",
    price: 69.98,
    image: "https://images.wyze.com/doorbell-duo/main.png",
    category: "Cameras"
  },
  {
    id: "wyze-battery-cam-pro",
    stepId: "step-1",
    title: "Wyze Battery Cam Pro",
    description: "Protect anywhere. See everything in 2.5K HDR. No power outlet or electrician needed.",
    learnMoreUrl: "#",
    price: 89.98,
    image: "https://images.wyze.com/battery-cam-pro/main.png",
    category: "Cameras",
    variants: [
      { id: "v-bat-white", name: "White", hex: "#FFFFFF" },
      { id: "v-bat-black", name: "Black", hex: "#111111" }
    ]
  },
  {
    id: "wyze-cam-plus-plan",
    stepId: "step-2",
    title: "Cam Plus Unlimited Plan",
    description: "Unlimited cameras, 14-day cloud recording, and smart AI alerts.",
    learnMoreUrl: "#",
    price: 9.99,
    image: "https://images.wyze.com/services/cam-plus.png",
    category: "Plan"
  },
  {
    id: "wyze-entry-sensor-v2",
    stepId: "step-3",
    title: "Wyze Entry Sensor v2",
    description: "Know when doors or windows open and close.",
    learnMoreUrl: "#",
    price: 9.99,
    compareAtPrice: 12.99,
    image: "https://images.wyze.com/sensors/entry-sensor.png",
    category: "Sensors"
  },
  {
    id: "wyze-motion-sensor-v2",
    stepId: "step-3",
    title: "Wyze Motion Sensor v2",
    description: "Detect human motion up to 25 feet away.",
    learnMoreUrl: "#",
    price: 14.99,
    image: "https://images.wyze.com/sensors/motion-sensor.png",
    category: "Sensors"
  },
  {
    id: "wyze-chime-pro",
    stepId: "step-4",
    title: "Wyze Chime Pro",
    description: "Hear alerts anywhere in your home.",
    learnMoreUrl: "#",
    price: 19.99,
    image: "https://images.wyze.com/accessories/chime.png",
    category: "Accessories"
  }
];

export const initialCartState = {
  "wyze-cam-v4_v-white": {
    cartItemId: "wyze-cam-v4_v-white",
    productId: "wyze-cam-v4",
    variantId: "v-white",
    productTitle: "Wyze Cam v4",
    variantName: "White",
    price: 27.98,
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&q=80",
    category: "Cameras",
    quantity: 1
  },
  "wyze-cam-pan-v3_v-white": {
    cartItemId: "wyze-cam-pan-v3_v-white",
    productId: "wyze-cam-pan-v3",
    variantId: "v-white",
    productTitle: "Wyze Cam Pan v3",
    variantName: "White",
    price: 34.98,
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&q=80",
    category: "Cameras",
    quantity: 2
  },
  "wyze-cam-plus-plan_default": {
    cartItemId: "wyze-cam-plus-plan_default",
    productId: "wyze-cam-plus-plan",
    productTitle: "Cam Plus Unlimited Plan",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80",
    category: "Plan",
    quantity: 1
  },
  "wyze-entry-sensor_default": {
    cartItemId: "wyze-entry-sensor_default",
    productId: "wyze-entry-sensor",
    productTitle: "Entry Sensor (3-Pack)",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=400&q=80",
    category: "Sensors",
    quantity: 1
  }
};
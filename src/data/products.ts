export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  depthRating: number;
  image: string;
  gallery?: string[];
  features: string[];
  specs: ProductSpec[];
  accessories: string[];
  brochureUrl: string;
  telemetry: {
    dof: string;
    thrusters: number;
    weight: string;
    dimensions: string;
    speed?: string;
  };
}

export const products: Product[] = [
  {
    slug: "rov-genesis",
    name: "IXAR Genesis",
    tagline: "The modular, adaptable inspection workhorse",
    description: "A modular, powerful ROV with accessibility to integrate multiple attachments to perform different tasks in underwater scenarios.",
    longDescription: "Designed to perform where visibility is low and underwater conditions are harsh, our IXAR Genesis ROV combines endurance, precision, and advanced technology in a single platform. Equipped with sonar compatibility, DVL-enabled underwater positioning, and continuous AC-powered operation for extended missions, it delivers reliable performance in demanding environments. Its rugged construction is built to withstand challenging industrial conditions, while the integrated Optical Window enhances visual clarity in turbid water, enabling accurate and efficient inspection of critical underwater infrastructure.",
    depthRating: 100,
    image: "/images/products/slide_43_img_1.png",
    gallery: [
      "/images/products/slide_43_img_1.png",
      "/media/Best Pic.png",
      "/media/ROV underwater M2.png"
    ],
    features: [
      "Modular payload interface for multiple attachments",
      "Continuous AC power supply for 24/7 operations",
      "DVL-enabled underwater acoustic positioning",
      "Advanced lighting for low-visibility operations",
      "Robust protective frame built for refinery sumps"
    ],
    accessories: [
      "Ultrasonic Thickness (UT) probe",
      "Mechanical manipulator gripper (1 DOF)",
      "High-accuracy water & sediment sampler",
      "Acoustic Doppler Velocity Logger (DVL)"
    ],
    brochureUrl: "/brochures/ixar_genesis.pdf",
    telemetry: {
      dof: "6 Degrees of Freedom",
      thrusters: 8,
      weight: "14-15 kg",
      dimensions: "460 × 340 × 260 mm",
      speed: "1.0 m/s"
    },
    specs: [
      { label: "Dimensions", value: "460 × 340 × 260 mm" },
      { label: "Weight in Air", value: "14.5 kg" },
      { label: "Depth Rating", value: "100 meters (330 ft)" },
      { label: "Power Source", value: "Continuous AC Power Tether" },
      { label: "Degrees of Freedom", value: "6 DOF (8 Thrusters)" },
      { label: "Camera", value: "1080p Full HD low-light camera" },
      { label: "Lighting", value: "4 × 1500 lm LED adjustable lights" },
      { label: "Operating Temperature", value: "0°C to +45°C" },
      { label: "Positioning", value: "DVL & USBL acoustic navigation compatible" }
    ]
  },
  {
    slug: "rov-volt",
    name: "ROV Volt",
    tagline: "Compact, rapid deployment inspection platform",
    description: "A compact and lightweight ROV engineered for rapid deployment, delivering exceptional manoeuvrability and plug-and-play setup.",
    longDescription: "Compact, portable, and ready for rapid deployment, the ROV Volt is designed for fast and efficient underwater inspections. Its lightweight, plug-and-play design allows easy access through small manholes and confined spaces, making it ideal for challenging inspection environments. Equipped with a high-definition camera for exceptional underwater imaging and multi-display live streaming, it enables real-time collaboration during inspections. Powered by replaceable batteries for extended operation and rated for depths up to 150 meters, it delivers reliable performance, flexibility, and convenience for a wide range of underwater inspection applications.",
    depthRating: 150,
    image: "/images/products/slide_43_img_2.png",
    gallery: [
      "/images/products/slide_43_img_2.png",
      "/media/Robotics ROV.jpg"
    ],
    features: [
      "Ultra-portable, fits in single travel case",
      "Fast deployment through standard 500mm manholes",
      "Multi-display live stream via Wi-Fi link",
      "Replaceable battery system with hot-swaps",
      "High-stability auto-heading and auto-depth control"
    ],
    accessories: [
      "Hot-swappable battery charger case",
      "Integrated laser scaler for defect sizing",
      "Confined-space tether deployment reel (100m)",
      "Rugged controller console with iPad mount"
    ],
    brochureUrl: "/brochures/ixar_volt.pdf",
    telemetry: {
      dof: "6 Degrees of Freedom",
      thrusters: 6,
      weight: "5.7 kg",
      dimensions: "480 × 267 × 165 mm",
      speed: "1.2 m/s"
    },
    specs: [
      { label: "Dimensions", value: "480 × 267 × 165 mm" },
      { label: "Weight in Air", value: "5.7 kg" },
      { label: "Depth Rating", value: "150 meters (490 ft)" },
      { label: "Power Source", value: "Replaceable Li-ion battery (Up to 3 hours runtime)" },
      { label: "Degrees of Freedom", value: "6 DOF (Omnidirectional)" },
      { label: "Camera", value: "12 MP / 4K UHD video capability" },
      { label: "Lighting", value: "2 × 2000 lm LED adjustable lights" },
      { label: "Operating Temperature", value: "-10°C to +45°C" },
      { label: "Deployment Time", value: "Under 3 minutes" }
    ]
  },
  {
    slug: "rov-vector",
    name: "ROV Vector",
    tagline: "Next-generation professional intervention platform",
    description: "Engineered for versatile inspection and intervention, offering multi-payload compatibility and 200m depth rating.",
    longDescription: "ROV Vector is a next-generation underwater robotic platform engineered for versatile inspection and intervention missions. Equipped with a high-performance imaging system, ROV Vector delivers exceptional underwater footage while providing the flexibility, precision, and reliability demanded by modern industrial operations. The Vector is compatible with a wide range of intelligent accessories, making it a versatile solution for industrial inspections, infrastructure assessments, search operations, and scientific exploration.",
    depthRating: 200,
    image: "/images/products/slide_43_img_3.png",
    gallery: [
      "/images/products/slide_43_img_3.png",
      "/media/ROV underwater M2.png"
    ],
    features: [
      "Maximum depth rating of 200m for deep surveys",
      "High-thrust propulsion to work in currents up to 2 knots",
      "Dual payload slots for parallel sensor integration",
      "Acoustic imaging sonar integration ready",
      "Rugged hard-anodized aluminum inner chassis"
    ],
    accessories: [
      "Dual-frequency imaging sonar (Oculus/BlueView)",
      "Multi-jointed robotic manipulator arm",
      "Laser line profiler for concrete crack mapping",
      "Fiber-optic tether upgrade kit (up to 500m)"
    ],
    brochureUrl: "/brochures/ixar_vector.pdf",
    telemetry: {
      dof: "6 Degrees of Freedom",
      thrusters: 8,
      weight: "8 kg",
      dimensions: "608 × 294 × 196 mm",
      speed: "1.5 m/s"
    },
    specs: [
      { label: "Dimensions", value: "608 × 294 × 196 mm" },
      { label: "Weight in Air", value: "8.0 kg" },
      { label: "Depth Rating", value: "200 meters (660 ft)" },
      { label: "Power Source", value: "Dual Li-ion smart batteries (3 hours runtime)" },
      { label: "Degrees of Freedom", value: "6 DOF (Omnidirectional)" },
      { label: "Camera", value: "12 MP / 4K UHD video capability" },
      { label: "Lighting", value: "2 × 4000 lm LED adjustable lights" },
      { label: "Operating Temperature", value: "-10°C to +45°C" },
      { label: "Payload Capacity", value: "Up to 2.5 kg active payload" }
    ]
  },
  {
    slug: "rov-titan",
    name: "ROV Titan",
    tagline: "Industrial-grade heavy-duty subsea robot",
    description: "Combines industrial construction with high-thrust performance to tackle complex deep-water challenges.",
    longDescription: "Designed for heavy-duty underwater operations, ROV Titan combines industrial-grade construction with high-thrust performance to tackle complex inspection challenges. Its modular architecture and robust capabilities make it the ideal solution for deep, demanding, and critical underwater applications. Equipped with a high-definition camera, powerful lighting, and multi-display live streaming, it delivers exceptional underwater visuals and real-time collaboration during inspections. Its 150m rating and modular frame provide the flexibility and endurance required for extended inspection missions in industrial plants.",
    depthRating: 150,
    image: "/images/products/slide_43_img_4.png",
    gallery: [
      "/images/products/slide_43_img_4.png",
      "/media/ROV Port.png"
    ],
    features: [
      "Industrial-grade heavy-duty chassis construction",
      "High-thrust manoeuvrability in high-turbulence zones",
      "Modular frame allows rapid accessory swaps",
      "Dual 4K cameras (front and rear facing)",
      "High payload capacity up to 5kg for NDT kits"
    ],
    accessories: [
      "Heavy-duty dual-jaw gripper",
      "Subsea cleaning cavitation brush tool",
      "Cathodic Protection (CP) contact probe",
      "Multiplexer box for auxiliary sensor integration"
    ],
    brochureUrl: "/brochures/ixar_titan.pdf",
    telemetry: {
      dof: "6 Degrees of Freedom",
      thrusters: 8,
      weight: "20 kg",
      dimensions: "608 × 294 × 196 mm",
      speed: "1.5 m/s"
    },
    specs: [
      { label: "Dimensions", value: "608 × 294 × 196 mm" },
      { label: "Weight in Air", value: "20.0 kg" },
      { label: "Depth Rating", value: "150 meters (490 ft)" },
      { label: "Power Source", value: "High-capacity battery block or surface power adapter" },
      { label: "Degrees of Freedom", value: "6 DOF (Omnidirectional)" },
      { label: "Camera", value: "12 MP (1/2.3\" CMOS) 4K UHD video" },
      { label: "Lighting", value: "4 × 1500 lm LED adjustable lights" },
      { label: "Operating Temperature", value: "-10°C to +45°C" },
      { label: "Max Speed", value: "1.5 m/s (3 knots)" }
    ]
  },
  {
    slug: "magnetic-crawlers",
    name: "IXAR Magnetic Crawler",
    tagline: "High-precision vertical steel asset scanner",
    description: "Engineered for NDT inspection and thickness gauging on vertical steel surfaces like storage tanks and ship hulls.",
    longDescription: "The IXAR Magnetic Crawler is a specialized robotic platform designed to scale vertical steel structures. Using high-attraction rare-earth magnetic wheels, it adheres securely to wet or dry steel plates. It is equipped with Ultrasonic Thickness (UT) testing sensors to scan for internal corrosion and thinning in real time, making it invaluable for oil storage tanks, pressure vessels, and dry docks. By replacing scaffolding and rope access, the crawler reduces inspection costs and completely eliminates fall hazards.",
    depthRating: 50,
    image: "/images/products/slide_43_img_5.png",
    gallery: [
      "/images/products/slide_43_img_5.png",
      "/media/Tank Inspection.jpg"
    ],
    features: [
      "Permanent rare-earth magnetic wheels with high traction force",
      "Real-time Ultrasonic Thickness (UT) logging on steel plates",
      "High-resolution visual inspection camera with ring light",
      "Failsafe mechanical safety tether attachment points",
      "Submersible capability for splash zone or shallow water works"
    ],
    accessories: [
      "Dry ultrasonic probe couplant dispenser system",
      "Eddy Current weld inspection scanner package",
      "Laser displacement sensor for surface pitting measurements",
      "Wireless transmitter module for dry-land operations"
    ],
    brochureUrl: "/brochures/ixar_crawler.pdf",
    telemetry: {
      dof: "2 Degrees of Freedom (Drive/Turn)",
      thrusters: 0,
      weight: "12 kg",
      dimensions: "420 × 380 × 180 mm",
      speed: "0.5 m/s"
    },
    specs: [
      { label: "Dimensions", value: "420 × 380 × 180 mm" },
      { label: "Weight", value: "12.0 kg" },
      { label: "Magnetic Adhesion Force", value: "120 kg (safety factor >10×)" },
      { label: "Operating Environment", value: "Dry steel, splash zones, and shallow water up to 5m depth" },
      { label: "Payload Capacity", value: "Up to 8.0 kg vertical load" },
      { label: "NDT Capabilities", value: "Ultrasonic Thickness (UT), Eddy Current Testing (ECT)" },
      { label: "Steering", value: "Skid-steer differential drive" },
      { label: "Cable Length", value: "50m umbilical (expandable to 100m)" }
    ]
  },
  {
    slug: "ship-hull-cleaner",
    name: "IXAR Aqua Jazz Hull Cleaner",
    tagline: "Eco-friendly underwater vessel cleaning robot",
    description: "Utilizes non-destructive cavitation-brush heads to clean biofouling from ship hulls at anchor, restoring vessel performance.",
    longDescription: "The IXAR Aqua Jazz Hull Cleaner (or ship hull cleaner) is a heavy-duty, hybrid magnetic-suction robot built to remove biofouling from vessel hulls without damaging the underlying anti-fouling paint. Operating while the vessel is at anchor, it uses high-speed cavitation nozzles or specialized soft brushes to dislodge barnacles and slime, which are vacuumed away via an optional filtration unit. Regular cleaning using the Aqua Jazz restores the hull's hydrodynamic efficiency, reduces fuel burn by up to 10-15%, and prevents the spread of invasive marine species, ensuring compliance with global environmental standards.",
    depthRating: 30,
    image: "/images/products/slide_43_img_6.png",
    gallery: [
      "/images/products/slide_43_img_6.png",
      "/media/Ship Inspection.jpg"
    ],
    features: [
      "Cavitation cleaning heads that do not scrape the hull paint",
      "High suction force generator maintaining contact during operations",
      "Live optical monitoring for before-and-after validation",
      "Works underwater while the ship is docked or at anchor",
      "High-efficiency cleaning rate up to 150 square meters per hour"
    ],
    accessories: [
      "Cavitation nozzle array package",
      "Debris suction hose & surface filtration system",
      "Integrated laser scaling camera",
      "High-pressure water pump surface unit"
    ],
    brochureUrl: "/brochures/ixar_hull_cleaner.pdf",
    telemetry: {
      dof: "2 Degrees of Freedom (Drive/Turn)",
      thrusters: 4,
      weight: "25 kg",
      dimensions: "720 × 580 × 320 mm",
      speed: "0.8 m/s"
    },
    specs: [
      { label: "Dimensions", value: "720 × 580 × 320 mm" },
      { label: "Weight", value: "25.0 kg" },
      { label: "Adhesion Mechanism", value: "Combined magnetic wheels and hydraulic thruster suction" },
      { label: "Cleaning Rate", value: "100–150 m²/hr (based on biofouling density)" },
      { label: "Operating Depth", value: "Splash zone down to 30 meters" },
      { label: "Visual System", value: "Dual low-light cameras with high-intensity floodlights" },
      { label: "Cleaning Method", value: "Cavitation water-jet jets / rotary soft brushes" },
      { label: "Surface Command Console", value: "Dual joystick station with telemetry overlay screen" }
    ]
  }
];

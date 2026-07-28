export interface TeamMember {
  name: string;
  role: string;
  education: string;
  image: string;
  bio: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Rohan Shirwaiker",
    role: "Co-Founder & Chief Technology Officer",
    education: "IIT Bombay Alumnus",
    image: "/images/team/slide_64_img_2.jpg",
    bio: "Specializes in underwater robotics controls and hydrodynamic modeling. Oversees the core hardware and software development of the Genesis and Titan ROV lines."
  },
  {
    name: "Dr. Madhavan Krishnan",
    role: "Co-Founder & Chief Operations Officer",
    education: "IIT Madras Alumnus",
    image: "/images/team/slide_64_img_3.jpg",
    bio: "Expert in Non-Destructive Testing (NDT) and marine structural diagnostics. Leads the field operations and industrial client integrations for refinery and port projects."
  }
];

export const timelineMilestones: TimelineMilestone[] = [
  {
    year: "2019",
    title: "Founding & R&D Phase",
    description: "IXAR Robotics was incubated at IIT Bombay, starting research on micro-ROV prototypes and magnetic crawler adhesion systems."
  },
  {
    year: "2020",
    title: "Incorporation & Defense Support",
    description: "Incorporated as a Private Limited Company. Began supporting specialized inspection operations and safety monitoring for the Indian Army and municipal security."
  },
  {
    year: "2021",
    title: "Commercialization of ROV Genesis",
    description: "Launched the first industrial-grade modular ROV (Genesis) and completed 20+ cooling tower sump inspections for Reliance Industries (RIL)."
  },
  {
    year: "2022",
    title: "Fleet Expansion",
    description: "Acquired critical NDT assets, expanded the fleet to include ROV Volt, Vector, and Titan, and launched vertical steel-climbing magnetic crawlers."
  }
];

export const jobOpenings: JobOpening[] = [
  {
    id: "rov-software-engineer",
    title: "Embedded Systems & ROV Software Engineer",
    department: "R&D Software",
    location: "Mumbai (IIT Bombay Research Park)",
    type: "Full-Time",
    experience: "2–4 Years",
    description: "We are looking for an Embedded Systems Engineer to write real-time controls, sensor integration drivers, and telemetry interfaces for our underwater ROV fleet.",
    requirements: [
      "Proficiency in C++ and Python.",
      "Experience with ROS (Robot Operating System) and microcontroller programming.",
      "Understanding of control theory (PID loops) and sensor fusion (IMU, DVL, Sonar).",
      "Familiarity with serial communications (RS485, CAN bus, Ethernet)."
    ]
  },
  {
    id: "ndt-field-engineer",
    title: "Subsea NDT Field Operations Engineer",
    department: "Operations",
    location: "Chennai / Site-based",
    type: "Full-Time",
    experience: "1–3 Years",
    description: "Lead field inspections at refineries, ports, and power plants, operating ROVs and magnetic crawlers to perform Ultrasonic Thickness and Eddy Current testing.",
    requirements: [
      "Degree in Mechanical, Marine, or Instrumentation Engineering.",
      "ASNT Level II certification in UT or ECT is highly preferred.",
      "Practical troubleshooting skills (mechanics, electrical connections).",
      "Willingness to travel to client sites and offshore installations."
    ]
  },
  {
    id: "mechanical-designer",
    title: "Robotics Mechanical Design Engineer",
    department: "R&D Hardware",
    location: "Mumbai",
    type: "Full-Time",
    experience: "2–5 Years",
    description: "Design structural frames, magnetic wheel linkages, pressure seals, and custom actuator hulls for our underwater and climbing robotic units.",
    requirements: [
      "Expertise in SolidWorks or Autodesk Inventor.",
      "Experience designing waterproof enclosures (IP68, depth rated).",
      "Knowledge of materials (marine alloys, titanium, plastics) and fabrication techniques.",
      "Understanding of finite element analysis (FEA) for pressure vessels."
    ]
  }
];

export const faqs: FAQ[] = [
  {
    question: "Do your ROVs require plant shutdown or tank dewatering?",
    answer: "No. All IXAR robotic systems are engineered to operate in fully active industrial environments. Our ROVs perform inspections in full water storage reservoirs, active cooling sumps, and piping structures, eliminating shutdown downtime and dewatering costs."
  },
  {
    question: "What is the maximum depth rating of your subsea vehicles?",
    answer: "Our ROV fleet ranges from the portable ROV Volt (rated for 150m depth) to the ROV Vector, which is rated for deep-water industrial and offshore operations up to 200 meters (660 ft)."
  },
  {
    question: "How do you verify the thickness of steel tank walls?",
    answer: "We deploy our vertical-climbing Magnetic Crawler, which sticks to the steel walls using powerful rare-earth magnets. It carries an Ultrasonic Thickness (UT) probe that takes continuous steel plate measurements through paint layers and streams them to the command station."
  },
  {
    question: "Are your ROVs safe to operate in drinking water systems?",
    answer: "Yes, our ROV Volt is disinfected using food-safe chemical treatments prior to deployment. This process meets strict municipal water safety standards and avoids any biological contamination."
  },
  {
    question: "Can your robots operate in turbid or zero-visibility water?",
    answer: "Yes. In low-visibility environments, we equip our ROVs (like Genesis and Vector) with dual-frequency scanning sonars and profiling scanners. These acoustic systems can map structures and detect defects through thick mud and silt, where cameras cannot see."
  }
];

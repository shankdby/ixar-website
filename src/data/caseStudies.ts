export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  application: string;
  technology: string;
  duration: string;
  challenge: string;
  solution: string;
  methodology: string;
  robotUsed: string;
  workflow: string[];
  results: string;
  metrics: { label: string; value: string }[];
  image: string;
  gallery: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "cooling-tower-sump-inspection",
    title: "Cooling Tower Sump Inspection",
    client: "Reliance Industries Limited (RIL)",
    industry: "Energy",
    application: "Cooling Tower Sump Inspection",
    technology: "Submersible ROV",
    duration: "2 Months",
    challenge: "Cooling tower sumps are confined underwater environments where conventional inspection methods often involve significant safety risks and operational challenges. Draining sumps causes massive refinery downtime costing millions, while manual diver entry is hazardous due to chemical presence and active suction.",
    solution: "IXAR Robotic Solutions deployed advanced Underwater ROVs to inspect 20+ cooling tower sumps without draining liquid or halting plant operations, eliminating diver risk and saving millions in downtime.",
    methodology: "ROVs were deployed through narrow access manways, logging 1080p geotagged video of concrete bases, support pillars, and pipe joints while using laser scalers to measure concrete scour and steel flange corrosion.",
    robotUsed: "ROV Genesis / Titan",
    workflow: [
      "Safety briefing and hazard containment checks.",
      "Deployment through narrow manway access point.",
      "Real-time visual monitoring of base, support pillars, and pipe joints.",
      "Laser-scaler measurement of concrete scour and flange gap corrosion.",
      "Delivery of detailed structural integrity audit report."
    ],
    results: "Successfully audited 20+ sumps with 0 hours of refinery downtime, delivering high-resolution video mapping all concrete cracks and pipe corrosion for targeted maintenance.",
    metrics: [
      { label: "Sumps Inspected", value: "20+" },
      { label: "Refinery Downtime", value: "0 Hours" },
      { label: "Diver Risk Removed", value: "100%" },
      { label: "Inspection Accuracy", value: "99.2%" }
    ],
    image: "/images/case-studies/cs1.png",
    gallery: [
      "/images/case-studies/cs1.png",
      "/media/Piles Inspection.jpg"
    ]
  },
  {
    slug: "water-storage-tank-inspection",
    title: "Water Storage Tank Inspection",
    client: "Municipal Water Utility Corporation",
    industry: "Infrastructure",
    application: "Water Utility Tank Inspection",
    technology: "Sanitized Compact ROV",
    duration: "3 Weeks",
    challenge: "Drinking water reservoirs require periodic structural audits. Draining tanks disrupts municipal supply lines and wastes millions of gallons of treated water, while diver entry risks drinking water contamination.",
    solution: "Deployed food-grade sanitized ROV Volt to conduct full interior wall, joint seal, and floor sediment scans while reservoirs remained online and full.",
    methodology: "Lowered sanitized ROV Volt through top access hatches. Autodepth and autoheading controls executed systematic grid sweeps of columns and base seals.",
    robotUsed: "ROV Volt",
    workflow: [
      "Chemical sterilization of ROV Volt to potable water standards.",
      "Hatch lowering with neutrally buoyant tethers.",
      "Grid sweep of base seals, joint liners, and wall columns.",
      "Potable compliance audit reporting."
    ],
    results: "Audited 4 large municipal drinking water reservoirs, saving 12M gallons of water and eliminating public supply disruption.",
    metrics: [
      { label: "Water Saved", value: "12M Gallons" },
      { label: "Tanks Audited", value: "4 Reservoirs" },
      { label: "Downtime", value: "0 Hours" },
      { label: "Sanitation Standard", value: "Potable Safe" }
    ],
    image: "/images/case-studies/cs2.jpg",
    gallery: [
      "/images/case-studies/cs2.jpg",
      "/media/Tank Inspection.jpg"
    ]
  },
  {
    slug: "bridge-piles-inspection",
    title: "Bridge Piles Inspection",
    client: "National Highway & Infrastructure Authority",
    industry: "Infrastructure",
    application: "Bridge Pile Structural Audit",
    technology: "Sonar-Enabled Underwater ROV",
    duration: "1 Month",
    challenge: "Bridge pile foundations undergo intense river currents and underwater scour. Mud-heavy waters render visual diver checks ineffective, and swift currents endanger human divers.",
    solution: "Deployed high-thrust ROV Vector equipped with dual-frequency scanning sonar and optical cameras to map riverbed scour holes and structural pile cracks.",
    methodology: "Executed automated circular grid sweeps around 12 main bridge piers. Sonar generated 3D profiling maps of scour holes while HD cameras logged rebar exposure.",
    robotUsed: "ROV Vector",
    workflow: [
      "Current calibration for 2.5-knot river flow.",
      "Boat deployment near bridge piers.",
      "Sonar 3D scour hole profiling sweep.",
      "Visual crack and rebar corrosion mapping with laser scalers."
    ],
    results: "Mapped 12 main bridge piers, pinpointed scour damage on 3 piers, and enabled precise grout reinforcement without traffic disruption.",
    metrics: [
      { label: "Piers Inspected", value: "12 Foundations" },
      { label: "Max Current Handled", value: "2.5 Knots" },
      { label: "Laser Precision", value: "±0.5 mm" },
      { label: "Traffic Downtime", value: "0 Hours" }
    ],
    image: "/images/case-studies/cs3.jpg",
    gallery: [
      "/images/case-studies/cs3.jpg",
      "/media/Bridge.jpg"
    ]
  },
  {
    slug: "jetty-piles-inspection",
    title: "Jetty Piles Inspection",
    client: "State Port Terminal Authority",
    industry: "Maritime",
    application: "Jetty Pile Corrosion Survey",
    technology: "Heavy ROV & Ultrasonic Thickness (UT)",
    duration: "1.5 Months",
    challenge: "Port jetty piles experience severe splash-zone marine growth and tidal corrosion. Propeller suction from harbor ships prevents human diver entry.",
    solution: "Deployed heavy-duty ROV Titan equipped with subsea rotary cleaning brushes and Ultrasonic Thickness (UT) probes to measure steel wall thickness without halting harbor traffic.",
    methodology: "ROV Titan cleared biofouling on selected inspection points and pressed UT sensors against steel piles to stream real-time wall thickness logs.",
    robotUsed: "ROV Titan",
    workflow: [
      "Crane launch from jetty deck.",
      "Auto-positioning lock on steel piles.",
      "Rotary brush biofouling removal.",
      "UT probe thickness logging across splash and submerged zones."
    ],
    results: "Inspected 80 steel jetty piles, identified 5 critical piles with >35% thickness loss, and enabled targeted cathodic sleeve installation.",
    metrics: [
      { label: "Piles Inspected", value: "80 Piles" },
      { label: "Thickness Points", value: "320 Points" },
      { label: "Port Disruption", value: "0 Hours" },
      { label: "Cost Savings", value: "45%" }
    ],
    image: "/images/case-studies/cs4.jpg",
    gallery: [
      "/images/case-studies/cs4.jpg",
      "/media/PSP Inspection.jpg"
    ]
  },
  {
    slug: "eddy-current-test-underwater",
    title: "Eddy Current Test Underwater",
    client: "Subsea Offshore Energy Operator",
    industry: "Energy",
    application: "Subsea NDT & Weld Inspection",
    technology: "ROV-Mounted Eddy Current Testing (ECT)",
    duration: "3 Weeks",
    challenge: "Subsea weld joint inspection on offshore platforms requires detecting micro-cracks beneath painted or corroded coatings without scraping off protective coatings.",
    solution: "Fitted ROV Genesis with multi-element Eddy Current Testing (ECT) arrays to scan submerged platform node welds through surface paint and marine growth.",
    methodology: "The ROV maintained magnetic chassis attachment along structural welds while sweeping ECT probes over joint geometries to stream electromagnetic defect signals.",
    robotUsed: "ROV Genesis / Vector",
    workflow: [
      "ECT probe calibration on sample weld flaws.",
      "ROV deployment to subsea platform node joint.",
      "Electromagnetic scanning of node welds through protective paint.",
      "Defect depth mapping and real-time NDT signal recording."
    ],
    results: "Scanned 24 critical structural welds, detected 2 sub-surface fatigue cracks before structural failure, and eliminated expensive surface paint scraping.",
    metrics: [
      { label: "Welds Scanned", value: "24 Nodes" },
      { label: "Coating Removal", value: "Not Required" },
      { label: "Crack Sensitivity", value: "0.2 mm" },
      { label: "NDT Precision", value: "High Grade" }
    ],
    image: "/images/case-studies/cs5.png",
    gallery: [
      "/images/case-studies/cs5.png",
      "/media/ROV M2 Underwater Crack.png"
    ]
  },
  {
    slug: "psp-inspection",
    title: "PSP Inspection",
    client: "Hydro Power Generation Corporation",
    industry: "Energy",
    application: "Pumped Storage Project Audit",
    technology: "Deep Depth ROV",
    duration: "1 Month",
    challenge: "Pumped Storage Projects (PSP) have deep water shafts, high pressure intake tunnels, and concrete penstocks operating under extreme hydraulic heads inaccessible to human divers.",
    solution: "Deployed deep-rated ROV Volt with high-intensity LED illuminators and sonar to inspect intake gates, shaft concrete lining, and penstock valve seals.",
    methodology: "The ROV navigated down 150m vertical intake shafts using fiber-optic tethers to stream HD video and sonar geometry of penstock liners.",
    robotUsed: "ROV Volt / Vector",
    workflow: [
      "Vertical shaft tether rigging and ROV deployment.",
      "150m depth descent into intake shaft.",
      "High-intensity visual scan of penstock concrete joints.",
      "Intake gate seal and stoplog seating inspection."
    ],
    results: "Completed structural inspection of upper/lower PSP reservoirs and penstocks, confirming gate seal integrity and catching concrete cavitation early.",
    metrics: [
      { label: "Depth Reached", value: "150 Meters" },
      { label: "Shafts Scanned", value: "2 PSP Shafts" },
      { label: "Plant Downtime", value: "Zero" },
      { label: "Safety Rating", value: "100%" }
    ],
    image: "/images/case-studies/cs6.jpg",
    gallery: [
      "/images/case-studies/cs6.jpg",
      "/media/Hydro Dam.jpg"
    ]
  },
  {
    slug: "bridge-piles-structural-survey",
    title: "Bridge Piles Structural Survey",
    client: "Public Works & Coastal Department",
    industry: "Infrastructure",
    application: "Coastal Bridge Foundation Audit",
    technology: "Submersible ROV & Sonar",
    duration: "3 Weeks",
    challenge: "Coastal highway bridges face high salinity, tidal currents, and marine growth that erode pile caps and underwater concrete supports.",
    solution: "Deployed ROV Vector to perform comprehensive structural condition assessments and sonar seabed mapping around coastal bridge foundations.",
    methodology: "ROV Vector conducted systematic vertical wall crawls and sonar sweeps of 16 coastal bridge piles, measuring biofouling thickness and rebar corrosion.",
    robotUsed: "ROV Vector",
    workflow: [
      "Tidal window planning and boat deployment.",
      "Sonar mapping of seabed foundation profile.",
      "Visual scan of underwater pile caps and splash-zone joints.",
      "Delivery of concrete integrity and rebar exposure logs."
    ],
    results: "Audited 16 coastal pile foundations, mapped concrete erosion rates, and provided public works engineers with exact repair coordinates.",
    metrics: [
      { label: "Piles Scanned", value: "16 Foundations" },
      { label: "Resolution", value: "1080p HD" },
      { label: "Bridge Downtime", value: "0 Hours" },
      { label: "Data Accuracy", value: "98.5%" }
    ],
    image: "/images/case-studies/cs7.jpg",
    gallery: [
      "/images/case-studies/cs7.jpg",
      "/media/Bridge.jpg"
    ]
  },
  {
    slug: "etp-facility-inspected-using-rov",
    title: "ETP Facility Inspected Using ROV",
    client: "Industrial Chemical Complex",
    industry: "Infrastructure",
    application: "Hazardous ETP Sump Audit",
    technology: "Chemical-Resistant ROV",
    duration: "2 Weeks",
    challenge: "Effluent Treatment Plants (ETP) contain corrosive acids, toxic industrial sludge, and hazardous chemical sumps where human diving is strictly prohibited.",
    solution: "Deployed chemically retrofitted ROV Genesis into active ETP neutralization sumps, inspecting wall liners and submerged pipes without draining chemical liquids.",
    methodology: "The ROV entered through access manholes, using chemically inert seals and tethers to log concrete liner corrosion and joint leakage.",
    robotUsed: "ROV Genesis",
    workflow: [
      "Chemical seal prep and ROV tether shielding.",
      "Lowering into active neutralization sump.",
      "Inspecting acid-resistant floor liners and wall joints.",
      "ROV chemical wash and decontamination upon retrieval."
    ],
    results: "Inspected 3 active chemical sumps with zero plant downtime, identifying localized liner erosion for targeted patching during scheduled maintenance.",
    metrics: [
      { label: "Sumps Audited", value: "3 Chemical Sumps" },
      { label: "Plant Downtime", value: "0 Hours" },
      { label: "Diver Risk", value: "Zero" },
      { label: "Decon Time", value: "1 Hour" }
    ],
    image: "/images/case-studies/cs8.jpg",
    gallery: [
      "/images/case-studies/cs8.jpg",
      "/media/Dam.jpg"
    ]
  },
  {
    slug: "tank-inspection-using-crawler",
    title: "Tank Inspection Using Crawler",
    client: "Petrochemical Storage Terminal",
    industry: "Energy",
    application: "Refinery Fuel Tank UT Inspection",
    technology: "Vertical Magnetic Crawler NDT",
    duration: "3 Weeks",
    challenge: "Inspecting massive fuel storage tanks requires building scaffolding, removing protective coatings, and sending climbing crews to dangerous heights.",
    solution: "Deployed IXAR's Magnetic Crawler to climb vertical steel walls and dome plates, taking continuous Ultrasonic Thickness (UT) measurements through paint layers.",
    methodology: "High-adhesion magnetic wheels drove the crawler in vertical strips, capturing steel thickness every 10cm and streaming live NDT heatmaps.",
    robotUsed: "IXAR Magnetic Crawler",
    workflow: [
      "Surface magnetic latching and safety line attachment.",
      "Vertical wall climbing strip execution.",
      "Continuous UT thickness measurement through paint.",
      "Real-time plate corrosion heatmap generation."
    ],
    results: "Mapped 4 fuel storage tanks without scaffolding or grit blasting, saving 60% in setup costs and eliminating worker height hazards.",
    metrics: [
      { label: "Tanks Scanned", value: "4 Fuel Tanks" },
      { label: "Scaffolding Saved", value: "100%" },
      { label: "UT Points", value: "1,200+ Logs" },
      { label: "Cost Reduction", value: "60%" }
    ],
    image: "/images/case-studies/cs9.jpg",
    gallery: [
      "/images/case-studies/cs9.jpg",
      "/media/Tank Inspection.jpg"
    ]
  },
  {
    slug: "ganpati-visarjan-mumbai",
    title: "Ganpati Visarjan Mumbai",
    client: "Municipal Corporation & Police Department",
    industry: "Search & Rescue",
    application: "Public Safety & Subsea Surveillance",
    technology: "Compact ROV & Live Feed",
    duration: "1 Week",
    challenge: "During Mumbai's annual Ganpati Visarjan festival, millions gather along crowded beaches for idol immersion, creating high risks of drowning and underwater hazards.",
    solution: "Deployed ROVs along key beach immersion zones (Girgaon Chowpatty, Juhu) to provide real-time underwater video feeds and emergency search support.",
    methodology: "ROV units monitored active immersion channels, scanning water floor areas for submerged obstacles, debris, and swimmer distress signals.",
    robotUsed: "ROV Volt / Vector",
    workflow: [
      "Beach command station setup and ROV tether deployment.",
      "Real-time subsea channel surveillance during peak immersion hours.",
      "Immediate video relay to beach safety command units.",
      "Post-immersion seabed clutter and hazard verification."
    ],
    results: "Provided continuous underwater safety monitoring across major Mumbai beach sites, ensuring zero subsea entrapment incidents during peak festival days.",
    metrics: [
      { label: "Beaches Covered", value: "Major Sites" },
      { label: "Live Feed Uptime", value: "100%" },
      { label: "Incident Rate", value: "Zero" },
      { label: "Safety Rating", value: "High Priority" }
    ],
    image: "/images/case-studies/cs10.jpg",
    gallery: [
      "/images/case-studies/cs10.jpg",
      "/media/Environmental Research & Rescue Applications.jpg"
    ]
  },
  {
    slug: "port-inspection",
    title: "Port Inspection",
    client: "Major Commercial Port Authority",
    industry: "Maritime",
    application: "Berth & Quay Wall Audit",
    technology: "Multi-Sensor ROV",
    duration: "1 Month",
    challenge: "Commercial port quay walls and shipping berths undergo constant wave impact and vessel berthing forces. Diver checks interrupt vessel cargo operations.",
    solution: "Deployed multi-sensor ROVs to map concrete quay walls, dolphin piles, and berth foundations without stopping ship docking or container unloading.",
    methodology: "The ROV executed horizontal wall traverses along berth faces, capturing 1080p video of concrete cracking, joint displacement, and fender pile wear.",
    robotUsed: "ROV Titan / Genesis",
    workflow: [
      "Harbor master coordination and ROV dockside launch.",
      "Horizontal traverse along quay wall concrete caissons.",
      "Fender panel bracket and pile joint inspection.",
      "Comprehensive structural condition report generation."
    ],
    results: "Inspected 1.2 kilometers of commercial quay walls, identified 4 damaged fender brackets, and enabled scheduled berth maintenance with zero vessel delays.",
    metrics: [
      { label: "Quay Wall", value: "1.2 km Scanned" },
      { label: "Vessel Delays", value: "0 Mins" },
      { label: "Defects Mapped", value: "4 Brackets" },
      { label: "Report Turnaround", value: "48 Hours" }
    ],
    image: "/images/case-studies/cs11.jpg",
    gallery: [
      "/images/case-studies/cs11.jpg",
      "/media/ROV Port.png"
    ]
  },
  {
    slug: "jetty-inspected-using-rov",
    title: "Jetty Inspected Using ROV",
    client: "Offshore Oil Terminal",
    industry: "Maritime",
    application: "Subsea Jetty & Pipeline Landing Survey",
    technology: "Submersible ROV & Sonar",
    duration: "3 Weeks",
    challenge: "Offshore tanker loading jetties and subsea pipeline landings operate in deep open water where strong waves make diver inspections extremely dangerous.",
    solution: "Deployed ROV Vector from terminal support vessels to inspect submerged steel piles, pipeline risers, and ocean floor mattress protection.",
    methodology: "ROV Vector performed vertical pile inspections and tracked subsea pipeline landings using high-resolution video and profiling sonar.",
    robotUsed: "ROV Vector / Titan",
    workflow: [
      "Terminal vessel deployment and positioning lock.",
      "Subsea pipeline riser visual and thickness check.",
      "Offshore jetty pile foundation scour assessment.",
      "Digital engineering audit submission."
    ],
    results: "Completed full underwater inspection of oil terminal loading jetty, verifying pipeline riser integrity and confirming foundation stability.",
    metrics: [
      { label: "Risers Scanned", value: "All Risers" },
      { label: "Offshore Uptime", value: "100%" },
      { label: "Safety Record", value: "Zero Incident" },
      { label: "Depth Rating", value: "Deep Rated" }
    ],
    image: "/images/case-studies/cs12.jpg",
    gallery: [
      "/images/case-studies/cs12.jpg",
      "/media/PSP Inspection.jpg"
    ]
  }
];

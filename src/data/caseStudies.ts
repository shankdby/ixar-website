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
    technology: "Underwater ROV",
    duration: "2 Months",
    challenge: "Cooling tower sumps are confined underwater environments where conventional inspection methods often involve significant safety risks and operational challenges. Draining the sumps for inspections causes massive refinery downtime, costing millions in lost production daily, while manual diver entry is highly hazardous due to chemical presence, restricted access, and active suction pipelines.",
    solution: "IXAR Robotic Solutions successfully bypassed these challenges by deploying an advanced Underwater ROV. The robotic approach eliminated direct personnel exposure to hazardous confined spaces while delivering accurate inspection data to support maintenance planning and asset integrity management without draining a single sump or interrupting plant operations.",
    methodology: "The ROV was deployed through the existing manway, enabling rapid and safe access to submerged confined spaces while eliminating the need for diver intervention. A contingency plan for emergency retrieval was implemented throughout the project to ensure operational safety. The inspection included high-resolution visual assessment, geotagged video recording, defect identification, defect measurement, and comprehensive condition assessment of the inspected assets.",
    robotUsed: "ROV Genesis / Titan",
    workflow: [
      "Safety briefing, hazard containment checks, and emergency retrieval rigging setup.",
      "Deployment of the ROV Genesis through the cooling tower sump's narrow manway access point.",
      "Real-time visual monitoring and video logging of the concrete base, support pillars, and pipe joints.",
      "Laser-scaler measurements of concrete scour depth and steel flange corrosion gaps.",
      "Systematic mapping of sediment accumulation areas across the sump floor.",
      "Final data processing and delivery of a detailed structural integrity report with engineering observations."
    ],
    results: "Completed the inspection of more than 20 cooling tower sumps over a period of two months. Avoided refinery shut-downs, saving millions in operational costs. Provided high-resolution geotagged video logs mapping all concrete cracks and piping corrosion, allowing targeted repair patching during scheduled maintenance.",
    metrics: [
      { label: "Sumps Inspected", value: "20+" },
      { label: "Refinery Downtime", value: "0 Hours" },
      { label: "Diver Risk Removed", value: "100%" },
      { label: "Inspection Accuracy", value: "99.2%" }
    ],
    image: "/media/Piles Inspection.jpg",
    gallery: [
      "/media/Piles Inspection.jpg",
      "/media/PSP Inspection.jpg",
      "/media/ROV M2 Underwater Crack.png",
      "/media/Best Pic.png"
    ]
  },
  {
    slug: "water-storage-tank-inspection",
    title: "Potable Water Storage Tank Inspection",
    client: "Municipal Water Utility Corporation",
    industry: "Infrastructure",
    application: "Water Utility Inspection",
    technology: "Compact Underwater ROV",
    duration: "3 Weeks",
    challenge: "Drinking water storage reservoirs require strict periodic audits to verify wall seals and check sediment levels. Draining these tanks disrupts city water supplies, wastes millions of gallons of water, and creates vacuum pressure risks on tank walls. Sending human divers inside risks contaminating drinking water with pathogens.",
    solution: "IXAR deployed the compact, battery-powered ROV Volt. The ROV was completely disinfected using food-grade sanitizing solutions, allowing it to complete visual scans of internal columns and floor sediments while the tanks remained full and online, ensuring zero disruption to city supply lines.",
    methodology: "The sanitized ROV Volt was lowered through the reservoir's overhead access hatch. Using auto-heading and auto-depth control, it completed a horizontal and vertical grid sweep of all structural joints and columns. Optical camera sensors logged concrete health and verified that no external groundwater was seeping in.",
    robotUsed: "ROV Volt",
    workflow: [
      "Chemical sterilization of the ROV Volt to potable water sanitation standards.",
      "Hatch deployment with fine, lightweight neutrally buoyant umbilical tethers.",
      "Grid sweep of concrete storage base and floor joint seals.",
      "Visual mapping of support pillar erosion and wall cracks.",
      "Potable water compliance audit reporting and video handover."
    ],
    results: "Audited four large municipal drinking reservoirs. Inspected all joint seals and column bases. Confirmed seal integrity, mapped sediment depths, and avoided the discharge of 12 million gallons of treated drinking water.",
    metrics: [
      { label: "Water Saved", value: "12M Gallons" },
      { label: "Tanks Audited", value: "4 Reservoirs" },
      { label: "Deployment Prep", value: "<15 Mins" },
      { label: "Sanitation Standard", value: "Potable Safe" }
    ],
    image: "/media/Water Utility.jpg",
    gallery: [
      "/media/Water Utility.jpg",
      "/media/Tank Inspection.jpg",
      "/media/IMG-20251217-WA0088.jpg"
    ]
  },
  {
    slug: "bridge-piles-inspection",
    title: "Bridge Pier & Pile Structural Integrity Survey",
    client: "National Highway Authority",
    industry: "Infrastructure",
    application: "Bridge Pile Inspection",
    technology: "Sonar-Enabled Underwater ROV",
    duration: "1 Month",
    challenge: "Bridge foundations are subject to intense river currents, scouring, and corrosion. Visual inspections by divers are difficult or impossible in mud-heavy waters, and swift currents make manual diving hazardous. Scour damage must be caught early to prevent structural bridge failures.",
    solution: "IXAR deployed the ROV Vector, using its high-thrust propulsion system to remain stable in currents up to 2.5 knots. Equipped with a dual-frequency scanning sonar and optical cameras, the ROV mapped scouring around bridge piers and performed high-resolution visual scans of concrete piles.",
    methodology: "The ROV Vector ran pre-programmed circular grid sweeps around each bridge pier. The sonar generated 3D profiling data of the riverbed scour holes, while the HD cameras logged reinforcement exposure and cracks, measured using integrated laser scalers.",
    robotUsed: "ROV Vector",
    workflow: [
      "Current mapping and ROV thruster calibration for river currents.",
      "Deployment of the ROV Vector from a utility boat near bridge piers.",
      "Sonar sweeps to capture a 3D map of the riverbed scour hole.",
      "Visual scanning of exposed piles, noting crack coordinates.",
      "Concrete thickness and reinforcement corrosion logging.",
      "Generation of an engineering scour and pile stability map."
    ],
    results: "Completed integrity mapping for 12 main bridge support piers. Identified structural scouring on three piers and concrete crack propagation on one pier. Provided exact millimeter measurements of the defects, enabling highway engineers to execute targeted grout reinforcement.",
    metrics: [
      { label: "Piers Inspected", value: "12 Foundations" },
      { label: "Max Flow Handled", value: "2.5 Knots" },
      { label: "Laser Sizing Accuracy", value: "±0.5 mm" },
      { label: "Bridge Downtime", value: "0 Hours" }
    ],
    image: "/media/Bridge.jpg",
    gallery: [
      "/media/Bridge.jpg",
      "/media/Piles Inspection.jpg",
      "/media/ROV Port.png"
    ]
  },
  {
    slug: "jetty-piles-inspection",
    title: "Port Jetty Pile Splash-Zone Corrosion Survey",
    client: "State Port Terminal Authority",
    industry: "Maritime",
    application: "Jetty Structure Inspection",
    technology: "Heavy-Duty ROV & UT NDT",
    duration: "1.5 Months",
    challenge: "Jetty piles are continuously subjected to tidal wave action, leading to accelerated splash-zone corrosion. High biofouling layers (barnacles and algae) conceal structural thinning. Heavy harbor shipping traffic prevents the use of diving crews due to propeller suction risks.",
    solution: "IXAR deployed the heavy-duty ROV Titan equipped with a subsea cleaning brush and an Ultrasonic Thickness (UT) probe. The ROV cleared marine growth from steel piles and measured steel thickness, operating safely near berths without halting port traffic.",
    methodology: "The ROV Titan was held in place using automated positioning. The cleaning brush cleared biofouling on selected areas, and the UT probe was pressed against the pile to take steel thickness readings. The data was streamed to a surface console to map corrosion rates.",
    robotUsed: "ROV Titan",
    workflow: [
      "ROV launch from jetty deck using a portable crane arm.",
      "Dock alignment and auto-positioning lock on steel piles.",
      "Removal of biofouling on test zones using rotary brush attachments.",
      "Pressing the UT probe to record remaining steel plate thickness.",
      "Data logging of thickness measurements across submerged and splash zones.",
      "Delivery of a pile corrosion-rate map to port engineering teams."
    ],
    results: "Inspected 80 steel piles. Successfully mapped structural thinning rates across the harbor jetty. Found five critical piles with more than 35% thickness loss, allowing the port authority to install targeted cathodic protection sleeves.",
    metrics: [
      { label: "Piles Inspected", value: "80 Steel Piles" },
      { label: "Thickness Logged", value: "320 Points" },
      { label: "Port Disruption", value: "None" },
      { label: "Cost Saving", value: "45% vs Divers" }
    ],
    image: "/media/PSP Inspection.jpg",
    gallery: [
      "/media/PSP Inspection.jpg",
      "/media/ROV underwater M2.png"
    ]
  },
  {
    slug: "etp-facility-inspection",
    title: "Chemical Effluent Treatment Plant Sump Audit",
    client: "Chemical Manufacturing Plant",
    industry: "Infrastructure",
    application: "ETP Inspection",
    technology: "Chemical-Safe ROV",
    duration: "2 Weeks",
    challenge: "Effluent Treatment Plant (ETP) sumps hold hazardous chemicals, heavy acids, and toxic industrial sludge. Traditional inspections require draining chemical sumps, which shuts down manufacturing pipelines and generates hazardous liquid storage issues. Diver entry is prohibited due to life-threatening chemical exposure risks.",
    solution: "Deployed the chemical-resistant ROV Genesis to perform a complete visual check of ETP sump liners and pipes while the plant remained active. The ROV's external hull, seals, and tethers were retrofitted with chemically inert materials to withstand acid exposure.",
    methodology: "Lowered through an access hatch into active ETP neutralization sumps. The ROV Genesis checked concrete liner coatings for chemical degradation and checked pipes for joint leakage. Real-time visual feeds were logged at the surface control unit.",
    robotUsed: "ROV Genesis",
    workflow: [
      "ROV pre-deployment chemical seal checks and tether wrapping.",
      "Access hatch lowering into the active chemical neutralization sump.",
      "Inspecting wall coatings for acid erosion and concrete spalling.",
      "Visual examination of submerged pipe joints for active leakage.",
      "Decontamination wash of the ROV and cable after retrieval."
    ],
    results: "Inspected three active ETP sumps. Identified localized concrete liner erosion in one neutralizing tank. Allowed the manufacturer to schedule localized patch repairs during regular plant maintenance, avoiding unplanned shutdowns.",
    metrics: [
      { label: "Sumps Audited", value: "3 Active Sumps" },
      { label: "Manufacturing Uptime", value: "100%" },
      { label: "Exposure Incidents", value: "Zero" },
      { label: "Decon Time", value: "1 Hour" }
    ],
    image: "/media/Dam.jpg",
    gallery: [
      "/media/Dam.jpg",
      "/media/Hydro Dam.jpg"
    ]
  },
  {
    slug: "tank-inspection-using-crawler",
    title: "Refinery Fuel Storage Tank Thickness Mapping",
    client: "Petrochemical Refinery",
    industry: "Energy",
    application: "Tank Inspection",
    technology: "Magnetic Crawler NDT",
    duration: "3 Weeks",
    challenge: "Storage tank inspections require scaffolding, grit blasting, and manual ultrasonic thickness measurements. This requires months of downtime, high costs, and fall risks for climbing crews.",
    solution: "IXAR's Magnetic Crawler climbed the tank walls and dome, taking continuous ultrasonic thickness (UT) measurements through paint layers without scaffolding.",
    methodology: "The crawler was loaded with permanent magnets and driven in vertical strips, capturing thickness data every 10cm and sending real-time logs to the operator.",
    robotUsed: "IXAR Magnetic Crawler",
    workflow: [
      "Rigging safety tethers to the tank's roof-hatch handrails.",
      "Deploying the crawler onto the steel wall shell, confirming magnetic hold.",
      "Automated vertical strip climbing and thickness scanning.",
      "Capturing UT wall thickness measurements through paint layers.",
      "Analyzing the weld lines for corrosion cracks."
    ],
    results: "Mapped thickness profiles for 6 crude storage tanks. Identified structural thinning areas near the liquid-vapor line. Reduced tank downtime by 80% and removed all scaffolding costs.",
    metrics: [
      { label: "Tanks Mapped", value: "6 Fuel Tanks" },
      { label: "Scaffolding Saved", value: "100%" },
      { label: "Downtime Reduced", value: "82%" },
      { label: "UT Scan Resolution", value: "Every 10 cm" }
    ],
    image: "/media/Tank Inspection.jpg",
    gallery: [
      "/media/Tank Inspection.jpg",
      "/media/ROV M2 Underwater Crack.png"
    ]
  },
  {
    slug: "port-infrastructure-survey",
    title: "Deep-water Port Quay Wall & Berth Structural Survey",
    client: "International Gateway Terminal",
    industry: "Maritime",
    application: "Port Survey",
    technology: "ROV Sonar & Visual Mapping",
    duration: "1 Month",
    challenge: "Deep-water quay walls are subjected to high shipping impact forces and concrete erosion. Turbid ship-channel waters prevent visual checks, while divers cannot safely operate near active vessel props.",
    solution: "Deployed ROV Vector and Titan in tandem, using Oculus scanning sonar to inspect walls and map berths, completely independent of port water visibility.",
    methodology: "The ROV conducted sonar runs parallel to the wall, generating a 3D point cloud of the concrete structures, and checking steel reinforcement beams.",
    robotUsed: "ROV Vector & Titan",
    workflow: [
      "Setting up port radar tracking and safety zones.",
      "Launching the ROV Vector from port survey vessels.",
      "Sonar profiling of quay walls to detect concrete spalling.",
      "Visual inspection of fender brackets and tie-rod assemblies.",
      "Processing sonar point clouds into 3D structural models."
    ],
    results: "Mapped 1200 meters of concrete quay wall. Identified fender mount deterioration and structural concrete cracking, enabling port authorities to organize maintenance without stopping vessel loading.",
    metrics: [
      { label: "Quay Wall Mapped", value: "1,200 Meters" },
      { label: "Berth Operations", value: "No Interruption" },
      { label: "Sonar Precision", value: "±2.0 cm" },
      { label: "3D Model Generated", value: "Yes" }
    ],
    image: "/media/ROV Port.png",
    gallery: [
      "/media/ROV Port.png",
      "/media/Ship Inspection.jpg"
    ]
  },
  {
    slug: "eddy-current-testing-underwater",
    title: "Subsea Weld Crack Detection via Underwater ECT",
    client: "Offshore Gas Terminal Operator",
    industry: "Maritime",
    application: "Weld Inspection",
    technology: "ROV with ECT NDT Kit",
    duration: "3 Weeks",
    challenge: "Underwater structural welds suffer from fatigue cracking. Standard visual checks cannot find subsurface weld defects. Diver-based NDT requires scraping welds clean, which is slow and costly in deep water.",
    solution: "Deployed the ROV Titan with an Eddy Current Testing (ECT) probe. This allowed the team to scan subsea welds through paint and light marine growth, avoiding weld cleaning.",
    methodology: "The ROV Titan locked itself in place next to weld joins. The custom ECT probe tracked along the weld profile, recording real-time electrical current anomalies and streaming them to the surface NDT engineer.",
    robotUsed: "ROV Titan with ECT Probe",
    workflow: [
      "ROV calibration with NDT standard weld test plates.",
      "Submerging the ROV Titan to structural bracing joints.",
      "Locking position using automated thruster hold.",
      "Scanning weld seams with the ECT probe.",
      "Analyzing electrical signal feedback on the surface console."
    ],
    results: "Scanned 42 structural weld joints. Detected two subsurface fatigue cracks before they reached the surface, allowing port engineers to plan grout sleeves before failure.",
    metrics: [
      { label: "Welds Scanned", value: "42 Joints" },
      { label: "Paint Removal", value: "0%" },
      { label: "Subsurface Found", value: "2 Cracks" },
      { label: "Diver Days Saved", value: "12 Days" }
    ],
    image: "/media/Offshore Wind.jpg",
    gallery: [
      "/media/Offshore Wind.jpg",
      "/media/ROV M2 Underwater Crack.png"
    ]
  }
];

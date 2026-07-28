export interface SubIndustry {
  slug: string;
  name: string;
  description: string;
  image: string;
}

export interface Industry {
  slug: string;
  name: string;
  title: string;
  description: string;
  heroImage: string;
  heroVideo: string;
  overview: string;
  problems: string[];
  solution: string;
  services: string[];
  technologies: string[];
  subIndustries: SubIndustry[];
}

export const industries: Industry[] = [
  {
    slug: "energy",
    name: "Energy",
    title: "Reliable Underwater Inspection for Critical Energy Assets",
    description: "IXAR Robotic Solutions delivers advanced robotic inspection technologies for the energy sector, utilizing Underwater ROVs and Magnetic Crawlers to inspect critical infrastructure safely and efficiently.",
    heroImage: "/images/applications/energy_hero.jpg",
    heroVideo: "/media/Energy Video.mp4",
    overview: "From oil & gas facilities and hydropower plants to offshore wind farms and nuclear power plants, our solutions provide accurate inspection data, reduce operational risks, minimize downtime, and support informed asset integrity decisions. Our inspection solutions can also be integrated with a wide range of Non-Destructive Testing (NDT) methods, delivering comprehensive asset condition assessments while extending the service life of critical infrastructure.",
    problems: [
      "High safety risks for divers in confined and hazardous underwater environments.",
      "Costly plant downtime required for traditional dewatering or manual inspections.",
      "Difficulty in inspecting deep subsea structures (monopiles, cables) with human divers.",
      "Low visibility and turbid waters hindering accurate structural assessments.",
      "High radiation risks in nuclear facilities limiting human access to cooling systems."
    ],
    solution: "We deploy advanced Underwater ROVs and Magnetic Crawlers equipped with high-definition visual cameras, advanced lighting systems, and NDT packages. This allows for structural, weld, and thickness inspections in high-risk, low-visibility, or confined spaces without requiring dewatering or manual entry.",
    services: [
      "Cooling tower sump visual & NDT inspection",
      "Dam penstock & reservoir wall inspections",
      "Offshore wind monopile & subsea cable surveys",
      "Nuclear storage pool & intake pipeline assessments",
      "Submerged pipeline thickness testing and anomaly mapping"
    ],
    technologies: [
      "Sonar mapping & DVL-enabled subsea positioning",
      "Magnetic crawlers for dry/wet steel thickness measurements",
      "Submersible Remotely Operated Vehicles (ROVs) rated up to 200m depth",
      "Ultrasonic Thickness Gauging (UT) and Eddy Current Testing (ECT)"
    ],
    subIndustries: [
      {
        slug: "oil-and-gas",
        name: "Oil & Gas",
        description: "The oil and gas industry operates in hazardous, high-risk environments where safety, reliability, and uninterrupted production are critical. IXAR Robotic Solutions deploys advanced Underwater ROVs and Magnetic Crawlers to inspect storage tanks, cooling water systems, offshore structures, pipelines, intake basins, and other critical assets without exposing personnel to confined spaces or hazardous underwater conditions. Our robotic platforms perform high-resolution visual inspections and various NDT-supported evaluations while eliminating the need for dewatering or manual entry. Designed to operate safely within complex industrial facilities, our robotic systems minimize operational disruptions and reduce inspection time and costs.",
        image: "/images/applications/slide_13_img_1.jpg"
      },
      {
        slug: "hydro-dam",
        name: "Hydro Dam",
        description: "Hydropower facilities require periodic inspection of submerged and hard-to-access structures to ensure safe and efficient operation. Our solutions utilize advanced Underwater ROVs to inspect dams, intake structures, penstocks, spillways, and reservoirs without requiring direct human intervention or critical diving operations. Our robotic platforms perform high-resolution visual inspections and various NDT-supported evaluations while operating safely in low-visibility underwater environments. Our robotic systems reduce inspection risks, minimize operational downtime, and provide reliable data to support structural integrity assessments and preventive maintenance.",
        image: "/images/applications/slide_13_img_2.jpg"
      },
      {
        slug: "offshore-wind",
        name: "Offshore Wind",
        description: "IXAR Robotic Solutions deploys Underwater ROVs to inspect monopile foundations, transition pieces, subsea cables, offshore platforms, and other critical infrastructure without interrupting operations. Our robotic systems perform high-resolution visual inspections while safely accessing underwater locations that are difficult and costly to inspect using conventional methods. This approach enhances personnel safety, reduces inspection time and vessel dependency, and supports effective asset integrity management throughout the lifecycle of offshore wind installations.",
        image: "/images/applications/slide_13_img_3.jpg"
      },
      {
        slug: "nuclear",
        name: "Nuclear",
        description: "Nuclear facilities demand the highest standards of safety, precision, and regulatory compliance during inspection and maintenance activities. We provide robotic inspection technologies capable of operating in confined, submerged, and hazardous environments where human access is restricted or undesirable. Using Underwater ROVs and Magnetic Crawlers, our systems perform high-resolution visual inspections and various NDT-supported evaluations on cooling water systems, storage pools, pipelines, tanks, and structural components without dewatering or direct personnel exposure. Robotic inspections reduce radiation exposure risks, minimize plant downtime, and deliver accurate inspection data to support safe operation, regulatory compliance, and long-term asset reliability.",
        image: "/images/applications/slide_13_img_4.jpg"
      }
    ]
  },
  {
    slug: "infrastructure",
    name: "Infrastructure",
    title: "Comprehensive Inspection for Submerged Civil Infrastructure",
    description: "Civil infrastructure demands regular inspection to ensure structural safety, operational reliability, and regulatory compliance. Our solutions provide robotic inspection services for civil works.",
    heroImage: "/images/applications/infrastructure_hero.jpg",
    heroVideo: "/media/Infra video.mp4",
    overview: "Our solutions provide robotic inspection services for dams, bridges, water utilities, and telecommunication infrastructure using advanced Underwater ROVs and Magnetic Crawlers. Our robotic systems access submerged, elevated, and confined areas without disrupting operations, enabling engineers to identify structural deterioration, corrosion, cracks, sediment accumulation, and other defects. By delivering high-quality visual data and supporting NDT techniques, we enable operators to maintain critical safety standards.",
    problems: [
      "Inability to manually inspect bridge piles under strong water currents.",
      "Traditional utility inspections require costly draining of drinking water reservoirs.",
      "Accumulation of sediment at dam intakes causing operational choking.",
      "Visual assessment of deep fiber-optic telecommunication cable conduits."
    ],
    solution: "Submersible ROVs bypass the need for reservoir draining or dangerous dive operations. Utilizing sonar, profiling scanners, and underwater thickness sensors, we inspect civil concrete and steel foundations in place.",
    services: [
      "Bridge pier scour and structural integrity surveys",
      "Municipal drinking water reservoir and storage tank inspections",
      "Hydraulic intake tunnel inspections",
      "Submarine conduit and telecommunication cable route surveys"
    ],
    technologies: [
      "High-resolution optical cameras with turbid water color correction",
      "Multibeam sonar for foundation shape mapping",
      "Remotely operated cleaning brushes to remove biofouling from structural piles"
    ],
    subIndustries: [
      {
        slug: "dam",
        name: "Dam",
        description: "The structural health of dams directly impacts water security, power generation, and public safety. Regular inspection of submerged concrete surfaces, intake towers, gates, spillways, and reservoirs is essential for identifying deterioration before it becomes a major concern. IXAR Robotic Solutions employs Underwater ROVs to perform detailed visual inspections and NDT-supported evaluations without dewatering or diver intervention, enabling asset owners to make informed maintenance decisions while keeping critical infrastructure in service.",
        image: "/images/applications/slide_20_img_1.jpg"
      },
      {
        slug: "bridge",
        name: "Bridge",
        description: "Bridge foundations remain continuously exposed to water currents, erosion, and corrosion, making underwater inspection a vital part of asset management. IXAR Robotic Solutions uses Underwater ROVs to safely examine piers, piles, submerged steel members, and concrete foundations that are difficult or hazardous to access manually. The result is faster inspections, improved personnel safety, and accurate condition data to support repair planning and long-term structural reliability.",
        image: "/images/applications/slide_20_img_2.jpg"
      },
      {
        slug: "water-utility",
        name: "Water Utility",
        description: "Maintaining water infrastructure without interrupting supply is a constant challenge for utility operators. IXAR Robotic Solutions enables inspection of reservoirs, storage tanks, pumping stations, intake structures, and pipelines while they remain in operation. Through high-resolution visual inspection and NDT-supported assessments, our robotic systems eliminate the need for draining assets, helping utilities reduce downtime, lower operational costs, and maintain the integrity of essential water infrastructure.",
        image: "/images/applications/slide_20_img_3.jpg"
      },
      {
        slug: "telecommunication",
        name: "Telecommunication",
        description: "Modern communication networks depend on thousands of kilometres of submarine cables and underwater infrastructure that must operate reliably around the clock. We provide robotic inspection of subsea communication cables, cable landing stations, underwater conduits, and supporting structures using advanced Underwater ROVs. These inspections help detect external damage, cable exposure, and environmental changes at an early stage, reducing maintenance risks and ensuring uninterrupted data connectivity.",
        image: "/images/applications/slide_20_img_4.jpg"
      }
    ]
  },
  {
    slug: "maritime",
    name: "Maritime",
    title: "Advanced Inspection Solutions for Marine Operations",
    description: "The maritime industry operates in demanding environments where asset reliability and safety are essential. IXAR offers robotic cleaning and hull inspection solutions.",
    heroImage: "/images/applications/maritime_hero.jpg",
    heroVideo: "/media/Maritime Video.mp4",
    overview: "IXAR Robotic Solutions offers robotic inspection solutions for ports, shipping vessels, shipyards, and marine construction projects. Our underwater ROVs and magnetic crawlers perform detailed inspections of ship hulls, quay walls, underwater foundations, offshore structures, and steel surfaces without the need for extensive manual intervention. These inspections support preventive maintenance, reduce vessel downtime, improve operational efficiency, and help ensure compliance with international maritime standards.",
    problems: [
      "Biofouling on ship hulls increasing fuel consumption by up to 30%.",
      "Expensive dry-docking required just to inspect minor hull anomalies.",
      "Difficult and dangerous diver inspections of active shipping berths.",
      "Inspection of ballast tanks containing toxic or oxygen-deprived environments."
    ],
    solution: "Our Ship Hull Crawlers stick magnetically to hulls to clean biofouling and measure plate thickness simultaneously, even while the ship is anchored. Submersible ROVs map quay walls and ports without interrupting harbor traffic.",
    services: [
      "In-water vessel hull surveys (IWS) in lieu of dry-docking",
      "Quay wall, berth, and mooring dolphin structural audits",
      "Shipboard ballast tank visual inspections",
      "Underwater weld inspections on marine hulls"
    ],
    technologies: [
      "Vessel Cleaning Crawlers with non-destructive cavitation-brush heads",
      "Magnetic wheel technology for high-payload above/below water operations",
      "Geotagged visual reports mapping hull plate thickness"
    ],
    subIndustries: [
      {
        slug: "shipping",
        name: "Shipping",
        description: "Commercial vessels operate continuously in harsh marine environments, where hull condition directly affects fuel efficiency, performance, and operational costs. IXAR Robotic Solutions utilizes Underwater ROVs and Ship Hull Cleaning Crawlers to inspect and clean ship hulls and other submerged structures without requiring dry docking. Our robotic systems can also operate on above-water surfaces, providing efficient inspection and cleaning solutions that reduce maintenance time, improve vessel performance, and extend asset life.",
        image: "/images/applications/slide_27_img_1.jpg"
      },
      {
        slug: "ports",
        name: "Ports",
        description: "Ports are high-traffic environments where underwater infrastructure must remain safe and operational to support uninterrupted maritime activities. IXAR Robotic Solutions deploys Underwater ROVs to inspect quay walls, berths, jetties, dolphins, piles, mooring systems, navigation structures, and submerged utilities. By providing high-resolution visual inspections and NDT-supported evaluations without disrupting port operations, our robotic systems help harbor authorities detect damage early and prevent accidents.",
        image: "/images/applications/slide_27_img_2.jpg"
      },
      {
        slug: "shipbuilding-and-repair",
        name: "Shipbuilding & Repair",
        description: "Shipbuilding and repair projects demand accurate inspection throughout construction, maintenance, and refurbishment activities. We combine Underwater ROVs with Magnetic Crawlers to inspect ship hulls, ballast tanks, steel structures, welds, and fabricated components in both wet and dry conditions. Whether operating underwater or on exposed steel surfaces inside dry docks, our robotic platforms perform high-resolution visual inspections and NDT-supported evaluations, helping shipyards improve quality control, reduce manual access requirements, and accelerate project delivery.",
        image: "/images/applications/slide_27_img_3.jpg"
      },
      {
        slug: "marine-construction",
        name: "Marine Construction",
        description: "Marine infrastructure is continuously exposed to corrosion, wave action, and harsh environmental conditions that can affect long-term structural performance. We provide robotic inspection services for offshore platforms, subsea pipelines, breakwaters, seawalls, intake structures, marine terminals, and coastal installations using advanced Underwater ROVs and Magnetic Crawlers. Our robotic systems safely access difficult-to-reach areas, delivering reliable inspection data that supports preventive maintenance, regulatory compliance, and effective lifecycle management of critical marine assets.",
        image: "/images/applications/slide_27_img_4.jpg"
      }
    ]
  },
  {
    slug: "fisheries-and-aquaculture",
    name: "Fisheries & Aquaculture",
    title: "Smart Underwater Monitoring for Aquaculture Operations",
    description: "Sustainable aquaculture depends on continuous monitoring of underwater assets and farming infrastructure. Our bots assist fish farms with cage, net, and mooring checks.",
    heroImage: "/images/applications/aquaculture_hero.jpg",
    heroVideo: "/media/Fishery and Aquaculture Video.mp4",
    overview: "Our bots assist fish farms and aquaculture operators with inspections of fish cages, nets, and mooring systems. Our ROVs enable rapid assessment of net damage, biofouling, and structural integrity. These capabilities improve farm productivity, reduce operational risks, and support healthier aquatic environments with minimal disturbance to marine life.",
    problems: [
      "Undetected tears in fish cage nets leading to massive stock escape.",
      "Biofouling on nets restricting fresh water flow and causing fish diseases.",
      "High costs of diving crews for daily containment maintenance."
    ],
    solution: "Submersible ROVs crawl nets to check for holes, measure net tension, and identify biofouling. They can also use specialized gripper arms to retrieve fallen tools or samples.",
    services: [
      "High-speed aquaculture net integrity mapping",
      "Mooring lines and anchor pile structural audits",
      "Subsea cage bottom debris search and collection"
    ],
    technologies: [
      "ROV-mounted manipulator grippers",
      "Net-crawling tracking cameras",
      "Water quality sensors (oxygen, salinity, temperature)"
    ],
    subIndustries: [
      {
        slug: "net-inspection",
        name: "Net Inspection",
        description: "Fish cage nets are continuously exposed to strong currents, biofouling, wear, and accidental damage, making routine inspection essential for maintaining stock security and farm productivity. IXAR Robotic Solutions utilizes advanced Underwater ROVs to inspect aquaculture nets, mooring systems, anchor points, and underwater support structures without disturbing daily farming operations. Our robotic platforms provide high-resolution visual inspections to identify tears, deformation, biofouling, and structural defects at an early stage, enabling timely maintenance, reducing the risk of fish escape, and supporting safe and sustainable aquaculture operations.",
        image: "/images/applications/slide_34_img_1.jpg"
      }
    ]
  },
  {
    slug: "search-and-rescue",
    name: "Search & Rescue",
    title: "Robotic Systems for Mission-Critical Search and Rescue",
    description: "Robotic technologies play a critical role in missions where speed, safety, and accurate underwater information are essential. We support emergency response teams and research groups.",
    heroImage: "/images/applications/rescue_hero.jpg",
    heroVideo: "/media/Research Video.mp4",
    overview: "IXAR Robotic Solutions supports research institutions, emergency response teams, and security agencies with remotely operated systems capable of underwater exploration, surveillance, object search, sediment assessment, and water sampling operations. By providing real-time video, precise manoeuvrability, and access to hazardous or difficult-to-reach environments, we help keep teams safe.",
    problems: [
      "High risk to rescue divers in fast-flowing river currents or deep lakes.",
      "Extremely low visibility in mud-heavy reservoirs preventing objects from being located.",
      "Difficulty in collecting sediment/water samples from toxic tailing ponds."
    ],
    solution: "We deploy ROVs equipped with scanning sonar and mechanical grippers. This allows us to locate objects, conduct security sweeps, and retrieve sediment/water samples without sending divers in harm's way.",
    services: [
      "Emergency search and object localization (drowned vehicles, lost goods)",
      "Scientific water and sediment sampling in reservoirs",
      "Security sweeps of harbors and ship hulls for naval safety",
      "Crowd control support (e.g. Ganapati Visarjan safety monitoring, Mumbai)"
    ],
    technologies: [
      "Dual-frequency scanning sonar (imaging through mud and silt)",
      "Smart water sampler payloads (depth-triggered bottles)",
      "Claw attachments with up to 10kg lifting capacity"
    ],
    subIndustries: [
      {
        slug: "rescue",
        name: "Rescue",
        description: "Time is critical during underwater search and recovery operations, where visibility is often poor and conditions can be hazardous for dive teams. IXAR Robotic Solutions deploys advanced Underwater ROVs to support search, rescue, and recovery missions by providing real-time video, precise manoeuvrability, and rapid access to confined or difficult-to-reach underwater environments. Our robotic systems assist emergency responders in locating missing objects, inspecting submerged hazards, and conducting recovery operations while significantly reducing risks to personnel.",
        image: "/images/applications/slide_37_img_1.jpg"
      },
      {
        slug: "sediment-and-water-sampling",
        name: "Sediment & Water Sampling",
        description: "Understanding underwater environmental conditions begins with reliable sample collection. IXAR Robotic Solutions utilizes Underwater ROVs equipped with specialized tools to collect water and sediment samples from lakes, reservoirs, rivers, coastal waters, and industrial facilities with exceptional precision. By accessing locations that are unsafe or difficult for conventional methods, our robotic platforms enable efficient environmental monitoring, pollution assessment, scientific research, and regulatory compliance while minimizing disturbance to the surrounding ecosystem.",
        image: "/images/applications/slide_37_img_2.jpg"
      },
      {
        slug: "search-operations",
        name: "Search Operations",
        description: "Locating submerged objects requires advanced technology capable of operating in low-visibility and challenging underwater environments. IXAR Robotic Solutions deploys Underwater ROVs equipped with high-resolution cameras and sonar systems to detect, identify, and document submerged objects with exceptional accuracy. Our robotic platforms support archaeological investigations, missing object recovery, evidence search, infrastructure surveys, and underwater asset localization without exposing personnel to hazardous diving conditions. By combining real-time visual inspection with sonar imaging, IXAR enables faster, safer, and more efficient underwater search missions across inland and marine environments.",
        image: "/images/applications/slide_37_img_3.jpg"
      }
    ]
  }
];

import mriScanner from '../assets/mri_scanner.png';
import icuVentilator from '../assets/icu_ventilator.png';
import operatingSuite from '../assets/operating_suite.png';
import medicalSolutions from '../assets/medical_solutions.png';

export const categories = [
  { id: 'imaging', name: 'Diagnostic Imaging', count: 3 },
  { id: 'critical-care', name: 'Critical Care Systems', count: 3 },
  { id: 'surgical', name: 'Surgical Solutions', count: 3 },
  { id: 'infrastructure', name: 'Hospital Infrastructure', count: 2 },
];

export const products = [
  {
    id: 'astrascan-mri',
    name: 'AstraScan 3.0T MRI System',
    category: 'imaging',
    image: mriScanner,
    shortDescription: 'Enterprise-grade 3.0 Tesla magnetic resonance imaging system featuring AI-guided reconstruction.',
    description: 'The AstraScan 3.0T MRI system represents the pinnacle of diagnostic imaging. Powered by custom deep-learning algorithms, it delivers ultra-high-resolution scan images in up to 50% less acquisition time. Designed for maximum patient comfort, quiet operation, and wide bore ergonomics, it provides radiologists with unmatched diagnostic confidence across neurology, oncology, and musculoskeletal clinical studies.',
    features: [
      'Adaptive AI reconstruction engine for denoising and faster acquisition',
      '70cm wide bore design with ambient clinical lighting system',
      'Ultra-stable gradient performance (45 mT/m @ 200 T/m/s)',
      'Digital RF receiver technology with high density coil array',
      'Zero-helium boil-off technology for minimized maintenance costs'
    ],
    specifications: {
      'Magnet Strength': '3.0 Tesla Active Shielded',
      'Bore Diameter': '70 cm wide-bore',
      'Gradient Strength': '45 mT/m (Amplitude)',
      'Slew Rate': '200 T/m/s (Maximum)',
      'RF Channels': '64 direct digital channels',
      'Helium Consumption': 'Zero boil-off technology'
    },
    applications: [
      'Advanced Neuro-imaging & Tractography',
      'Whole-body Oncological Screenings',
      'High-resolution Musculoskeletal Diagnostics',
      'Quantitative Cardiac Perfusion Analysis'
    ],
    downloads: [
      { name: 'Product Brochure (PDF)', size: '4.2 MB' },
      { name: 'Technical Datasheet (PDF)', size: '1.8 MB' },
      { name: 'Site Planning Guide (PDF)', size: '3.1 MB' }
    ]
  },
  {
    id: 'vividtom-ct',
    name: 'VividTom 128-Slice CT Scanner',
    category: 'imaging',
    image: mriScanner,
    shortDescription: 'High-speed 128-slice computed tomography scanner with low-dose optimization.',
    description: 'VividTom 128 is engineered for emergency departments and busy clinical scanning centers. Equipped with a high-capacity tube and rapid rotation speed, it provides crystal-clear cardiac, vascular, and whole-body scans. Intelligent low-dose technologies reduce patient radiation exposure by up to 60% while maintaining crisp tissue definition and arterial detail.',
    features: [
      '128-slice high-resolution diagnostic acquisition per rotation',
      'Dose-reduction system using iterative reconstruction algorithms',
      '0.35-second rotation speed for high-speed trauma imaging',
      'Integrated advanced cardiovascular visualization suite',
      'Automated scan-planning software for high patient throughput'
    ],
    specifications: {
      'Slices': '128-slice dual source reconstruction',
      'Rotation Time': '0.35 seconds',
      'Generator Power': '80 kW high-frequency generator',
      'Tube Capacity': '8.0 MHU liquid metal bearing',
      'Bore Size': '78 cm opening',
      'Max Table Weight': '250 kg (550 lbs)'
    },
    applications: [
      'Cardiology and Coronary CT Angiography',
      'Trauma Imaging & Emergency Diagnostics',
      'Oncology Staging & Biopsy Navigation',
      'Pediatric Low-Dose Examinations'
    ],
    downloads: [
      { name: 'VividTom Brochure (PDF)', size: '3.8 MB' },
      { name: 'Dose Optimization Sheet (PDF)', size: '920 KB' }
    ]
  },
  {
    id: 'apexdr-xray',
    name: 'ApexDR Digital Radiography System',
    category: 'imaging',
    image: mriScanner,
    shortDescription: 'Floor-mounted digital radiography system with auto-tracking ceiling support.',
    description: 'The ApexDR is a versatile, floor-mounted digital X-ray system designed to streamline workflow in demanding imaging settings. Offering auto-positioning, wireless flat-panel detectors, and intuitive clinical software, it delivers instant diagnostic previews and ensures consistent image quality at optimized patient dose parameters.',
    features: [
      'Fully motorized auto-tracking for tube and detector positioning',
      'Premium cesium iodide (CsI) wireless flat panel detector',
      'Ultra-slim table layout with heavy duty patient support',
      'Advanced digital image stitching for full spine orthopedics',
      'Instant preview within 3 seconds of exposure'
    ],
    specifications: {
      'Configuration': 'Floor-mounted with wall bucky',
      'Detector Type': 'Wireless Cesium Iodide (CsI) Flat Panel',
      'Detector Size': '43 x 43 cm active area',
      'Generator': '65 kW high frequency generator',
      'Positioning': 'Motorized auto-tracking',
      'Grid': 'Removable grids for high resolution imaging'
    },
    applications: [
      'General Orthopedic Imaging',
      'Chest and Pulmonary Screenings',
      'Full Spine and Long Bone Stitching',
      'Trauma and Bedside Examinations'
    ],
    downloads: [
      { name: 'ApexDR Specification Sheet (PDF)', size: '2.4 MB' }
    ]
  },
  {
    id: 'omnivent-ventilator',
    name: 'OmniVent V5 ICU Ventilator',
    category: 'critical-care',
    image: icuVentilator,
    shortDescription: 'Advanced clinical ventilator with protective ventilation modes and smart weaning.',
    description: 'Designed for intensive care environments, the OmniVent V5 offers complete invasive and non-invasive ventilation solutions for neonates to adults. Featuring state-of-the-art gas-delivery technology and real-time lung mechanics visualization, it empowers ICU clinicians to implement lung-protective strategies and accelerate weaning with high physiological compliance.',
    features: [
      'Adaptive Support Ventilation (ASV) mode for automated weaning',
      'High-frequency oscillation and integrated high-flow oxygen therapy',
      '15-inch high-definition swivel touchscreen monitor',
      'Continuous monitoring of functional residual capacity (FRC)',
      'Backup battery system delivering up to 4 hours of operation'
    ],
    specifications: {
      'Patient Range': 'Neonatal to Adult patients',
      'Ventilation Modes': 'Invasive (VCV, PCV, SIMV, ASV), Non-Invasive (NIV, HFNC)',
      'Tidal Volume': '2 mL to 2500 mL',
      'Inspiratory Flow': 'Up to 260 L/min',
      'Oxygen Blend': '21% to 100% active oxygen mixer',
      'Battery Backup': 'Li-ion battery, 240 minutes'
    },
    applications: [
      'Adult ICU Critical Care Ventilation',
      'Pediatric & Neonatal Intensive Care',
      'Emergency Department Respiratory Support',
      'Post-Operative Anesthesia Recovery'
    ],
    downloads: [
      { name: 'OmniVent V5 Brochure (PDF)', size: '5.1 MB' },
      { name: 'Clinical Application Manual (PDF)', size: '2.9 MB' }
    ]
  },
  {
    id: 'aurasense-monitor',
    name: 'AuraSense M12 Vital Signs Monitor',
    category: 'critical-care',
    image: icuVentilator,
    shortDescription: 'Multiparameter ICU patient monitor with advanced cardiovascular modeling.',
    description: 'The AuraSense M12 delivers modular parameters for continuous bedside monitoring in critical care units. Featuring a sleek glass capacitive touch screen, integrated telemetry modules, and advanced warning scores (EWS), it detects cardiac changes early and streamlines data directly to hospital Electronic Health Records (EHR).',
    features: [
      '12-inch premium anti-glare capacitive glass touchscreen',
      'Modular configuration: 12-lead ECG, SpO2, Temperature, NIBP, IBP, EtCO2',
      'Early Warning Score (EWS) calculator for early clinical intervention',
      'WiFi integration for central monitoring station connectivity',
      'Seamless HL7 protocol interfaces for EHR data export'
    ],
    specifications: {
      'Display': '12.1-inch TFT capacitive touchscreen',
      'ECG Channels': '3/5/12-lead diagnostic ECG monitoring',
      'SpO2 Technology': 'LumiRead Digital SpO2 filter technology',
      'Data Sync': 'HL7 integration, RJ45 and WiFi built-in',
      'Battery life': 'Up to 6 hours continuous use',
      'Alarms': '3-level audio/visual smart alarm systems'
    },
    applications: [
      'Intensive Care Unit (ICU) Bedsides',
      'Cardiac Care Unit (CCU) Diagnostic Telemetry',
      'Operating Room Anesthetic Monitoring',
      'Neonatal ICU Custom Ward Watch'
    ],
    downloads: [
      { name: 'AuraSense M12 User Guide (PDF)', size: '4.5 MB' }
    ]
  },
  {
    id: 'surgicare-anesthesia',
    name: 'SurgiCare A7 Anesthesia Workstation',
    category: 'critical-care',
    image: icuVentilator,
    shortDescription: 'Integrated surgical anesthesia system with electronic gas mixing and agent analysis.',
    description: 'The SurgiCare A7 anesthesia system offers an advanced gas-delivery system combined with high-grade ventilator capabilities. Designed to ensure patient safety in general surgery, it provides digital electronic gas mixing, precise vaporizers, and automated anesthetic agent tracking with real-time breathing loop graphics.',
    features: [
      'Digital gas mixer with automated virtual flow tubes',
      'Integrated breathing circuit with bypass heating system',
      'Real-time MAC (Minimum Alveolar Concentration) estimation software',
      'Compatible with Isoflurane, Sevoflurane, and Desflurane vaporizers',
      'High-performance ventilator with pressure and volume support'
    ],
    specifications: {
      'Gas Supply': 'Oxygen, Nitrous Oxide, Compressed Air',
      'Mixer Type': 'Electronic digital gas mixing system',
      'Vaporizer Capacity': 'Dual position selectatec mounting',
      'Absorber Volume': '1.5 Liter autoclavable canister',
      'Ventilator Types': 'PCV, VCV, PSV, SIMV, manual bypass',
      'EHR compliance': 'Fully HL7 and DICOM network compatible'
    },
    applications: [
      'Operating Room Surgical Anesthesia',
      'Day-care Surgery Clinics',
      'Obstetric Operating Rooms',
      'Diagnostic Suite MRI Anesthetic Support'
    ],
    downloads: [
      { name: 'SurgiCare A7 Catalog (PDF)', size: '6.2 MB' }
    ]
  },
  {
    id: 'novalux-lights',
    name: 'NovaLux LED Surgical Lights',
    category: 'surgical',
    image: operatingSuite,
    shortDescription: 'Dual-dome surgical lighting system with automatic shadow control and HD camera option.',
    description: 'NovaLux LED surgical lights utilize high-output LEDs arranged in a unique optical array to eliminate shadows cast by the surgical team. Featuring variable color temperature adjustment and an integrated 4K HD camera option, they provide optimal tissue visualization and clear video streaming for medical training.',
    features: [
      'Multi-lens matrix design creating shadow-free surgical fields',
      'Adjustable color temperature (3800K to 5000K) for clinical precision',
      'Integrated 4K high-definition video camera with wireless transmitter',
      'Durable aerodynamic profile optimized for laminar airflow hoods',
      'Touchscreen control panel and sterilizable handles'
    ],
    specifications: {
      'Light Output': 'Up to 160,000 Lux per dome',
      'Color Temp': 'Adjustable: 3800K, 4400K, 5000K',
      'Field Size': '160 mm to 300 mm light spot diameter',
      'LED Lifetime': 'Over 60,000 operational hours',
      'Shadow Control': 'Electronic sensor auto-dimming modules',
      'Color Index': 'CRI Ra = 97, R9 = 95'
    },
    applications: [
      'Neurosurgery & Cardiovascular Surgery',
      'Orthopedic Joint Replacements',
      'Minimally Invasive Laparoscopy Support',
      'Clinical Training and Live Surgical Broadcasts'
    ],
    downloads: [
      { name: 'NovaLux Lighting Guide (PDF)', size: '2.1 MB' }
    ]
  },
  {
    id: 'motionflex-table',
    name: 'MotionFlex 8000 Operating Table',
    category: 'surgical',
    image: operatingSuite,
    shortDescription: 'Electro-hydraulic surgical table with modular table-top and radiolucent surface.',
    description: 'The MotionFlex 8000 is a modular, electro-hydraulic surgical table designed for universal clinical configurations. It provides unparalleled patient positioning flexibility, full-length radiolucency for C-arm imaging, and extreme weight capacity to meet bariatric and general surgery requirements.',
    features: [
      'Smooth electro-hydraulic positioning via handheld remote',
      'Modular carbon-fiber split tabletop for vascular imaging clearances',
      'Extensive lateral tilt, trendelenburg, and height adjustment ranges',
      'Heavy-duty dual caster base with central floor locking brake',
      'Memory foam mattresses with anti-static and anti-decubitus properties'
    ],
    specifications: {
      'Weight Capacity': '360 kg (800 lbs) dynamic load rating',
      'Height Range': '600 mm to 1050 mm table travel',
      'Trendelenburg': '30° forward tilt / 30° reverse tilt',
      'Lateral Tilt': '20° left tilt / 20° right tilt',
      'Slide Travel': '300 mm longitudinal slide for C-arm access',
      'Drive Power': 'Dual electro-hydraulic backup batteries'
    },
    applications: [
      'Vascular and Interventional Surgery',
      'Bariatric and General Gastrointestinal Procedures',
      'Spinal Procedures and Orthopedic Orthosis',
      'Urology and Gynecology Setup'
    ],
    downloads: [
      { name: 'MotionFlex Technical Catalog (PDF)', size: '3.4 MB' }
    ]
  },
  {
    id: 'aerocut-esu',
    name: 'AeroCut 400 Electrosurgical Unit',
    category: 'surgical',
    image: operatingSuite,
    shortDescription: 'Monopolar and bipolar high-frequency electrosurgical generator with contact quality monitor.',
    description: 'AeroCut 400 is an advanced electrosurgical unit (ESU) offering high-precision tissue cutting and coagulation. Featuring digital power regulation, contact quality monitoring for patient return pads, and pre-programmed clinical modes, it guarantees patient safety and consistent surgical outcomes.',
    features: [
      'Real-time tissue impedance feedback regulation systems',
      'Dedicated argon plasma coagulation (APC) integration port',
      'Remotely upgradable preset library for specialized operations',
      'Return electrode contact quality monitor (CQM) to prevent burns',
      'Dual monopolar and dual bipolar simultaneous output modes'
    ],
    specifications: {
      'Max Power Output': '400 W at 300 Ohms load parameter',
      'Operating Freq': '360 kHz high frequency output',
      'Modes': 'Pure Cut, Blend, Fulgurate, Spray, Bipolar Coag',
      'Safety System': 'Active patient plate monitoring system',
      'Display': '7-inch color digital interface',
      'Footswitch': 'Waterproof dual pedal design'
    },
    applications: [
      'Cardiothoracic Surgery & Valve Repairs',
      'Oncological Resections & Hemostasis',
      'Orthopedic and Arthroscopic Surgery',
      'General Surgical Coagulation'
    ],
    downloads: [
      { name: 'AeroCut 400 Datasheet (PDF)', size: '1.5 MB' }
    ]
  },
  {
    id: 'medgas-pipeline',
    name: 'MedGas Pipeline Control Station',
    category: 'infrastructure',
    image: medicalSolutions,
    shortDescription: 'Integrated medical gas alarm and monitoring manifold for hospital-wide clinical safety.',
    description: 'The MedGas Pipeline Control Station monitors medical oxygen, nitrous oxide, vacuum, and medical air supplies in critical hospital areas. Featuring high-precision pressure transducers, active color-coded alarm touchscreens, and emergency bypass connections, it ensures a constant flow of life-saving gases throughout the clinical facility.',
    features: [
      'Dual pressure regulation system with automatic cross-over manifolds',
      'Digital touchscreen monitoring interface for 4 to 8 gases simultaneously',
      'Audible and visual alarms linked to hospital Building Management System (BMS)',
      'Constructed with medical-grade, degreased ASTM copper fittings',
      'Automatic pressure relief valves and emergency safety inlets'
    ],
    specifications: {
      'Gas Types': 'Oxygen, Nitrous Oxide, Medical Air, Vacuum, Carbon Dioxide',
      'Working Pressure': '4.1 bar (60 psi) standard pipeline configuration',
      'Alarm Inputs': 'Analogue 4-20mA pressure transducer sensors',
      'Interface Protocol': 'BACnet IP, Modbus RTU interface for BMS',
      'Cabinet Rating': 'IP54 fire-retardant steel enclosure',
      'Certifications': 'HTM 02-01, NFPA 99 compliant engineering'
    },
    applications: [
      'General Hospital Gas Pipelines & Ward Infrastructure',
      'Operating Room Gas Supply Panels',
      'Intensive Care Unit (ICU) Gas Manifolds',
      'Ambulance Station Charging Stations'
    ],
    downloads: [
      { name: 'Hospital Gas System Design Guide (PDF)', size: '7.8 MB' },
      { name: 'MedGas Brochure (PDF)', size: '1.9 MB' }
    ]
  },
  {
    id: 'uvclean-sanitizer',
    name: 'UV-Clean 360 Autonomous Sanitizer',
    category: 'infrastructure',
    image: medicalSolutions,
    shortDescription: 'Autonomous disinfection robot featuring high-intensity UV-C emission tubes.',
    description: 'UV-Clean 360 is an autonomous mobile robot (AMR) designed for chemical-free disinfection of operating rooms and hospital spaces. Using LiDAR-based navigation and high-intensity UV-C lamps, it eliminates 99.99% of bacteria, viruses, and pathogens, generating detailed disinfection reports automatically.',
    features: [
      'Autonomous navigation utilizing LiDAR and 3D depth cameras',
      'High-intensity 254nm UV-C lamps delivering 360-degree exposure',
      'Automatic motion sensors for emergency shutdown if entry is detected',
      'WiFi monitoring dashboard with automatic path planning maps',
      'Self-charging station integration with 4-hour quick charging'
    ],
    specifications: {
      'Navigation': 'Autonomous SLAM navigation (LiDAR + Dual Depth Camera)',
      'UV-C Light Output': '8 x 150 W ozone-free quartz lamps',
      'Wavelength': '254 nm germicidal UV-C wavelength',
      'Disinfection Rate': '99.99% log 4 reduction in 15 minutes (5x5m)',
      'Drive Speed': 'Adjustable: 0.1 to 1.2 m/s travel speed',
      'Battery Rating': 'Lithium-iron-phosphate, 3 hours active emission'
    },
    applications: [
      'Surgical Suite Sterile Turnaround Disinfection',
      'ICU Ward Pathogen Suppression',
      'Clinical Laboratory Sterility Audits',
      'Emergency Department Deep Cleans'
    ],
    downloads: [
      { name: 'UV-Clean Pathogen Test Report (PDF)', size: '3.2 MB' }
    ]
  }
];

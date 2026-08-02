import { ShieldCheck, Settings, HeartPulse, ShieldAlert, Award, FileSpreadsheet } from 'lucide-react';

export const services = [
  {
    id: 'equipment-supply',
    title: 'Medical Equipment Supply & Logistics',
    icon: 'HeartPulse',
    shortDescription: 'End-to-end B2B procurement and temperature-controlled supply chain of diagnostic and critical care systems.',
    description: 'We offer hospital systems a single source for advanced clinical technology. Utilizing our global logistics network and secure, climate-controlled warehousing facilities, we guarantee safe delivery and immediate supply readiness of precision imaging scanners, surgical rigs, and patient care monitors.',
    features: [
      'Cold-chain transport for highly sensitive medical detectors and tubes',
      'Strategic partnership with global tier-1 manufacturers (GE, Philips, Siemens)',
      'Customized volume acquisition programs for hospital chains',
      'Regulatory clearance support and import documentation management',
      'Pre-delivery diagnostic verification and testing'
    ],
    benefits: [
      'Accelerated clinical procurement cycles',
      'Minimized transport-induced system calibration drift',
      'Flexible capital lease options and structural financing configurations',
      'Reduced supply chain administrative friction'
    ]
  },
  {
    id: 'installation-integration',
    title: 'Advanced Installation & Digital Integration',
    icon: 'Settings',
    shortDescription: 'Professional electrical, structural, and HL7/DICOM systems network integration.',
    description: 'Our specialized biomedical engineers manage structural anchoring, lead-shielding calibration, and complex digital setups. We ensure all imaging and monitoring systems connect securely to your DICOM servers, PACS channels, and Electronic Health Record (EHR) networks, complying with global standards.',
    features: [
      'Precision mechanical anchoring and vibration dampening setups',
      'Lead-lined room radiation safety certifications and measurements',
      'Secure DICOM, HL7, and PACS connectivity configurations',
      'Electrical isolator and medical-grade power grounding integration',
      'Detailed site planning pre-requisites and engineering reviews'
    ],
    benefits: [
      'Plug-and-play clinical equipment readiness',
      'Absolute compliance with local radiation and fire codes',
      'Seamless digital charts flow to EHR database systems',
      'Zero downtime on initial clinic launch stages'
    ]
  },
  {
    id: 'maintenance-calibration',
    title: 'Preventive Maintenance & Calibration',
    icon: 'ShieldCheck',
    shortDescription: 'Rigorous calibration, safety checks, and preventive checkups aligning with ISO 13485 standards.',
    description: 'Protect patient safety and prolong system lifespan with our preventive checkups. We employ certified master calibrators and calibrated testing tools to run structural audits, electrical safety analyzer tests, and image quality standard checks on active diagnostic imaging systems.',
    features: [
      'ISO 13485 and Joint Commission compliance testing checklists',
      'Electrical safety analysis tests checking chassis leakage current',
      'X-ray tube dose output validation and beam alignment checks',
      'Ultrasonic probe phantom analysis and transducer tuning',
      'Detailed digital calibration certification reports'
    ],
    benefits: [
      'Extended medical equipment lifetime (up to 40% increase)',
      'Guaranteed compliance with healthcare regulatory audits',
      'Reduced clinical diagnostic error rates',
      'Prevention of catastrophic component failures'
    ]
  },
  {
    id: 'amc-cmc',
    title: 'Annual Maintenance Contracts (AMC / CMC)',
    icon: 'FileSpreadsheet',
    shortDescription: 'Comprehensive maintenance agreements offering 24/7 coverage, priority support, and parts inclusion.',
    description: 'Maximize hospital operational efficiency with our flexible B2B contracts. Choose from Annual Maintenance Contracts (AMC) covering inspection and routine service, or Comprehensive Maintenance Contracts (CMC) incorporating emergency spare parts replacement, tube replacement coverage, and round-the-clock priority dispatcher services.',
    features: [
      'Guaranteed uptime service level agreements (SLAs) up to 98%',
      'Full inclusion of genuine OEM spare parts and replacement vacuum tubes',
      'Unlimited emergency breakdown calls with rapid dispatch',
      'Scheduled preventive checkups at off-peak night hours',
      'Dedicated client-portal dashboard tracking service history'
    ],
    benefits: [
      'Predictable annual clinical maintenance expenditure',
      'Priority response times (under 4 hours for acute settings)',
      'Drastically reduced unexpected system downtime',
      'Protection against expensive high-cost parts replacements'
    ]
  },
  {
    id: 'technical-support',
    title: '24/7 Clinical & Technical Support',
    icon: 'ShieldAlert',
    shortDescription: 'Round-the-clock remote diagnostics, helpline, and on-site expert dispatch.',
    description: 'In clinical settings, every minute counts. Our dedicated technical helpline operates 24/7. Using remote VPN diagnostics, our senior support engineers can log in, troubleshoot software faults, and recalibrate sensors on MRI, CT, and ventilation units, or dispatch local engineers with correct spares immediately.',
    features: [
      'Secure remote VPN diagnostic connections to diagnostic units',
      'Dedicated tier-3 biomedical engineer phone helpline',
      'Real-time automated error log monitoring and alert relays',
      'Rapid on-site response matching emergency clinical needs',
      'Localized emergency spare parts depots near major medical hubs'
    ],
    benefits: [
      'Immediate resolution of software and configuration glitches',
      'Fast coordination of physical repair crews',
      'Enhanced system availability for critical ICU departments',
      'Comfort of knowing clinical support is always online'
    ]
  },
  {
    id: 'hospital-planning',
    title: 'Biomedical Consulting & Hospital Design',
    icon: 'Award',
    shortDescription: 'Pre-construction layout engineering, workflow design, and capacity optimization.',
    description: 'Embark on construction with expert guidance. We consult on greenfield hospital planning, surgical room air flow layout designs (laminar flow ceilings), diagnostic room radiation shielding specifications, gas pipeline load estimations, and medical equipment procurement schedules.',
    features: [
      'Detailed AutoCAD room plans and clinical workflow models',
      'Laminar flow and HVAC design consulting for surgical suites',
      'Medical gas supply pipe volume and pressure drop calculation',
      'Clinical technology roadmapping and long-term asset lifecycle advice',
      'Energy consumption optimization for imaging departments'
    ],
    benefits: [
      'Avoidance of expensive retrofitting structural errors',
      'Optimized patient and clinical staff floor flows',
      'Correct dimensioning of critical utilities (gas, power, air)',
      'Future-proof layouts designed to adopt upcoming diagnostic tech'
    ]
  }
];

export const getIcon = (name) => {
  switch (name) {
    case 'HeartPulse': return HeartPulse;
    case 'Settings': return Settings;
    case 'ShieldCheck': return ShieldCheck;
    case 'FileSpreadsheet': return FileSpreadsheet;
    case 'ShieldAlert': return ShieldAlert;
    case 'Award': return Award;
    default: return Settings;
  }
};

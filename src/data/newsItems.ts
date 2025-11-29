export interface NewsItem {
  id: string;
  image: string;
  date: string;
  title: string;
  description: string;
  content: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "nesico-annual-report-2024",
    image:
      "https://images.unsplash.com/photo-1573164574511-73c773193279?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    date: "18 DECEMBER 2024",
    title: "NESICO's Strong Performance in 2024",
    description:
      "New Sudan Insurance Company reports exceptional growth and customer satisfaction in its annual review.",
    content: `
      <p>New Sudan Insurance Company (NESICO) has announced exceptional results for the fiscal year 2024, demonstrating strong growth across all business segments and reinforcing its position as South Sudan's leading insurance provider.</p>
      
      <h3>Key Highlights</h3>
      <p>The company reported significant improvements in customer retention rates, with a 15% increase in policy renewals compared to the previous year. This success is attributed to NESICO's commitment to swift claims processing and personalized customer service.</p>
      
      <h3>Expanding Coverage</h3>
      <p>Throughout 2024, NESICO expanded its product portfolio to include new specialized coverage options for emerging industries in South Sudan. The introduction of comprehensive electronic equipment insurance and enhanced health insurance plans has been particularly well-received by both individual and corporate clients.</p>
      
      <h3>Community Impact</h3>
      <p>As part of its corporate social responsibility initiatives, NESICO continued to support various community programs, including sponsorship of healthcare awareness campaigns and educational scholarships for young South Sudanese professionals pursuing careers in insurance and risk management.</p>
      
      <h3>Looking Ahead</h3>
      <p>Management expressed confidence in the company's trajectory for 2025, with plans to further digitize services and expand coverage to underserved regions of the country. The focus remains on empowering South Sudanese nationals with comprehensive risk management solutions while maintaining the highest standards of professionalism and integrity.</p>
    `,
  },
  {
    id: "new-health-insurance-plans",
    image:
      "https://images.unsplash.com/photo-1713453450934-ffa72b233597?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "10 DECEMBER 2024",
    title: "Enhanced Health Insurance Plans Launched",
    description:
      "NESICO introduces comprehensive health coverage options for individuals and families across South Sudan.",
    content: `
      <p>New Sudan Insurance Company is proud to announce the launch of its enhanced health insurance portfolio, designed to provide South Sudanese families and individuals with access to quality healthcare services both locally and internationally.</p>
      
      <h3>Comprehensive Coverage</h3>
      <p>The new health insurance plans cover a wide range of medical services including outpatient care, inpatient hospitalization, maternity benefits, dental and optical services, and emergency medical evacuations. These plans are tailored to meet the diverse healthcare needs of our clients.</p>
      
      <h3>Affordable Options</h3>
      <p>Understanding the importance of accessible healthcare, NESICO has developed tiered pricing options that cater to different budget levels without compromising on the quality of coverage. From basic plans for young professionals to comprehensive family packages, there's an option for everyone.</p>
      
      <h3>Network of Healthcare Providers</h3>
      <p>Policyholders gain access to an extensive network of healthcare providers, including leading hospitals and clinics in Juba and across the region. For specialized treatments not available locally, our international coverage ensures clients can access world-class medical facilities abroad.</p>
      
      <h3>Easy Claims Process</h3>
      <p>NESICO's commitment to customer service extends to our streamlined claims processing system. Policyholders can expect prompt handling of their medical claims, allowing them to focus on recovery while we handle the administrative aspects.</p>
    `,
  },
  {
    id: "corporate-training-initiative",
    image:
      "https://images.unsplash.com/photo-1739287088753-73a9b8b771bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "5 DECEMBER 2024",
    title: "NESICO Launches Youth Training Program",
    description:
      "Company invests in developing the next generation of South Sudanese insurance professionals.",
    content: `
      <p>In line with its mission to empower young South Sudanese nationals, New Sudan Insurance Company has launched an ambitious training program aimed at developing the next generation of insurance and risk management professionals in the country.</p>
      
      <h3>Building Local Expertise</h3>
      <p>The training initiative focuses on equipping young South Sudanese with comprehensive skills in risk assessment, underwriting, claims management, and customer service. Participants will receive internationally recognized certifications through partnerships with the Chartered Insurance Institute of London (CII).</p>
      
      <h3>Program Structure</h3>
      <p>The 12-month program combines theoretical learning with practical experience, allowing trainees to work alongside experienced professionals in various departments. This hands-on approach ensures graduates are job-ready and equipped to contribute meaningfully to South Sudan's growing insurance sector.</p>
      
      <h3>Industry Leadership</h3>
      <p>NESICO's investment in local talent development reflects its commitment to building a harmonized insurance industry in South Sudan. The company has been instrumental in establishing the South Sudan Insurance Union and continues to advocate for professional standards across the sector.</p>
      
      <h3>Future Opportunities</h3>
      <p>Successful graduates of the program will have the opportunity to join NESICO's team, contributing to the company's mission of providing comprehensive risk management solutions. The initiative represents a significant investment in South Sudan's human capital and economic future.</p>
    `,
  },
];

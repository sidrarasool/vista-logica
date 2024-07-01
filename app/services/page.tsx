import Footer from "@/components/Footer"
import Header from "@/components/Header"
import React from "react"
import ServiceSection from "@/components/ServiceSection"
import Link from "next/link"
import PhoneIcon from "../../public/assets/phone.svg"

const dataAnalyticsTabs = [
  {
    name: "Strategy & Advisory",
    services: [
      {
        name: "Advisory and Assessment",
        icon: "/assets/advisory_and_assessment.svg",
      },
      {
        name: "Data, AI & Gen AI Strategy & Roadmap",
        icon: "/assets/data_roadmap.svg",
      },
      {
        name: "Data Architecture & Design",
        icon: "/assets/data_architecture.svg",
      },
      {
        name: "Data Governance & Management",
        icon: "/assets/data_governance.svg",
      },
      {
        name: "Operating Model",
        icon: "/assets/operating_model.svg",
      },
      {
        name: "Data as a Product",
        icon: "/assets/data_as_product.svg",
      },
    ],
  },
  {
    name: "Data Modernisation",
    services: [
      { name: "Data Platforms", icon: "/assets/data_platforms.svg" },
      { name: "Data Engineering", icon: "/assets/data_engineering.svg" },
      { name: "Data Visualisation", icon: "/assets/data_visualisation.svg" },
      { name: "Test Automation", icon: "/assets/test_automation.svg" },
      { name: "Agile Delivery", icon: "/assets/agile_delivery.svg" },
      { name: "Data Modelling", icon: "/assets/data_modeling.svg" },
      {
        name: "Data Management (Master, Reference, Metadata, Lineage)",
        icon: "/assets/data_management.svg",
      },
    ],
  },
  {
    name: "Analytics & Insights",
    services: [
      { name: "Responsible AI", icon: "/assets/responsible_ai.svg" },
      { name: "Predictive Analytics", icon: "/assets/predictive_ai.svg" },
      { name: "Machine Learning", icon: "/assets/machine_learning.svg" },
      {
        name: "Model Development & Training",
        icon: "/assets/model_development.svg",
      },
      {
        name: "Model Integration and Deployment",
        icon: "/assets/model_integration.svg",
      },
      { name: "Gen Al App Development", icon: "/assets/gen_ai.svg" },
    ],
  },
]

const cloudEnablementTabs = [
  {
    name: "Cloud Strategy",
    services: [
      {
        name: "Cloud Readiness Assessment",
        icon: "/assets/cloudEnablement/cloud_readiness.svg",
      },
      {
        name: "Cloud Strategy & Roadmap",
        icon: "/assets/cloudEnablement/cloud_strategy.svg",
      },
      {
        name: "Cloud Operating Model",
        icon: "/assets/cloudEnablement/cloud_operating.svg",
      },
      {
        name: "Cloud Migration Business Case",
        icon: "/assets/cloudEnablement/cloud_migration.svg",
      },
      {
        name: "Cloud Cost Optimisation",
        icon: "/assets/cloudEnablement/cloud_cost.svg",
      },
      {
        name: "Cloud Integration Roadmap",
        icon: "/assets/cloudEnablement/cloud_integration.svg",
      },
    ],
  },
  {
    name: "Cloud Foundations",
    services: [
      {
        name: "Cloud Architecture and Design",
        icon: "/assets/cloudEnablement/cloud_architecture.svg",
      },
      {
        name: "Cloud Security",
        icon: "/assets/cloudEnablement/cloud_security.svg",
      },
      {
        name: "Cloud Platform Setup",
        icon: "/assets/cloudEnablement/cloud_platform.svg",
      },
      {
        name: "Cloud Landing Zone",
        icon: "/assets/cloudEnablement/cloud_landing.svg",
      },
      {
        name: "Infrastructure as Code",
        icon: "/assets/cloudEnablement/infrastructure_as_code.svg",
      },
      {
        name: "Automation & Tooling",
        icon: "/assets/cloudEnablement/automation_tooling.svg",
      },
      {
        name: "CI/CD, Release Management and version control",
        icon: "/assets/cloudEnablement/ci_cd_release.svg",
      },
    ],
  },
  {
    name: "Cloud Migration / Optimisation",
    services: [
      {
        name: "Cloud Migration and Modernisation",
        icon: "/assets/cloudEnablement/cloud_migration_modernisation.svg",
      },
      {
        name: "Cloud Migration Accelerators",
        icon: "/assets/cloudEnablement/cloud_migration_accelerator.svg",
      },
      {
        name: "Application Database Migration",
        icon: "/assets/cloudEnablement/application_database.svg",
      },
      {
        name: "Cloud Operating Efficiency Assessment",
        icon: "/assets/cloudEnablement/cloud_operating_efficiency.svg",
      },
    ],
  },
]

const digitalExperienceAndDesignTabs = [
  {
    name: "Strategy & Advisory",
    services: [
      {
        name: "Digital Strategy",
        icon: "/assets/digitalExperience/digital_strategy.svg",
      },
      {
        name: "Digital Product Discovery",
        icon: "/assets/digitalExperience/digital_product.svg",
      },
      {
        name: "Ad Tech and Channel Monetization",
        icon: "/assets/digitalExperience/ad_tech.svg",
      },
      {
        name: "Personalisation and Marketing Automation",
        icon: "/assets/digitalExperience/personalisation_and_marketing.svg",
      },
    ],
  },
  {
    name: "CX / UX",
    services: [
      {
        name: "User Experience and Interface Design",
        icon: "/assets/digitalExperience/user_experience.svg",
      },
      {
        name: "UX needs and journey mapping",
        icon: "/assets/digitalExperience/ux_needs.svg",
      },
      {
        name: "Prototyping and Integration",
        icon: "/assets/digitalExperience/prototyping_and_integeration.svg",
      },
    ],
  },
  {
    name: "Digital Products",
    services: [
      {
        name: "Mobile Application Design and Development",
        icon: "/assets/digitalExperience/mobile_application.svg",
      },
      {
        name: "Web Development",
        icon: "/assets/digitalExperience/web_development.svg",
      },
      {
        name: "Process Optimisation",
        icon: "/assets/digitalExperience/process_optimisation.svg",
      },
    ],
  },
]

const Services: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-between overflow-x-hidden bg-white">
      <Header backgroundColor="#FFF" />
      <div className="w-screen mx-0 mt-16 flex flex-col items-center">
        <div
          className="relative w-full flex items-center justify-center text-center bg-cover bg-center py-12 h-[25rem]"
          style={{
            backgroundImage: "url('/assets/services_banner.png')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative z-10 max-w-[56rem] mx-auto px-4 sm:px-6 lg:px-8 pt-16 flex flex-col items-center">
            <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold">
              Explore our expertise
            </h2>
            <p className="my-5 text-white text-md max-w-2xl text-center">
              Discover our digital ecosystem of bespoke services. From expert
              consulting to flawless execution, we are here to help you take the
              leap forward.
            </p>
          </div>
        </div>
        <div className="w-full px-5 py-10 flex flex-col items-center bg-white">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-center">
            Extract Maximum Engagement with Elevated Solutions
          </h2>
          <p className="text-[#4D5763] text-md md:text-lg max-w-3xl mt-4 text-center md:px-10">
            Bringing immersive experiences for both your team and customers with
            our comprehensive suite of cloud, data, and digital solutions.
          </p>
        </div>
        <ServiceSection
          title="Data, Analytics & Insights"
          description="Unlock the power of data with our advanced analytics solutions. Whether it’s harnessing the potential of big data, implementing predictive analytics, or driving actionable insights, our expert team helps you make data-driven decisions to stay ahead in today’s competitive landscape."
          icon="/assets/Data_analytics1.svg"
          tabs={dataAnalyticsTabs}
        />
        <ServiceSection
          title="Cloud Enablement"
          description="Transform your operations with our comprehensive cloud enablement services. From cloud strategy, to migration and optimization, we leverage in-depth, experience based learnings to enable you to seamlessly transition to cloud based technologies. Maximize agility and minimize costs with our tailored cloud solutions."
          icon="/assets/cloud_enablement.svg"
          tabs={cloudEnablementTabs}
        />
        <ServiceSection
          title="Digital Experience & Design"
          description="Elevate your digital presence and connect with customers like never before. Our digital experience solutions blend creativity with innovative technology to deliver smooth, personalised experiences across web, mobile, and emerging platforms. From user experience design to application development, we craft experiences that captivate and convert"
          icon="/assets/digital_experience1.svg"
          tabs={digitalExperienceAndDesignTabs}
        />
      </div>
      <section className="bg-blue-50 py-16 mt-10 flex flex-col items-center w-full">
        <h2 className="text-xl md:text-3xl font-semibold text-center mb-4 mx-2">
          Trying to cope with the digital evolution?
        </h2>
        <p className="text-center text-[#4D5763] text-md mb-8 max-w-[37rem] md:mx-auto font-poppins mx-2">
          It is time to lead pr to be left behind!
        </p>
        <Link
          href="/contact"
          className="flex items-center text-white  px-3 py-2 rounded-md border-2 text-sm font-medium bg-[#3E8DE3] border-none"
        >
          <PhoneIcon className="mr-1" />
          Reach out
        </Link>
      </section>
      <Footer />
    </div>
  )
}

export default Services

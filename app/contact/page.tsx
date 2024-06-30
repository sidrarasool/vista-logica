"use client"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Link from "next/link"
import React, { useState, ChangeEvent, FormEvent } from "react"

const jobTitles = ["Developer", "Manager", "Designer", "Marketing Specialist"]
const countries = ["United States", "Canada", "United Kingdom", "Australia"]
const industries = ["Technology", "Finance", "Healthcare", "Education"]

interface FormData {
  firstName: string
  lastName: string
  email: string
  mobile: string
  jobTitle: string
  companyName: string
  country: string
  industry: string
  projectDetail: string
}

interface Errors {
  [key: string]: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    jobTitle: "",
    companyName: "",
    country: "",
    industry: "",
    projectDetail: "",
  })

  const [errors, setErrors] = useState<Errors>({})

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const validateForm = (): Errors => {
    const newErrors: Errors = {}
    if (!formData.firstName) newErrors.firstName = "First name is required"
    if (!formData.lastName) newErrors.lastName = "Last name is required"
    if (!formData.email) newErrors.email = "Email is required"
    if (!formData.jobTitle) newErrors.jobTitle = "Job title is required"
    if (!formData.country) newErrors.country = "Country is required"

    return newErrors
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Form submitted successfully")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          jobTitle: "",
          companyName: "",
          country: "",
          industry: "",
          projectDetail: "",
        })
      } else {
        alert("Failed to submit the form")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("An error occurred while submitting the form")
    }
  }

  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-between overflow-x-hidden bg-white">
      <Header backgroundColor="#FFF" />
      <div className="w-screen mx-0 mt-16 flex flex-col items-center">
        <div
          className="relative w-full flex items-center justify-center text-center bg-cover bg-center py-12"
          style={{ backgroundImage: "url('/assets/get_in_touch.png')" }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative z-10 max-w-[56rem] mx-auto px-4 sm:px-6 lg:px-8 pt-16 flex flex-col items-center">
            <h2 className="text-white text-4xl sm:text-5xl lg:text-5xl font-semibold">
              Talk to us
            </h2>
            <p className="my-5 text-white text-sm max-w-2xl text-center">
              Reach out and find the best service for your business. We’re
              always happy to help!
            </p>
          </div>
        </div>
        <div className="relative bg-white px-4 lg:px-8 py-5 rounded-lg shadow-md border border-gray-300 w-[75%] m-8">
          <div className="flex flex-wrap md:relative">
            <div className="w-full md:w-3/4 mb-8 md:mb-0">
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-semibold mb-6">
                  Send us a message
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700">First name*</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && (
                      <span className="text-red-600 text-sm">
                        {errors.firstName}
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700">Last name*</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && (
                      <span className="text-red-600 text-sm">
                        {errors.lastName}
                      </span>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-gray-700">Email*</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Enter email address"
                    />
                    {errors.email && (
                      <span className="text-red-600 text-sm">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700">Mobile</label>
                    <input
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Enter mobile number"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-gray-700">Job title*</label>
                    <select
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="">Select job title</option>
                      {jobTitles.map((title, index) => (
                        <option key={index} value={title}>
                          {title}
                        </option>
                      ))}
                    </select>
                    {errors.jobTitle && (
                      <span className="text-red-600 text-sm">
                        {errors.jobTitle}
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700">Company name</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Write your company name"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-gray-700">Country*</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="">Select country</option>
                      {countries.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    {errors.country && (
                      <span className="text-red-600 text-sm">
                        {errors.country}
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700">Industry</label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="">Select industry</option>
                      {industries.map((industry, index) => (
                        <option key={index} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700">Project detail</label>
                  <textarea
                    name="projectDetail"
                    value={formData.projectDetail}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Write detail about the project"
                  ></textarea>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="bg-[#3E8DE3] text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="w-full md:w-1/4 md:px-4">
              <div className="static bg-[#011021] w-full h-full md:w-[30%] md:h-[80%] text-white p-2 md:p-6 rounded-md shadow-lg md:absolute md:top-12 md:right-[-7rem] md:ml-8">
                <h2 className="text-xl font-semibold mb-4">
                  Contact information
                </h2>
                <p className="mb-16 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting.
                </p>
                <p className="mb-8 text-sm">
                  <i className="fa-solid fa-phone mr-2"></i> XXXXXX-XXXX-XXXX
                </p>
                <p className="mb-8 text-sm">
                  <i className="fa-sharp fa-solid fa-envelope mr-2"></i>{" "}
                  Companyname@gmail.com
                </p>
                <p className="mb-8 text-lg font-semibold">Social Links</p>
                <div className="flex space-x-4 mt-4">
                  <Link href="#" className="text-white hover:text-gray-300">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link href="#" className="text-white hover:text-gray-300">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link href="#" className="text-white hover:text-gray-300">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="#" className="text-white hover:text-gray-300">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact

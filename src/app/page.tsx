import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import SelectCourse from "@/components/SelectCourse";
import CareerGuide from "@/components/CareerGuide";
import StudyDestinations from "@/components/StudyDestinations";
import FeaturedColleges from "@/components/FeaturedColleges";
import UniversityFees from "@/components/UniversityFees";
//import AdmissionProcess from "@/components/AdmissionProcess";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import EnquiryForm from "@/components/EnquiryForm";
import AppointmentPopup from "@/components/AppointmentPopup";
import ScrollReveal from "@/components/ScrollReveal";
import MouseGlow from "@/components/MouseGlow";

export default function Home() {
  return (
    <>
      <Hero />
      <MouseGlow />

      <ScrollReveal>
        <WhyChooseUs />
      </ScrollReveal>

      <ScrollReveal>
        <SelectCourse />  
      </ScrollReveal>
      
      <ScrollReveal>
        <CareerGuide />
      </ScrollReveal>

      <ScrollReveal>
        <StudyDestinations />
      </ScrollReveal>

      <ScrollReveal>
        <FeaturedColleges />
      </ScrollReveal>

      <ScrollReveal>
        <UniversityFees />
      </ScrollReveal>

      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal>
        <FAQ/>
      </ScrollReveal>

      <div id="enquiry" className="py-24 bg-slate-900">
        <EnquiryForm />
      </div>

      <AppointmentPopup />
    </>
  );
}
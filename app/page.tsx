import AboutSection from "@/components/routes/home/about";
import FeatureSection from "@/components/routes/home/features";
import HeroSection from "@/components/routes/home/hero";
import MetricSection from "@/components/routes/home/metrics";
import SupporSection from "@/components/routes/home/support";
import CtaSection from "@/components/shared/cta";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

export default function Home() {
    return (
        <>
            <Header />
            <HeroSection />
            <AboutSection />
            <MetricSection />
            <FeatureSection />
            <SupporSection/>
            <CtaSection />
            <Footer />
        </>
    );
}

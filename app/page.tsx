import AboutSection from "@/components/routes/home/about";
import FeatureSection from "@/components/routes/home/features";
import { CarouselPlugin } from "@/components/routes/home/main";
import MetricSection from "@/components/routes/home/metrics";
import SupporSection from "@/components/routes/home/support";
import CtaSection from "@/components/shared/cta";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import SocialSection from "@/components/shared/social";

export default function Home() {
    return (
        <>
            <Header />
            <CarouselPlugin />
            <AboutSection />
            <MetricSection />
            <FeatureSection />
            <SupporSection />
            <CtaSection />
            <SocialSection/>
            <Footer />
        </>
    );
}

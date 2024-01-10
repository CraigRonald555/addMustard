import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import logo from '../assets/logo.png';
import { useEffect, useState } from "react";
import Loading from "../components/loading/Loading";
import IntroImageLayer from "../components/parallax/IntroImageLayer";
import IntroTextLayer from "../components/parallax/IntroTextLayer";
import IntroTextLayer2 from "../components/parallax/IntroTextLayer2";

const HomePage: React.FC = () => {

    const loadingDuration = 1000;

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, loadingDuration * 2.5);
    }, []);

    return (
        loading ? (
            <div 
                className="h-screen w-screen flex items-center justify-center"
            >
                <Loading maxDuration={loadingDuration} /> 
            </div>
        ) : (
            <div>
                {/* TO-DO hide on scroll down and show on scroll up */}
                <div className="w-full">
                    <div className="flex items-center sm:justify-center md:justify-between p-8">
                        <img 
                            src={logo} 
                            style={styles.logo}
                            alt="Add Mustard Logo" 
                        />
                        <div className="hidden md:flex">
                            <p className="text-xl pr-8">
                                What we do
                            </p>
                            <p className="text-xl">
                                How can we help?
                            </p>
                        </div>
                    </div>
                </div>
                <Parallax pages={2} style={{ backgroundColor: '#FAD762' }}>
                    <ParallaxLayer offset={0.1} speed={1} factor={1} className="z-10">
                        <IntroTextLayer />
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={2} factor={1}>
                        <IntroImageLayer />
                    </ParallaxLayer>
                    <ParallaxLayer offset={0.4} speed={1} factor={1}>
                        <IntroTextLayer2 />
                    </ParallaxLayer>
                </Parallax>
            </div>
        )
    )
}

const styles = {
    logo: {
        height: '61px',
        width: '306px'
    }
}

export default HomePage;
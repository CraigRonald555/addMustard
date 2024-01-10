import introSection_1 from '../../assets/introSection_1.webp'

const IntroImageLayer: React.FC = () => {
    return (
        <div className="flex justify-center">
            <img 
                src={introSection_1} 
                alt="Intro Section 1" />
        </div>
    )
}

export default IntroImageLayer;
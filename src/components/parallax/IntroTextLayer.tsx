import { ParallaxLayer } from "@react-spring/parallax"

const IntroTextLayer: React.FC = () => {

    return (
        <p 
            className="text-left font-bold pl-16 sm:w-full md:w-2/3 sm:text-xl md:text-5xl"
            style={{
                fontFamily: 'EB Garamond',
            }}
        >
            Add the strategic and creative fire-power of an advertising agency, to the precision and incision of a digital marketing agency, to the flexibility of an in-house team.
        </p>
    )

}

export default IntroTextLayer;
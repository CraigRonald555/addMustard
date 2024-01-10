import { useState } from 'react';
import logo from '../../assets/logo.png';
import { useSpring, animated } from '@react-spring/web';

const contentWidth = '306px';
const contentHeight = '61px';

const Loading: React.FC<{maxDuration: number}> = ({maxDuration}) => {

    const [showLogo, setShowLogo] = useState(false);
    const [logoAnimation, logoAPI] = useSpring(() => ({
        from: { opacity: 0, transform: 'translateY(50%)' },
        to: { opacity: 1, transform: 'translateY(0%)' },
        config: { duration: maxDuration * 0.25 },
    }));

    const logoOverlayAnimation = useSpring({
        from: {  width: '0', left: '0px' },
        to: async (next) => {
            return [
                await next({ width: contentWidth, left: '0px' }),
                setShowLogo(true), // Set logo to show after the first animation
                await next({ width: '0px', left: contentWidth }),
                logoAPI.start({ opacity: 0, transform: 'translateY(50%)' }) // Start the second animation
            ]
        },
        config: { duration: maxDuration },
    });

    return (
        <div className="relative">

            {/* Placeholder to prevent the blackbar from being mispositioned due to there being no
                initial logo displayed.
            */}
            <div 
                hidden={showLogo}
                style={styles.logo}
            ></div>
            <animated.img 
                hidden={!showLogo}
                src={logo} 
                style={{...styles.logo, ...logoAnimation}}
                alt="Add Mustard Logo"
            />
            <animated.div style={{...styles.logoOverlay, ...logoOverlayAnimation}} className="absolute"></animated.div>
        </div>
    )
}

const styles = {
    logo: {
        height: contentHeight,
        width: contentWidth
    },
    logoOverlay: {
        backgroundColor: '#000000',
        zIndex: 100,
        top: 0,
        left: 0,
        height: contentHeight,
    }
}

export default Loading;
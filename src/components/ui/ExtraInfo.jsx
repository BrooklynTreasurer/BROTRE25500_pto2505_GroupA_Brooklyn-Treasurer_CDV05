import AboutMe from './AboutMe';
import Projects from './Projects';
import Services from './Services';
import TechnicalInfo from './TechnicalInfo';

export default function ExtraInfo() {
    return (
        <main className="extra-info">
            <AboutMe />
            <Projects />
            <Services />
            <TechnicalInfo />
        </main>
    );
}

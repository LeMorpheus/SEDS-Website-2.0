import Sponsors from '../components/sponsors';
import Metatags from '../components/Metatags';

export default function SponsorsPage() {
    return (
        <>
            <Metatags
                title="SEDS - Sponsors"
                description="Meet our amazing sponsors and partners who support SEDS in our space exploration missions"
            />
            <Sponsors />
        </>
    );
}

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SeactionTitle from '../../Components/SeactionTitle';
import TourismOverview from '../../Components/TourismOverview';
import AllTourGuides from '../../Components/AllTourGuides';
import OurPackages from '../../Components/OurPackages/OurPackages';

const TourismAndTravelsGuide = () => {
    return (
        <div>
<SeactionTitle title="Tourism & Travels Guide" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatum maiores velit deserunt non sunt facere expedita recusandae beatae. Quidem." ></SeactionTitle>
            <Tabs>
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Our Packages</Tab>
                    <Tab>Meet Our Tour Guides</Tab>
                </TabList>

                <TabPanel>
                    <TourismOverview></TourismOverview>
                </TabPanel>
                <TabPanel>
                    <OurPackages></OurPackages>
                </TabPanel>
                <TabPanel>
                    <AllTourGuides></AllTourGuides>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TourismAndTravelsGuide;
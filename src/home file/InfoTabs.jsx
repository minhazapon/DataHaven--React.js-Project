
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import History from './tabs/History';
import Science from './tabs/Science';
import War from './tabs/War';



function InfoTabs() {

    return (
        <div>

            <div>

                <Tabs>
                    <TabList>
                        <Tab><p className=' btn bg-blue-900 text-white '>History</p></Tab>
                        <Tab><p className=' btn bg-blue-900 text-white '>Science</p></Tab>
                        <Tab><p className=' btn bg-blue-900 text-white '>War</p></Tab>
                    </TabList>

                    <TabPanel>
                        <History></History>
                    </TabPanel>
                    <TabPanel>
                        <Science></Science>
                    </TabPanel>
                    <TabPanel>
                        <War></War>
                    </TabPanel>
                </Tabs>

            </div>

        </div>
    )
}

export default InfoTabs

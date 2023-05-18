import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const ToyTabs = () => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index) => {
      setActiveTab(index);
    };

    return (
      <div className='my-8'>
        
        <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
     <div className='text-center text-3xl font-semibold text-blue-800'>
     <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
     </div>

      <TabPanel>
        <h2>Content for Tab 1</h2>
        {/* Add your content for Tab 1 */}
      </TabPanel>
      <TabPanel>
        <h2>Content for Tab 2</h2>
        {/* Add your content for Tab 2 */}
      </TabPanel>
      <TabPanel>
        <h2>Content for Tab 3</h2>
        {/* Add your content for Tab 3 */}
      </TabPanel>
    </Tabs>
      </div>
    );
};

export default ToyTabs;
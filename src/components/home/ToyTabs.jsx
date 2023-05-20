import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cards from '../pages/Cards';
import AOS from 'aos'
import 'aos/dist/aos.css'
import moment from 'moment/moment';


const ToyTabs = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [cars, setCars] = useState([]);
    const [polices, setPolices] = useState([]);
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
      AOS.init({duration: 2000})
    },[]);

    const handleTabChange = (index) => {
      setActiveTab(index);
    };


    useEffect(() =>{
      fetch('car.json')
      .then(res=>res.json())
      .then(data => setCars(data));
    },[]);

    useEffect(() => {
      fetch('police.json')
      .then(res => res.json())
      .then(data => setPolices(data));
    },[]);

    useEffect(()=>{
      fetch('track.json')
      .then(res=> res.json())
      .then(data => setTracks(data));
    },[]);

    return (
      <>
        <div className='h-32 bg-amber-300 my-10 rounded-xl'>
        <h5 className='text-center text-3xl font-bold text-black my-5'>Today is.....</h5>
        <h1 className='text-black text-4xl font-bold text-center my-auto'>{moment().format("dddd, MMMM D, YYYY h:mm:ss a")}</h1>
       
        </div>
        
      <div className='my-8' data-aos="fade-left">
        
        <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
     <div className='text-center text-3xl font-semibold text-blue-800'>
     <TabList>
        <Tab>Babies Car</Tab>
        <Tab>Police car</Tab>
        <Tab>Babies Tracks</Tab>
      </TabList>
     </div>

      <TabPanel>
        <h2 className='text-2xl text-center text-green-600 font-bold my-5'>Babies car toys</h2>
        {/* Add your content for Tab 1 */}

        <div className='md:flex justify-around gap-5' data-aos="fade-up">
        {
          cars.map(car => <Cards key={car.id} data={car}></Cards>)
        }
        </div>
      </TabPanel>
      <TabPanel>
        <h2 className='text-2xl text-center text-red-600 font-bold my-5'>Babies Police Car toys</h2>
        {/* Add your content for Tab 2 */}

       <div className='md:flex justify-around gap-5' data-aos="fade-up">
        {
          polices.map(police => <Cards key={police.id} data={police}></Cards>)
        }
       </div>
      </TabPanel>
      <TabPanel>
        <h2 className='text-2xl text-center text-orange-600 font-bold my-5'>Babies tracks toys</h2>
        {/* Add your content for Tab 3 */}
       <div className='md:flex justify-around gap-5' data-aos="fade-up">
        {
          tracks.map(track => <Cards key={track.id} data={track}></Cards>)
        }
       </div>
      </TabPanel>
    </Tabs>
      </div>
      </>
    );
};

export default ToyTabs;
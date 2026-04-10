import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from './ListItems/ReadList';
import WishList from './ListItems/WishList';
const Books = () => {
    return (
        <div className='max-w-[80%] mx-auto'>
        <Tabs>
            <TabList>
                <Tab>Read List</Tab>
                <Tab>Wish List</Tab>
            </TabList>

            <TabPanel>
                <ReadList/>
            </TabPanel>
            <TabPanel>
                <WishList/>
            </TabPanel>
        </Tabs>
        </div>
    );
};

export default Books;
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from './ListItems/ReadList';
import WishList from './ListItems/WishList';
const Books = () => {
    const [shortType, setShortType] = useState("");
    return (
        <div className='max-w-[80%] mx-auto'>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                    <div className="dropdown dropdown-top dropdown-end ml-16">
                        <div tabIndex={0} role="button" className="btn m-1">Short by {shortType} ⬆️</div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li onClick={()=>setShortType("pages")}><a>Pages</a></li>
                            <li onClick={()=>setShortType("Rating")}><a>Rating</a></li>
                        </ul>
                    </div>
                </TabList>

                <TabPanel>
                    <ReadList shortType={shortType} />
                </TabPanel>
                <TabPanel>
                    <WishList shortType={shortType} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;
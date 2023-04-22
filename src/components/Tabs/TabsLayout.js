import React from 'react';import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UploadForm from "../Forms/UploadForm";
import SearchForm from "../Forms/SearchForm";


function TabsLayout(props) {
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Upload</Tab>
                    {/*<Tab disabled>Luigi</Tab>*/}
                    {/*<Tab>Yoshi</Tab>*/}
                    <Tab>2rd TabExample</Tab>
                    <Tab>Search</Tab>
                </TabList>

                <TabPanel>
                    <p><b>Carpets Info</b></p>
                    <section>
                        <UploadForm/>
                    </section>
                </TabPanel>
                <TabPanel>
                    <p>
                        <b>Luigi</b> (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>) (<i>English: /luˈiːdʒi/;
                        Italian: [luˈiːdʒi]</i>) is a fictional character featured in video games and related media
                        released by Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi is portrayed
                        as the slightly younger but taller fraternal twin brother of Nintendo's mascot Mario, and
                        appears in many games throughout the Mario franchise, often as a sidekick to his brother.
                    </p>
                    <p>
                        Source:{' '}
                        <a href="https://en.wikipedia.org/wiki/Luigi" target="_blank">
                            Wikipedia
                        </a>
                    </p>
                </TabPanel>
                <TabPanel>
                    <p><b>Search Carpet by number</b></p>
                    <section>
                        <SearchForm/>
                    </section>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default TabsLayout;
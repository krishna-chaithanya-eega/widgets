import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: "What is React ?",
        content: "React is an open-source, front end, JavaScript library for building user interfaces or UI components.It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."
    },
    {
        title: "Is react easy to learn ?",
        content: "Both HTML and CSS are integral to any web development project. If you have these skills already, then learning React should be a relatively straightforward process. It has its own unique set of challenges, but it is an excellent tool to have in order to start or further your career as a web developer."
    },
    {
        title: "Is React a programming language ?",
        content: "React is a popular and widely used programming language at present since almost every web developer or a full-stack developer is using it"
    }
]

const options = [
    {
        label: "The color red",
        value: "red"
    },
    {
        label: "The color green",
        value: "green"
    },
    {
        label: "The color yellow",
        value: "yellow"
    }
]
const App = () => {

    const [selected,setSelected]=useState(options[0])
    return (
        <>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </>

    );
}
export default App;

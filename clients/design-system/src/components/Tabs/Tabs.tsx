import React, { useState, useRef } from 'react';
import { TabsProps, Tab } from './Tabs.type';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.module.scss';

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabRefs = useRef<HTMLButtonElement[]>([]);
  const tabWindowRef = useRef<HTMLDivElement>(null);
  const handleClick = (index: number) => {
    setActiveTab(index);
  };

  const handlePrevious = () => {
    setActiveTab((prevActiveTab: number) => (prevActiveTab === 0 ? prevActiveTab : prevActiveTab - 1));
    const previousTabParent = tabRefs.current[activeTab - 1].parentElement;
    const elementPosition = previousTabParent?.getBoundingClientRect()
    const positionX = elementPosition?.left ?? 0;
    tabWindowRef.current?.scrollTo({left: positionX, behavior: 'smooth'})
  }

  const handleNext = () => {
    setActiveTab((prevActiveTab: number) => (prevActiveTab === tabs.length - 1 ? prevActiveTab : prevActiveTab + 1));
    const nextTabParent = tabRefs.current[activeTab].parentElement;
    const elementPosition = nextTabParent?.getBoundingClientRect()
    const positionX = elementPosition?.right ?? 0;
    tabWindowRef.current?.scrollTo({left: positionX, behavior: 'smooth'})
  };

  return (
    <div className="tabs">
      <div ref={tabWindowRef} className={'scrollable'}>
        <ul className="nav nav-tabs flex-nowrap">
          {tabs.map((tab: Tab, index: number) => (
            <li className="nav-item" key={index}>
              <button
                className={`nav-link mx-2 ${index === activeTab ? 'active' : ''}`}
                onClick={() => handleClick(index)}
                ref={(ref) => (tabRefs.current[index] = ref as HTMLButtonElement)}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="tab-content">
        {tabs.map((tab: Tab, index: number) => (
          <div
            className={`tab-pane fade ${index === activeTab ? 'show active' : ''}`}
            key={index}
          >
            {tab.content}
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-link me-2" onClick={handlePrevious} disabled={activeTab === 0}>
          <FontAwesomeIcon size='2x' icon={faChevronCircleLeft}/>
        </button>
        <span>{`${activeTab + 1}/${tabs.length}`}</span>
        <button className="btn btn-link ms-2" onClick={handleNext} disabled={activeTab === tabs.length - 1}>
           <FontAwesomeIcon size='2x' icon={faChevronCircleRight}/>
        </button>
      </div>
    </div>
  );
};

export default Tabs;

import React from 'react'
import styled from 'styled-components'
import ControllerButton from './ControllerButton'
import MostUsed from './MostUsed'
import Profile from './Profile'
import RangeItems from './RangeItems'

interface InitialMenuProps {
    open: boolean 
    setShowModal: (x:boolean) => void
}

const InitialMenu = ({open, setShowModal}: InitialMenuProps) => {
    if(!open) return null

    return (
        <InitialMenuWrapper>
            <div className="leftSideItems">
                <Profile user="Matheus Felizardo"/>

                <div className="MostUsedContainer">
                    <p>Most used</p>
                    <MostUsed icon="SkypeLogo" text="Skype" />
                    <MostUsed icon="People" text="People" />
                    <MostUsed icon="AlarmClock" text="Alarm and Clock" />
                    <MostUsed icon="Calculator" text="Calculator" />
                </div>

                <div className="ControllerButtons">
                    <ControllerButton icon="FolderSearch" text="File Explorer" />
                    <ControllerButton icon="SyncOccurence" text="Configurations" />
                    <ControllerButton icon="PowerButton" text="Power" />
                    <ControllerButton icon="BulletedList2" text="All Applications" />
                </div>
            </div>

            <div className="rightSideItems">
                <div className="title">
                    <p>Everything in your range</p>
                </div>

                <div className="RangeItemsContainer">
                    <div className="grid-2">
                        <RangeItems icon="Calendar" text="Calendar" bgColor="#71afe5"/>
                        <RangeItems icon="Mail" text="Email" bgColor="#2b88d8"/>
                    </div>

                    <div className="grid-2-1">
                        <RangeItems icon="EdgeLogo" text="Microsoft Edge" bgColor="#2b88d8"/>
                        <RangeItems icon="ClassNotebookLogo32" text="OneNote" bgColor="#7719aa"/>

                    </div>

                    <div className="grid-3">
                        <RangeItems icon="ThisPC" text="My Computer" bgColor="#00ad56"/>
                        <RangeItems icon="Calculator" text="Calculator" bgColor="#71afe5"/>
                        <RangeItems icon="MyMoviesTV" text="Movies and Pr..." bgColor="#2b88d8"/>

                    </div>

                    <div className="title">
                        <p>Execute and explore</p>
                    </div>

                    <div className="grid-3">
                        <RangeItems icon="OfficeLogo" text="Office" bgColor="#ca5010"/>
                        <RangeItems icon="Calculator" text="Calculator" bgColor="#71afe5"/>
                        <RangeItems icon="MyMoviesTV" text="Movies and Pr..." bgColor="#2b88d8"/>

                    </div>

                    <div className="grid-2-1">
                        <RangeItems icon="Shop" text="Shop" bgColor="#2b88d8"/>
                    </div>
                </div>
            </div>
        </InitialMenuWrapper>
    )
}

const InitialMenuWrapper = styled.div`
    padding: 1rem;
    width: 800px;
    height: 700px;
    position: absolute;
    bottom: 56px;
    background-color: #444;
    display: flex;
    transform: translateY(1000px);
    animation: showModal .1s forwards;
    z-index: 1;
    @keyframes showModal {
        0% {
            transform: translateY(1000px);
        }

        100% {
            transform: translateY(0);
        }
    }
    .leftSideItems {
        height: 100%;
        width: 80%;
    }
    .ControllerButtons {
        bottom: 0;
        position: absolute;
    }

    .rightSideItems {
        width: 100%;
        overflow-y: hidden;
        .title {
            height: 60px;
            display: flex;
            align-items: center;
        }

        .RangeItemsContainer {
            display: flex;
            flex-direction: column;
            gap: .5rem;

            span {
                font-size: .825rem;
            }
        }

        .grid-2 {
            display:grid;
            grid-template-columns: 25% 1fr;
            height: 120px;
            gap: .5rem;
        }

        .grid-2-1 {
            display:grid;
            grid-template-columns: 1fr 25% ;
            height: 120px;
            gap: .5rem;
        }

        .grid-3 {
            display:grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: .5rem;

            height: 120px;
        }
    }

`
export default InitialMenu

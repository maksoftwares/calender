import React, { Component } from 'react';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';
import Calendar from './Calendar.js';
import bot from '../images/bot.png';
import Nav from '../images/Nav.png';
import './Scheduler.css';

class Scheduler extends Component {

    render() {

        return (
            <div className="container-fluid">
                <div className="row" style={{ marginBottom: '30px', marginTop: '15px' }}>
                    <div className="col-sm-6" >
                        <div className="row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-8"><span style={{ float: 'left' }}><h2>Frank's Planner</h2></span></div>
                        </div>

                    </div>
                    <div className="col-sm-6">
                        <span style={{ float: 'right' }}><img src={bot} className="avatar" alt="" style={{ height: '50px' }}></img></span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-1">
                    <img src={Nav} className="avatar" alt="" style={{ height: 'auto' }}></img>
                    </div>
                    <div className="col-sm-4">
                        <Calendar />

                        <div class="card">
                            <div class="row cardnames">
                                <div className="col-sm-2"><span className="dot"></span></div>
                                <div className="col-sm-6"><h5 className="cardname">Blog Infographic<p>12 Tasks</p></h5></div>
                                <div className="col-sm-3" style={{paddingTop:'15px'}}><span className="more">ooo</span></div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="row cardnames">
                                <div className="col-sm-2"><span className="dot"></span></div>
                                <div className="col-sm-6"><h5 className="cardname">Nike Project<p>12 Tasks</p></h5></div>
                                <div className="col-sm-3" style={{paddingTop:'15px'}}><span className="more">ooo</span></div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="row cardnames">
                                <div className="col-sm-2"><span className="dot"></span></div>
                                <div className="col-sm-6"><h5 className="cardname">Envanto Meetups<p>12 Tasks</p></h5></div>
                                <div className="col-sm-3" style={{paddingTop:'15px'}}><span className="more">ooo</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">

                    </div>

                    <div className="col-sm-7">
                        <ScheduleComponent currentView="Month" eventSettings={this.localData}>
                            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
                        </ScheduleComponent>
                    </div>
                </div>
            </div>
        )
    }
}

export default Scheduler;
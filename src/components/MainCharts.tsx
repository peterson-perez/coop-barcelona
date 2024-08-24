import { BrandIcon } from "../icons/brand-icon"
import thumb1 from '../assets/thumb-1.png'
import thumb2 from '../assets/thumb-2.png'
import thumb3 from '../assets/thumb-3.png'
import thumb4 from '../assets/thumb-4.png'
import thumb5 from '../assets/thumb-5.png'
import { DoughnutChart } from "./DoughnutChart"
import { BarChart } from "./BarChart"
import { StarIcon } from "../icons/star-icon"

export const MainCharts = () => {
    return (
        <section className='main-charts'>
            <div className='aside'>
                <div className='aside-left'>
                    <span>
                        <BrandIcon color="#313139" />
                    </span>
                    <hr className='line' />

                    <section className="text-group-section">
                        <div className='text-group'>
                            <input type="checkbox" className='rectangle' />
                            <p className='aside-lorem'>Lorem ipsum dolor</p>
                        </div>
                        <div className='text-group'>
                            <input type="checkbox" className='rectangle' />
                            <p className='aside-lorem'>Lorem ipsum dolor</p>
                        </div>
                        <div className='text-group'>
                            <input type="checkbox" className='rectangle' />
                            <p className='aside-lorem'>Lorem ipsum dolor</p>
                        </div>
                        <div className='text-group'>
                            <input type="checkbox" checked className='rectangle' />
                            <p className='aside-lorem'>Lorem ipsum dolor</p>
                        </div>
                    </section>

                    <div className='user-details'>
                        <img src={thumb1} alt="User Image" width={42} height={42} />
                        <p> Lorem ipsum dolor sit amet. </p>
                    </div>
                </div>
                <div className='aside-center'>
                    <div className='aside-section'>
                        <div className='message-center-up-container'>
                            <span className='aside-lorem'>Marketing Platform Clients Usage</span>
                            <input type="checkbox" className='rectangle' />
                        </div>
                        <DoughnutChart />
                    </div>
                    <div className='aside-section'>
                        <div className='message-center-damn-container'>
                            <p className='aside-lorem'>Monthly Users Growth</p>
                            <input type="checkbox" className='rectangle' />
                        </div>
                        <BarChart />
                    </div>
                </div>
                <div className='aside-right'>
                    <div className='aside-section'>
                        <div className='message-right-up-container'>
                            <p className='aside-lorem'>Lorem ipsum dolor</p>
                            <input type="checkbox" checked className='rectangle' />
                        </div>
                        <div className='text-group-section no-gap'>
                            <div className="text-group border-bottom">
                                <img src={thumb1} alt="User 1" width={42} height={42} />
                                <span className='aside-lorem'>Lorem, ipsum dolor sit</span>
                            </div>
                            <div className="text-group border-bottom">
                                <img src={thumb2} alt="User 2" width={42} height={42} />
                                <span className='aside-lorem'>Lorem, ipsum dolor sit</span>
                            </div>
                            <div className="text-group border-bottom">
                                <img src={thumb3} alt="User 3" width={42} height={42} />
                                <span className='aside-lorem'>Lorem, ipsum dolor sit</span>
                            </div>
                            <div className="text-group border-bottom">
                                <img src={thumb4} alt="User 4" width={42} height={42} />
                                <span className='aside-lorem'>Lorem, ipsum dolor sit</span>
                            </div>
                        </div>
                    </div>
                    <div className='aside-section'>
                        <div className="text-group">
                            <img src={thumb5} alt="User 4" width={42} height={42} />
                            <div className="customer-details">
                                <span className="name">Jane Doe</span>
                                <span className='aside-lorem'>CEO of <a href="#">google.com</a></span>
                            </div>
                        </div>
                        <div className="text-group">
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
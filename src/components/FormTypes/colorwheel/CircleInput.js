

import classNames from 'classnames'
import circle0 from '../../../assets/svg/0.svg'

import './style.css'
const CircularInput = ({Selected, OnSelect}) => {

    const handleClick = (e) => {
        OnSelect(e)
    }

    return (
        <div className='wheel'>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                <defs>
                    <style>
                        {
                            `.cls-1{
                                fill:#243c95;
                            }
                            
                            .cls-1, .cls-10, .cls-11, .cls-12, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-8, .cls-9{
                                stroke:#000;
                                stroke-miterlimit:10;
                                stroke-width:4px;
                            }
                            .cls-2{
                                fill:#126db7;
                            }
                            .cls-3{
                                fill:#1ba866;
                            }
                            .cls-4{
                                fill:#a5cf4e;
                            }
                            .cls-5{
                                fill:#fcae1b;
                            }
                            .cls-6{
                                fill:#f5831f;
                            }
                            .cls-7{
                                fill:#ec2028;
                            }
                            .cls-8{
                                fill:#b81d70;
                            }
                            .cls-9{
                                fill:#f15a26;
                            }
                            .cls-10{
                                fill:#f8ef23;
                                }
                            .cls-11{
                                fill:#1ca2b7;
                            }
                            .cls-12{
                                fill:#5d2d88;
                            }`}
                    </style>
                    </defs>
                    <path onClick={()=>{handleClick(1)}}  class="cls-1"  style={{opacity:  Selected==null || Selected==1? 1:0.6 }}  d="M787,214,500.37,500.63l105-391.92A407.53,407.53,0,0,1,787,214Z"/>
                    <path onClick={()=>{handleClick(2)}}  class="cls-2"  style={{opacity:  Selected==null || Selected==2? 1:0.6 }}  d="M891.44,395.32l.13.49L500.37,500.63,787,214A403.57,403.57,0,0,1,891.44,395.32Z"/>
                    <path onClick={()=>{handleClick(4)}}  class="cls-3"  style={{opacity:  Selected==null || Selected==4? 1:0.6 }}  d="M891.45,605.42a407.49,407.49,0,0,1-104.79,181.5L500.37,500.63Z"/>
                    <path onClick={()=>{handleClick(5)}}  class="cls-4"  style={{opacity:  Selected==null || Selected==5? 1:0.6 }}  d="M786.66,786.92A403.67,403.67,0,0,1,605.19,891.83L500.37,500.63Z"/>
                    <path onClick={()=>{handleClick(7)}}  class="cls-5"  style={{opacity:  Selected==null || Selected==7? 1:0.6 }}  d="M500.37,500.63,395.45,892.2a407.47,407.47,0,0,1-182-104.67Z"/>
                    <path onClick={()=>{handleClick(8)}}  class="cls-6"  style={{opacity:  Selected==null || Selected==8? 1:0.6 }}  d="M500.37,500.63l-286.9,286.9A403.41,403.41,0,0,1,108.2,605.71Z"/>
                    <path onClick={()=>{handleClick(10)}} class="cls-7"  style={{opacity:  Selected==null || Selected==10? 1:0.6 }} d="M500.37,500.63,108,395.49A407.31,407.31,0,0,1,213.11,213.37Z"/>
                    <path onClick={()=>{handleClick(11)}} class="cls-8"  style={{opacity:  Selected==null || Selected==11? 1:0.6 }} d="M395.29,108.46,500.37,500.63,213.11,213.37a403.49,403.49,0,0,1,181.7-104.78Z"/>
                    <path onClick={()=>{handleClick(9)}}  class="cls-9"  style={{opacity:  Selected==null || Selected==9? 1:0.6 }}  d="M500.37,500.63,108.2,605.71l-.13-.48a403.58,403.58,0,0,1-.1-209.74Z"/>
                    <path onClick={()=>{handleClick(6)}}  class="cls-10" style={{opacity:  Selected==null || Selected==6? 1:0.6 }}  d="M500.37,500.63l104.82,391.2-.48.13a403.7,403.7,0,0,1-209.26.24Z"/>
                    <path onClick={()=>{handleClick(3)}}  class="cls-11" style={{opacity:  Selected==null || Selected==3? 1:0.6 }}  d="M891.57,395.81a403.57,403.57,0,0,1-.12,209.61L500.37,500.63Z"/>
                    <path onClick={()=>{handleClick(0)}}  class="cls-12" style={{opacity:  Selected==null || Selected==0? 1:0.6 }}  d="M605.38,108.71l-105,391.92L395.29,108.46A403.45,403.45,0,0,1,605.38,108.71Z"/>
            </svg>
        </div>
    )
}

export default CircularInput
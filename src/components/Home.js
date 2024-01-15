import React from 'react';
import '../CSS/home.css';
function Home() {
  return (
    <section>
        <div className='position-relative'>
            <div className='banner-home'>
            <img className='w-100' src='../images/banner.png' />
            </div>
            <div className='homeBanner_Content position-absolute'>
                    <h1>THẾ GIỚI NỘI THẤT SỐ 1 VIỆT NAM</h1>
                    <h2>HOÀNG HOAN</h2>
                    <p>
                        Sứ mệnh của chúng tôi là kết hợp hài hòa giữa ý tưởng và mong muốn của khách hàng, đem lại những phút giây thư giãn tuyệt vời bên gia đình và những người thân yêu.
                    </p>
            </div>
            <a href="#" className='contact-button'>
                liên hệ ngay
            </a>
        </div>    
    </section>
  )
}

export default Home
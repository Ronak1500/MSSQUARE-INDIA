import React from 'react'
import logo from '../logo.png'

function Projects() {
    const mccube = () => {
        window.open("https://www.mccubeindia.com/");
    };
    const mccubeoes = () => {
        window.open("https://oes.mccubeindia.com/#/");
    };
  return (
    <div>
        {/* HEADER */}
        <div id='header' className='header' style={{color:"white", backgroundColor:"black"}}>
            <div style={{display:"flex", width:'40%',}}>
            <img style={{width:"15%", marginLeft:"10%"}} alt="" src={logo}/>
            {/* <img style={{width:"8%"}} src={msslogo} /> */}
            <div className='waviy'>
                <label className='l1' style={{marginTop:"6%",animationDelay:"0.25s"}}>M</label>    
                <label className='l1' style={{marginTop:"6%",animationDelay:"0.5s"}}>S</label>    
                <label className='l1' style={{marginTop:"6%",animationDelay:"0.75s"}}>S</label>    
                <label className='l1' style={{marginTop:"6%",animationDelay:"1s"}}>Q</label>    
                <label className='l1' style={{marginTop:"6%",animationDelay:"1.25s"}}>U</label>    
                <label className='l1' style={{marginTop:"6%",animationDelay:"1.50s"}}>A</label>    
                <label className='l1' style={{marginTop:"6%",animationDelay:"1.75s"}}>R</label>    
                <label className='l1' style={{marginTop:"6%",animationDelay:"2s"}}>E</label>    
            </div></div>
            <div className='nav' >
                <a style={{color:"white"}}>HOME</a>
                <a style={{color:"white"}}>SERVICES</a>
                <a style={{color:"white"}}>PROJECTS</a>
                <a style={{color:"white"}}>BLOG</a>
                <a style={{color:"white"}}>CONTACT</a>
            </div>
            <i class="fa fa-bars fa-2x navb" aria-hidden="true"></i>
        </div>
        
        {/* PROJECTS */}
        <div id='project' className='Hproject'>
            <b>Our Awesome Projects</b>
            <p>We work with you to understand the specific needs of your business in order to develop high transactional and high-quality web 
               systems. Starting from designing and building to deploying web systems, only the latest technology is used to develop innovative websites.</p>
        </div>
        <div className='newpro'>
            <div style={{width:"100%", height:"10vh",display:"flex",alignItems:"center", justifyContent:"space-between",paddingRight:"1%", backgroundColor:"#EA4335", marginTop:"1%", borderRadius:10}}>
                <h2 style={{marginLeft:"1%"}}>MCCUBE WEBSITE</h2>
                <button style={{width:"12%", height:"40%", border:"1px solid black", borderRadius:5, backgroundColor:"transparent"}} onClick={mccube}>VISIT WEBSITE</button>
            </div>
            <div style={{width:"100%", height:"10vh",display:"flex",alignItems:"center", justifyContent:"space-between",paddingRight:"1%", backgroundColor:"#4285F4", marginTop:"1%", borderRadius:10}}>
                <h2 style={{marginLeft:"1%"}}>MCCUBE OES</h2>
                <button style={{width:"12%", height:"40%", border:"1px solid black", borderRadius:5, backgroundColor:"transparent"}} onClick={mccubeoes}>VISIT WEBSITE</button>
            </div>
            <div style={{width:"100%", height:"10vh",display:"flex",alignItems:"center", justifyContent:"space-between",paddingRight:"1%", backgroundColor:"#FBBC05", marginTop:"1%", borderRadius:10}}>
                <h2 style={{marginLeft:"1%"}}>FUEL IT</h2>
                <button style={{width:"12%", height:"40%", border:"1px solid black", borderRadius:5, backgroundColor:"transparent"}}>VISIT WEBSITE</button>
            </div>
            <div style={{width:"100%", height:"10vh",display:"flex",alignItems:"center", justifyContent:"space-between",paddingRight:"1%", backgroundColor:"#34A853", marginTop:"1%", borderRadius:10}}>
                <h2 style={{marginLeft:"1%"}}>PRINT BAZAR</h2>
                <button style={{width:"12%", height:"40%", border:"1px solid black", borderRadius:5, backgroundColor:"transparent"}}>VISIT WEBSITE</button>
            </div>
            <div style={{width:"100%", height:"10vh",display:"flex",alignItems:"center", justifyContent:"space-between",paddingRight:"1%", backgroundColor:"#EA4335", marginTop:"1%", borderRadius:10}}>
                <h2 style={{marginLeft:"1%"}}>DMS</h2>
                <button style={{width:"12%", height:"40%", border:"1px solid black", borderRadius:5, backgroundColor:"transparent"}}>VISIT WEBSITE</button>
            </div>
            <div style={{width:"100%", height:"10vh",display:"flex",alignItems:"center", justifyContent:"space-between",paddingRight:"1%", backgroundColor:"#4285F4", marginTop:"1%", borderRadius:10}}>
                <h2 style={{marginLeft:"1%"}}>HRM</h2>
                <button style={{width:"12%", height:"40%", border:"1px solid black", borderRadius:5, backgroundColor:"transparent"}}>VISIT WEBSITE</button>
            </div>
        </div>
    </div>
  )
}

export default Projects
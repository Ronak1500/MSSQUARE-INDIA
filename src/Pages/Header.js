import React, { useEffect, useState } from 'react'
import Rimg from '../reactimg.png' 
import Nimg from '../nodeimg.png'
import Aimg from '../awsimg.png'
import Mimg from '../mongoDB.png'
import Dimg from '../djangoimg.png'
import Eimg from '../expressimg.png'
import msslogo from '../msslogo.png'
import logo from '../logo.png'
import logo1 from '../logo1.png'
import logogif from '../logogif.gif'
import { useNavigate } from 'react-router-dom';
function Header() {
    const [loader,setLoader]=useState(true)
    useEffect(()=>{setTimeout(()=>{setLoader(false)},4400)},[])
    const navigate= useNavigate("")
    const scrollhome = () => {
        const section = document.querySelector( '#home' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
      };
    const scrollservice = () => {
        const section = document.querySelector( '#service' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
      };
    const scrollproject = () => {
        const section = document.querySelector( '#project' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
      };
    const scrollblog = () => {
        const section = document.querySelector( '#blog' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
      };
    const scrollContact = () => {
        const section = document.querySelector( '#contact-us' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
      };
    const scrollbacktoTop = () => {
        const section = document.querySelector( '#home' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
      };
      const mccube = () => {
        window.open("https://www.mccubeindia.com/");
      };
      const mccubeoes = () => {
        window.open("https://oes.mccubeindia.com/#/");
      };
      const [shownav,setShownav]= useState(false)
      return (
        <>{!loader?
    <div>
        {/* HEADER/ */}
        <div id='header' className='header'>
            <div style={{display:"flex", width:'60%',}}>
            <img className='logo' src={logo}/>
            {/* <img className='logo' src={logo1}/> */}
            {/* <div className='logo'></div> */}
            {/* <img style={{width:"8%"}} src={msslogo} /> */}
            <div className='waviy'>
                <label className='l1' style={{animationDelay:"0.25s"}}>M</label>    
                <label className='l1' style={{animationDelay:"0.5s"}}>S</label>    
                <label className='l1' style={{animationDelay:"0.75s"}}>S</label>    
                <label className='l1' style={{animationDelay:"1s"}}>Q</label>    
                <label className='l1' style={{animationDelay:"1.25s"}}>U</label>    
                <label className='l1' style={{animationDelay:"1.50s"}}>A</label>    
                <label className='l1' style={{animationDelay:"1.75s"}}>R</label>    
                <label className='l1' style={{animationDelay:"2s"}}>E</label>    
            </div>
            <div className='waviy1'>
                <label className='l1' style={{animationDelay:"2.25s"}}>I</label>    
                <label className='l1' style={{animationDelay:"2.5s"}}>N</label>    
                <label className='l1' style={{animationDelay:"2.75s"}}>D</label>    
                <label className='l1' style={{animationDelay:"3s"}}>I</label>    
                <label className='l1' style={{animationDelay:"3.25s"}}>A</label> 
            </div>
            </div>
            <div className='nav'>
                <li><a onClick={()=>scrollhome()}>HOME</a></li>
                <li><a onClick={()=>scrollservice()}>SERVICES</a></li>
                <li><a onClick={()=>scrollproject()}>PROJECTS</a></li>
                <li><a onClick={()=>scrollblog()}>BLOG</a></li>
                <li><a onClick={()=>scrollContact()} >CONTACT</a></li>
            </div>
            {shownav===false?
            <i  class="fa fa-bars fa-2x navb" onClick={()=>setShownav(true)} aria-hidden="true"></i>:
            <i class="fa fa-times fa-2x cross" onClick={()=>setShownav(false)} aria-hidden="true"  style={{color:"white"}}></i>}
        </div>

        <div style={{width:"100%",backgroundColor:"black",display:"flex",flexDirection:"column",color:"white",textAlign:"center",fontSize:20 ,height:shownav?160:0,overflow:"hidden",transition:"0.5s", position:"absolute", zIndex:5}}>
                <a onClick={()=>scrollhome()}>HOME</a>
                <a onClick={()=>scrollservice()}>SERVICES</a>
                <a onClick={()=>scrollproject()}>PROJECTS</a>
                <a onClick={()=>scrollblog()}>BLOG</a>
                <a onClick={()=>scrollContact()} >CONTACT</a><br/>
        </div>
        
        {/* HOME */}
        <div id='home' className='home'>
            <div className='homehd'>
                <div><h1>We are Tech Company.</h1></div>
                <label>We build Stunning Responsive Websites and Mobile app .   </label>
            </div>
            <div className='homeimg'></div>
            <div className='greydiv'></div>
        </div>
        {/* <img style={{width:"100%"}} src={msslogo} />   */}
        {/* SERVICES */}
        {/* <div  style={{height:"10vh", width:"100%", marginTop:"5%"}}> </div> */}
        <div  className='serimg'>
            <img src={Rimg} className="serimg1 react"/>
            <img src={Nimg} className="serimg1"/>
            <img src={Aimg} className="serimg1 aws"/>
            <img src={Mimg} className="serimg1 mimg" />
            {/* <img src={Dimg} className="serimg1"/>
            <img src={Eimg} className="serimg1"/> */}
        </div>
        <div id='service' style={{width:"90%", padding:"5%"}}>
            <label style={{fontSize:40, fontWeight:"bold", fontFamily: "'Khula', sans-serif", color:"#0B093B"}}>Our Awesome Services</label><br/><br/>
            <p style={{fontSize:13.5,color:"#0B093B",marginTop:"-2%", fontFamily: "'Khula', sans-serif",}}>Mssquare is top IT company in Asia. Company has reached best world class practice in the \
            field of web and mobile applications services.<br/>Web designing and development being the main company activity, We \
            provide a range of scripts for launching e-commerce sites and shopping carts which includes Group buying, Deal aggregator,
            Micro <br/> job site, and online bidding.</p>
        </div>
        <div className='sercont'>
            <div className='sercont1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 24 24" fill="#4cd5c5	" stroke="#0d0d0a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg><br/>
                {/* <i class="fa fa-mobile fa-4x" aria-hidden="true"></i><br/> */}
                <label>Mobile App</label>
                <p>we are developing native consumer and enterprise apps for mobile platforms including IOS and Android. 
                   Our professional team of mobile application development is highly specialized in creating standard mobile
                   apps for enterprise and start ups with creative idea and concept .</p>
            </div>
            <div className='sercont1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="50.336" height="40.531" viewBox="0 0 43.336 32.531"><g data-name="Group 71"><path data-name="Path 123" d="M38.562 24.112H4.778a3.428 3.428 0 01-3.414-3.406V4.776a3.424 3.424 0 013.409-3.412h33.784a3.425 3.425 0 013.41 3.41V20.7a3.425 3.425 0 01-3.407 3.412z" fill="#f40051"></path><path data-name="Path 124" d="M38.559 0H4.778A4.785 4.785 0 000 4.776v15.922a4.786 4.786 0 004.778 4.778h13.507v4.322h-3.926a.684.684 0 00-.681.683v1.366a.684.684 0 00.681.683h14.619a.685.685 0 00.682-.683v-1.366a.685.685 0 00-.682-.683h-3.926v-4.322H38.56a4.786 4.786 0 004.776-4.778V4.776A4.785 4.785 0 0038.559 0zM22.321 29.8h-1.308v-4.322h1.308zm18.283-9.1a2.068 2.068 0 01-2.045 2.048H4.778a2.07 2.07 0 01-2.05-2.048V4.778a2.069 2.069 0 012.048-2.047h33.782a2.069 2.069 0 012.045 2.047z" fill="#0b093b"></path></g></svg><br/>
                <label>Web Design</label>
                <p>Website development is a comprehensive process. It needs to follow systematic and disciplined approaches for
                   improved operation as well as maintenance of website applications. Website development makes customers aware
                    of the services and products offered by the business.</p>
            </div>
            <div className='sercont1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="39.581" height="39.58" viewBox="0 0 39.581 39.58"><g data-name="Group 72"><path data-name="Path 127" d="M34.807 38.214H4.778a3.424 3.424 0 01-3.412-3.41V14.548a3.426 3.426 0 013.408-3.4h30.029a3.423 3.423 0 013.41 3.411v20.246a3.423 3.423 0 01-3.408 3.413z" fill="#4cd5c5"></path><g data-name="Group 69" fill="#0b093b"><path data-name="Path 128" d="M34.803 0H4.777A4.785 4.785 0 000 4.777v30.025a4.787 4.787 0 004.777 4.778h30.026a4.785 4.785 0 004.776-4.778V4.777A4.785 4.785 0 0034.803 0zm2.046 34.8a2.068 2.068 0 01-2.046 2.048H4.777A2.07 2.07 0 012.729 34.8V14.547a2.07 2.07 0 012.048-2.04h30.026a2.069 2.069 0 012.046 2.05zm0-24.552a4.775 4.775 0 00-2.046-.47H4.777a4.783 4.783 0 00-2.048.47V4.774a2.069 2.069 0 012.047-2.047h30.026a2.068 2.068 0 012.046 2.047z"></path><path data-name="Path 129" d="M25.905 3.182a3.072 3.072 0 103.071 3.072 3.075 3.075 0 00-3.071-3.072zm0 4.378a1.307 1.307 0 111.307-1.305 1.314 1.314 0 01-1.305 1.306z"></path><path data-name="Path 130" d="M32.673 3.182a3.072 3.072 0 103.07 3.072 3.073 3.073 0 00-3.07-3.072zm0 4.378a1.307 1.307 0 111.307-1.305 1.315 1.315 0 01-1.305 1.306z"></path></g></g></svg><br/>
                <label>Web App</label>
                <p>A web application (or web app) is application software that runs on a web browser, unlike software programs that 
                    run locally and natively on the operating system (OS) of the device. Web applications are delivered on the World
                     Wide Web to users with an active network connection.</p>
            </div>
            <div className='sercont1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="39.581" height="39.58" viewBox="0 0 39.581 39.58"><g data-name="Group 72"><path data-name="Path 127" d="M34.807 38.214H4.778a3.424 3.424 0 01-3.412-3.41V14.548a3.426 3.426 0 013.408-3.4h30.029a3.423 3.423 0 013.41 3.411v20.246a3.423 3.423 0 01-3.408 3.413z" fill="#4cd5c5"></path><g data-name="Group 69" fill="#0b093b"><path data-name="Path 128" d="M34.803 0H4.777A4.785 4.785 0 000 4.777v30.025a4.787 4.787 0 004.777 4.778h30.026a4.785 4.785 0 004.776-4.778V4.777A4.785 4.785 0 0034.803 0zm2.046 34.8a2.068 2.068 0 01-2.046 2.048H4.777A2.07 2.07 0 012.729 34.8V14.547a2.07 2.07 0 012.048-2.04h30.026a2.069 2.069 0 012.046 2.05zm0-24.552a4.775 4.775 0 00-2.046-.47H4.777a4.783 4.783 0 00-2.048.47V4.774a2.069 2.069 0 012.047-2.047h30.026a2.068 2.068 0 012.046 2.047z"></path><path data-name="Path 129" d="M25.905 3.182a3.072 3.072 0 103.071 3.072 3.075 3.075 0 00-3.071-3.072zm0 4.378a1.307 1.307 0 111.307-1.305 1.314 1.314 0 01-1.305 1.306z"></path><path data-name="Path 130" d="M32.673 3.182a3.072 3.072 0 103.07 3.072 3.073 3.073 0 00-3.07-3.072zm0 4.378a1.307 1.307 0 111.307-1.305 1.315 1.315 0 01-1.305 1.306z"></path></g></g></svg><br/>
                <label>Software development</label>
                <p>Software development refers to a set of computer science activities dedicated to the process of creating, designing, 
                    deploying and supporting software. Software itself is the set of instructions or programs that tell a computer what 
                    to do. It is independent of hardware and makes computers programmable.</p>
            </div>
        </div>
        <div className='sermiss'>
            <div className='vermiss'>
                <h4 style={{fontSize:15, color:"#0B093B"}}>A few words about company</h4>
                <h2 style={{fontSize:40, color:"#0B093B", marginTop:"-3%"}}>VISION AND MISSION</h2>
                <h4 style={{fontSize:15,color:"#0B093B", marginTop:"-5%"}}>Vission</h4>
                <p style={{fontSize:12}}>Our Vision is to be a leading Web Solution company in IT sector and progress in our current position in market. We know 
                   that Customer’s growth is our growth, so we commit our customers to help in achieving their business goals. We believe 
                   in work with the accuracy and best quality. We want to be known as the reliable, innovative and user friendly software 
                   service provider in IT industry.</p>
                <h4 style={{fontSize:15, color:"#0B093B",}}>Mission</h4>
                <p style={{fontSize:12}}>Exceed client's expectations by going beyond software to provide best Web solutions that transform data into knowledge, 
                   enabling them to solve their problems.</p>
            </div>
            <div className='imgwrap'>
                <div className='blue'   ></div>
                <div className='red'    ></div>
                <div className='yellow' ></div>
                <div className='green ' ></div>
            </div>
        </div>

        {/* PROJECTS */}
        <div id='project' className='Hproject'>
            <b>Our Awesome Projects</b>
            <p>We work with you to understand the specific needs of your business in order to develop high transactional and high-quality web 
               systems. Starting from designing and building to deploying web systems, only the latest technology is used to develop innovative websites.</p>
        </div>
        <div className='project'>
            <div className='project1'>
                <div className='pro1 Gred' onClick={mccube} >MCCUBE<br/> WEBSITE</div>
                <br/><br/><b>MCCUBE WEBSITE</b>
                <p>Mc cube website is develop on react js .</p>
            </div>
            <div className='project1'>
                <div className='pro1 Gblue' onClick={mccubeoes}>MCCUBE OES</div>
                <br/><br/><b>MCCUBE OES</b>
                <p>It is Web App developed on react for online learning.</p>
            </div>
            <div className='project1'>
                <div className='pro1 Gyellow' >FUEL IT</div>
                <br/><br/><b>Fuel IT</b>
                <p>Fuel delivery Android , ios and web App.</p>
            </div>
            <div className='project1'>
                <div className='pro1 Ggreen' >PRINT BAZAR</div>
                <br/><br/><b>Print Bazar</b>
                <p>very attractive and usefull project for print media.</p>
            </div>
            <div className='project1'>
                <div className='pro1 Gred' >DMS</div>
                <br/><br/><b>DMS</b>
                <p>IT is very advance data management system with AI integration.</p>
            </div>
            <div className='project1'>
                <div className='pro1 Gblue' >HRM</div>
                <br/><br/><b>HRM</b>
                <p>Advance human resource management software with many features like payroll , leave management and many more.</p>
            </div>
        </div>
        {/* <button className='btn' >Load More....</button> */}

        {/* BLOGS */}
        <div id='blog' style={{height:"10vh", width:"100%", marginTop:"5%"}}> </div>
        <div style={{ marginTop:"5%",}}><b style={{fontSize:40,color:"#0B093B", marginLeft:"5%"}}>Our Blog  Stories</b></div>
        <div className='blog'> 
            <div className='blog1'>
                <b>What is React</b>
                <p>React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.</p>
            </div>
            <div className='blog1'>
                <b>What is React Native</b>
                <p>React Native is an open-source UI software framework created by Meta Platforms, Inc. 
                   It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities. React Native currently supports both iOS and Android, and has the potential to expand to future platforms as well. In this book, we’ll cover both iOS and Android. The vast majority of the code we write will be cross-platform. And yes: you can really use React Native to build production-ready mobile applications! .
                </p>
            </div>
            <div className='blog1'>
                <b>Node JS</b>
                <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a JavaScript everywhere  paradigm, unifying web-application development around a single programming language , rather than different languages for server-side and client-side scripts.</p>
            </div>
            <div className='blog1'>
                <b>React Vs Angular</b>
                <p>If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.
                   React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.
                   React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.</p>
            </div>
            <div className='blog1'>
                <b>React Vs Vue</b>
                <p>The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.
                   Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.
                   Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.</p>
            </div>
            <div className='blog1'>
                <b>What is AWS</b>
                <p>Amazon Web Services, Inc. (AWS) is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis. These cloud computing web services provide distributed computing processing capacity and software tools via AWS server farms. One of these services is Amazon Elastic Compute Cloud (EC2), which allows users to have at their disposal a virtual cluster of computers, available all the time, through the Internet. AWS's virtual computers emulate most of the attributes of a real computer, including hardware central processing units (CPUs) and graphics processing units (GPUs) for processing; local/RAM memory; hard-disk/SSD storage; a choice of operating systems; networking; and pre-loaded application software such as web servers, databases, and customer relationship management (CRM).</p>
            </div>
        </div>
        {/* <button className='btn' >Load More....</button> */}
        <div className='ourclient'><br/><br/>
            <b>OUR CLIENTS</b>
            <p>What our Customers are saying</p> 
        </div>
        <div className='clients'>
            <div className='quoteimg'>
                <p>This was a very tough project to achieve. <br/> Working with Mssquare and his team,<br/> we were able to make this project happen.<br/> Great job MSsquare and the team...<br/>now on to the next project!</p>
                <b style={{color:"#F2B300"}}>Yogesh, CEO Mssquare</b>
            </div>
            <div className='quoteimg'>
                <p>Mssquare and their entire team <br/> are great. They have great understanding <br/>of language and were very supportive on landing <br/>our requirements. this is a deffinite<br/> reccomendation to hire them.</p>
                <b style={{color:"#F2B300"}}>From CEO, DMS </b>
            </div>
            <div className='quoteimg'>
                <p>Everything went well. Very easy to <br/> work with. Willing to do whatever <br/>was needed to finish project.<br/> We'd definitely work with Mssquare again.<br/> Thanks good job.</p>
                <b style={{color:"#F2B300"}}>From Director, OES</b>
            </div>
        </div>

        {/* CONTACT */}
        <div id="contact-us" className='touch'>
            <br/><br/><br/><b>Let's get in touch</b>
            <p>We are ready to help throughout our journey with you.<br/>
               Send a query of your concern and get yourself assisted in the right way. Start Here!.</p><br/><br/>
        </div>
        <div className='conmap'>
            <div className='con'>
                    <label>Name:</label>
                    <input />
                    <label>Contact:</label>
                    <input />
                    <label>Email:</label>
                    <input />
                    <label>Subject:</label>
                    <input />
                    <textarea placeholder="Enter Your Message Here......"/>
                    <button onClick={()=>alert("Successfully send")} className='btn1' style={{backgroundColor:"#580CD2", width:"35%", height:"7vh", color:"white", fontSize:18, marginTop:"5%", borderRadius:10, border:"none"}}>Send Message</button>
            </div>
            <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.0979641401286!2d75.8834588142773!3d22.76174543173905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd470eefdefb%3A0xda66d8a178bdba56!2sMCCUBE%20CLASSES%20in%20INDORE%20for%20CAT%2C%20CMAT%2C%20IPM!5e0!3m2!1sen!2sin!4v1673959382652!5m2!1sen!2sin" style={{border:"0", width:"87%", height:"78%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
            
        {/* FOOTER */}
        <div id='foot' className='footer'>
            <div style={{fontSize:30}}>MSSQUARE INDIA</div>
            <div style={{fontSize:14}}>© 2022-2023 - <label>MSSQUARE INDIA</label> All Right Reserved</div>
            <div onClick={()=>scrollbacktoTop()}> Back to top ↑</div>
        </div>
        
    </div> :<div style={{width:"100%",height:"100vh",alignItems:"center",display:"flex",justifyContent:"center",backgroundColor:"rgba(0,0,0)"}}>
        <img style={{width:"30%",height:"auto"}}src={logogif}/>
        </div>}</>
  )
}
export default Header
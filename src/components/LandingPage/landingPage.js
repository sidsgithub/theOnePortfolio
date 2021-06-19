import {React} from '../../imports/common-imports';
import '../../stylesheets/LandingPage/landing-page.css'
import '../../imports/fonts.css'

const LandingPage = () => {
    return(<div className = 'landing-div'>
        
     

        <div className='introduction-script'>
        <div className='caveat-font html-background-tags'>{`<body>`}</div>
        <div className='caveat-font html-background-tags margin-top-3'>{`<h3>`}</div>
        <div className='dancing-script-font em-1 content'>Hi ,</div>
        <div className='caveat-font html-background-tags'>{`</h3>`}</div>
        <div className='caveat-font html-background-tags margin-top-3'>{`<section>`}</div>
        <div className='dancing-script-font em-2 content'>Thanks for stopping by</div>
        <div className='dancing-script-font em-2 content margin-top-5'>meet Sid ,</div>
        <div className='dancing-script-font em-2 content margin-top-5'>a Web Developer</div>
        <div className='caveat-font html-background-tags'>{`</section>`}</div>
        <div className='caveat-font html-background-tags margin-top-3'>{`</body>`}</div>
        </div>
        <div className='outer-frame'>
            <div className='inner-frame'></div>
        </div>

        </div>)
}

export default LandingPage;
import {Typist,React} from '../../../imports/common-imports';

const TypistText = () => 
    <Typist
    cursor={{ show: false }}
    startDelay={500}
    avgTypingDelay={100}
  >
    <span>
      a<span className="color-red"> Front End Engineer</span>{" "}
    </span>
    <Typist.Backspace count={19} delay={1000} />
    <span className="color-red">Photographer</span>
    <Typist.Backspace count={12} delay={1000} />
    <span className="color-red">Musician</span>
    <Typist.Backspace count={8} delay={1000} />
    <span className="color-red">Mural Artist</span>
    <Typist.Backspace count={12} delay={1000} />
    <span className="color-red">Traveller</span>
    <Typist.Backspace count={10} delay={1000} />
    <span className="color-red"> Dreamer</span>
    <Typist.Backspace count={8} delay={1000} />
    <span>
      nd a <span className="color-red">Believer</span>
    </span>
    <Typist.Backspace count={14} delay={1000} />
    <span className="color-red"> Lost Context :p</span>
    <Typist.Backspace count={15} delay={800} />
    <span className="color-cyan">Let's Scroll Now</span>
  </Typist>

export default TypistText;
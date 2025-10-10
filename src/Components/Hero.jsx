import Chatbox from './Chatbox'

const Hero = () => {
	return (
    <section className="section mx container">
      <h1 className="heading-md mb-2 text-center">
        Translate Banglish to Bangla
      </h1>
      <p className="description mx-auto text-center">
        No more hassle in writing Bangla, Just type Banglish and get yourself
        pure Bangla texts. <strong>100% free. No Sign-up Required</strong>
      </p>
      <Chatbox />
    </section>
  );
}

export default Hero
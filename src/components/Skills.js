import * as icon from '../assets/img';

function Skills() {
  return (
    <section id='skills' className='bg-neutral-50'>
      <div className='container py-6'>
        <h2>Skills</h2>
        <div className='mt-5'>
          <h3>Languages</h3>
          <p><img className='skills-icon' src={icon.javascript} alt='JavaScript' />JavaScript</p>
          <p><img className='skills-icon' src={icon.python} alt='Python' />Python</p>
          <p><img className='skills-icon' src={icon.mysql} alt='MySQL' />MySQL</p>
          <p><img className='skills-icon' src={icon.html} alt='HTML5' />HTML</p>
          <p><img className='skills-icon' src={icon.css} alt='CSS3' />CSS</p>
          <p><img className='skills-icon' src={icon.java} alt='Java' />Java</p>
          <p><img className='skills-icon' src={icon.r} alt='R' />R</p>
        </div>

        <div className='mt-5'>
          <h3>Frameworks/Libraries/Databases</h3>
          <p><img className='skills-icon' src={icon.react} alt='ReactJs' />React.js</p>
          <p><img className='skills-icon' src={icon.nodejs} alt='NodeJs' />Node.js</p>
          <p><img className='skills-icon' src={icon.express} alt='ExpressJs' />Express.js</p>
          <p><img className='skills-icon' src={icon.passportjs} alt='PassportJs' />Passport.js</p>
          <p><img className='skills-icon' src={icon.mongodb} alt='MongoDB' />MongoDB</p>
          <p><img className='skills-icon' src={icon.mongoose} alt='Mongoose' />Mongoose</p>
          <p><img className='skills-icon' src={icon.bootstrap} alt='Bootstrap' />bootstrap</p>
          <p><img className='skills-icon' src={icon.tailwindcss} alt='TailwindCSS' />Tailwind</p>
          <p><img className='skills-icon' src={icon.pug} alt='pug' />Pug</p>
        </div>

        <div className='mt-5'>
          <h3>Miscellaneous</h3>
          <p><img className='skills-icon' src={icon.git} alt='Git' />Git</p>
          <p><img className='skills-icon' src={icon.github} alt='GitHub' />GitHub</p>
          <p><img className='skills-icon' src={icon.npm} alt='npm' />npm</p>
          <p><img className='skills-icon' src={icon.webpack} alt='Webpack' />Webpack</p>
          <p><img className='skills-icon' src={icon.heroku} alt='Heroku' />Heroku</p>
          <p><img className='skills-icon' src={icon.jest} alt='Jest' />Jest</p>
          <p><img className='skills-icon' src={icon.firebase} alt='Firebase' />Firebase</p>
          <p><img className='skills-icon' src={icon.tableau} alt='Tableau' />Tableau</p>
          <p><img className='skills-icon' src={icon.powerbi} alt='Power BI' />Power BI</p>
        </div>

      </div>
    </section>  
  );
}

export default Skills;
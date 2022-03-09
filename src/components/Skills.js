import icons from '../assets/img';

function Skills() {  
  
  return (
    <section id='skills' className='bg-neutral-50'>
      <div className='container py-6'>
        <h2>Skills</h2>
        <div className='mt-5'>
          <h3>Languages</h3>
          <p><img className='skills-icon' src={icons.javascript.iconSrc} alt='JavaScript' />JavaScript</p>
          <p><img className='skills-icon' src={icons.python.iconSrc} alt='Python' />Python</p>
          <p><img className='skills-icon' src={icons.mysql.iconSrc} alt='MySQL' />MySQL</p>
          <p><img className='skills-icon' src={icons.html.iconSrc} alt='HTML5' />HTML</p>
          <p><img className='skills-icon' src={icons.css.iconSrc} alt='CSS3' />CSS</p>
          <p><img className='skills-icon' src={icons.java.iconSrc} alt='Java' />Java</p>
          <p><img className='skills-icon' src={icons.r.iconSrc} alt='R' />R</p>
        </div>

        <div className='mt-5'>
          <h3>Frameworks/Libraries/Databases</h3>
          <p><img className='skills-icon' src={icons.react.iconSrc} alt='ReactJs' />React.js</p>
          <p><img className='skills-icon' src={icons.nodejs.iconSrc} alt='NodeJs' />Node.js</p>
          <p><img className='skills-icon' src={icons.express.iconSrc} alt='ExpressJs' />Express.js</p>
          <p><img className='skills-icon' src={icons.passportjs.iconSrc} alt='PassportJs' />Passport.js</p>
          <p><img className='skills-icon' src={icons.mongodb.iconSrc} alt='MongoDB' />MongoDB</p>
          <p><img className='skills-icon' src={icons.mongoose.iconSrc} alt='Mongoose' />Mongoose</p>
          <p><img className='skills-icon' src={icons.bootstrap.iconSrc} alt='Bootstrap' />bootstrap</p>
          <p><img className='skills-icon' src={icons.tailwindcss.iconSrc} alt='TailwindCSS' />Tailwind</p>
          <p><img className='skills-icon' src={icons.pug.iconSrc} alt='pug' />Pug</p>
        </div>

        <div className='mt-5'>
          <h3>Miscellaneous</h3>
          <p><img className='skills-icon' src={icons.git.iconSrc} alt='Git' />Git</p>
          <p><img className='skills-icon' src={icons.github.iconSrc} alt='GitHub' />GitHub</p>
          <p><img className='skills-icon' src={icons.npm.iconSrc} alt='npm' />npm</p>
          <p><img className='skills-icon' src={icons.webpack.iconSrc} alt='Webpack' />Webpack</p>
          <p><img className='skills-icon' src={icons.heroku.iconSrc} alt='Heroku' />Heroku</p>
          <p><img className='skills-icon' src={icons.jest.iconSrc} alt='Jest' />Jest</p>
          <p><img className='skills-icon' src={icons.firebase.iconSrc} alt='Firebase' />Firebase</p>
          <p><img className='skills-icon' src={icons.tableau.iconSrc} alt='Tableau' />Tableau</p>
          <p><img className='skills-icon' src={icons.powerbi.iconSrc} alt='Power BI' />Power BI</p>
        </div>

      </div>
    </section>  
  );
}

export default Skills;
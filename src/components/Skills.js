import icons from '../assets/img';

// arrays to order skills 
const languages = [
  icons.javascript,
  icons.python,
  icons.mysql,
  icons.html,
  icons.css,
  icons.java,
  icons.r
];
const frameworks = [
  icons.react,
  icons.nodejs,
  icons.express,
  icons.passportjs,
  icons.mongodb,
  icons.mongoose,
  icons.bootstrap,
  icons.tailwindcss,
  icons.pug
];
const misc = [
  icons.git,
  icons.github,
  icons.npm,
  icons.webpack,
  icons.heroku,
  icons.jest,
  icons.firebase,
  icons.tableau,
  icons.powerbi
];

// create each skills subsection
function SkillsSub(props) {
  const skills = props.skills;

  return (
    <div className='mt-2 grid gap-4 grid-cols-4 md:grid-cols-6 lg:grid-cols-8'>
      {
        skills.map(skill => {
          return (
            <div key={skill.name} className='flex flex-col justify-between items-center gap-2'>
              <div className='h-16 sm:h-24 aspect-square flex justify-center items-center bg-white rounded-md drop-shadow-md p-2'>
                <img className='object-contain' src={skill.iconSrc} alt={skill.name} />
              </div>
              <p className='text-sm sm:text-base'>{skill.name}</p>
            </div>
          );
        })
      }
    </div>
  );
}

// create skills section
function Skills() {  
  return (
    <section id='skills' className='bg-neutral-50'>
      <div className='container py-6'>
        <h2>Skills</h2>
        <div className='mt-5'>
          <h3>Languages</h3>
          <SkillsSub skills={languages}/>
        </div>
        <div className='mt-5'>
          <h3>Frameworks/Libraries/Databases</h3>
          <SkillsSub skills={frameworks}/>
        </div>
        <div className='mt-5'>
          <h3>Miscellaneous</h3>
          <SkillsSub skills={misc}/>
        </div>
      </div>
    </section>  
  );
}

export default Skills;
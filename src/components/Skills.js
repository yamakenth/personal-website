import icons from '../assets/img';

// arrays to order skills 
const languages = [
  icons.javascript,
  icons.html,
  icons.css,
  icons.python,
  icons.r,
  icons.mysql,
  icons.java
];
const frameworks = [
  icons.react,
  icons.nodejs,
  icons.express,
  icons.passportjs,
  icons.mongodb,
  icons.mongoose,
  icons.pug,
  icons.bootstrap,
  icons.tailwindcss
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
    <section id='skills' className='bg-neutral-100'>
      <div className='container py-16'>
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
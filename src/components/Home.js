const INTRO_TEXT = 'Hello! My name is Ken and I\'m a self-taught full-stack web developer.';

function Home() {
  return (
    <section id='home' className='bg-gradient-to-b from-black/70 to-white/40'>
      <div className='
        container
        h-72
        py-6
        flex
        flex-col
        items-center
        justify-end
        gap-3
      '>
        <p className='
          text-white 
          text-center
        '>
          {INTRO_TEXT}
        </p>
        <div>
          <button type='button' className='btn btn-primary'>Skills</button>
          <button type='button' className='btn btn-secondary'>Projects</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
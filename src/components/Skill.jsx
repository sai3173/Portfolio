import React from 'react'
import SkillCard from './SkillCard';

const skillItem = [
   {
    imgSrc: 'images/aws.svg',
    label: 'AWS Cloud',
    desc: ' Public Cloud'
  },
  {
    imgSrc: 'images/redhat.svg',
    label: 'Red Hat Openshift ',
    desc: ' Container Platform'
  },
  {
    imgSrc: 'images/kubernetes.svg',
    label: 'Kubernetes',
    desc: 'Orchestrator'
  },
  {
    imgSrc: 'images/docker.svg',
    label: 'Docker',
    desc: 'Containerization'
  },
   {
    imgSrc: 'images/linux.svg',
    label: 'Linux',
    desc: 'Operating System'
  },
  {
    imgSrc: 'images/github.svg',
    label: 'Github',
    desc: 'Repository'
  },
   {
    imgSrc: 'images/mysql.svg',
    label: 'MySql',
    desc: 'Database'
  },
  {
    imgSrc: 'images/dynatrace.svg',
    label: 'Dynatrace',
    desc: 'Observability'
  },
  
 
 
  
];

const Skill = () => {
  return (
    <section id='skill' className='section'>
      <div className="container">
        <h2 className='headline-2 reveal-up'>
          Essential Tools I use
        </h2>
        <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
          Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
        </p>
        <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
          {
            skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                key={key}
                classes=" reveal-up"
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Skill
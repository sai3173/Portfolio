


import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: 'images/project-1.png',
    title: 'RIBUI',
    tags: ['Openshift','Dynatrace','ELK'],
    projectLink: 'https://infinity.icicibank.com/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=ICI&ITM=nli_personalb_personal_login_btn&_gl=1*30xkeg*_ga*MTgzMDcxOTY5Ni4xNjIwMDM5NDU0*_ga_SKB78GHTFV*MTYyODIzNDM4NC43Ny4xLjE2MjgyMzQ1MDQuMjc.&_ga=2.92094746.1084279428.1697432242-1973315115.1690798212&_gac=1.213008672.1697523963.EAIaIQobChMI-7jpvrn8gQMVt6lmAh1nywMHEAAYASAAEgKBxfD_BwE?ITM=nli_personalb_personal_login_btn'
  },
  {
    imgSrc: 'images/project-2.png',
    title: 'I-Finance',
    tags: ['AWS', 'Dynatrace','Arcon'],
    projectLink: 'https://www.icicibank.com/home?ITM=nli_home_na_headerComponent_1CTA_CMS_headerMainLogo_NLI'
  },
  {
    imgSrc: 'images/project-3.png',
    title: 'ERPCA ',
    tags: ['AWS','Oracle Cloud','FTP'],
    projectLink: 'https://www.erpca.in/'
  },
  {
    imgSrc: 'images/project-4.png',
    title: 'V1 MALL',
    tags: ['AWS'],
    projectLink: 'https://v1malls.com/'
  },
  {
    imgSrc: 'images/project-5.png',
    title: 'DA Fleet',
    tags: [ 'cPanel','GoDaddy','M365'],
    projectLink: 'https://www.dafleet.com.au/'
  },
  {
    imgSrc: 'images/project-6.png',
    title: 'VxODigital',
    tags: [ 'AWS','RDP'],
    projectLink: 'https://vxodigital.com/'
  },
];



const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Portfolio Highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              className="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
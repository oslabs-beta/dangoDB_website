import React from 'react';
import bill from '../assets/bg_photo.png'
import celeste from '../assets/ck_photo.png'
import emilia from '../assets/ey_photo.png'
import steve from '../assets/sj_photo.png'
import ContactCard from './ContactCard'

// Contact container housing all contact card information
class ContactInfo {
  constructor(photo, linkedin, github, name) {
    this.photo = photo;
    this.linkedin = linkedin;
    this.github = github;
    this.name = name;
  }
};

// dangoDB Software Engineer information
const BILL = new ContactInfo(bill, 'https://www.linkedin.com/in/bill-greco/', 'https://github.com/wgreco13', 'Bill Greco',);
const CELESTE = new ContactInfo(celeste, 'https://www.linkedin.com/in/celeste-knopf37/','https://github.com/DHolliday1881', 'Celeste Knopf');
const EMILIA = new ContactInfo(emilia, 'https://www.linkedin.com/in/emiliayoffie/', 'https://github.com/emiliayoffie', 'Emilia Yoffie');
const STEVE = new ContactInfo(steve, 'https://www.linkedin.com/in/stephen-jue09/','https://github.com/kaizenjoo', 'Steve Jue');
const TEAMMEMBERS = [BILL, CELESTE, EMILIA, STEVE]

// Home Footer renders all contact information to container
function HomeFooter() {
  
  const teamInfo = TEAMMEMBERS.reduce((acc, person) => {
    acc.push(<ContactCard photo={person.photo} linkedin={person.linkedin} github={person.github} name={person.name} key={person.name} />)
    return acc;
  }, [])
  
  return (
    <section className="home-footer-container">
      <h2>Meet the Team</h2>
      <ul className="home-footer">
        { teamInfo }
      </ul>
    </section>
  );
};

export default HomeFooter;
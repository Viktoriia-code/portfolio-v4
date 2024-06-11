import React from 'react'
import { Socials_data } from "@/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const iconMapping: { [key: string]: IconDefinition } = {
  github: faGithub,
  linkedin: faLinkedin,
  email: faEnvelope,
}

const Socials = () => {
  return (
    <ul className="flex items-center gap-6" aria-label="Social media">
      {Socials_data.map((social) => (
        <li className="text-xs shrink-0" key={social.name}>
          <a href={social.link} key={social.name} target="_blank" rel="noreferrer" className='block hover:text-heading' aria-label={`${social.name} (opens in a new tab)`} title={social.name}>
            <span className="sr-only">{social.name}</span>
            <FontAwesomeIcon icon={iconMapping[social.name.toLowerCase()]} aria-hidden="true" className='text-2xl text-heading md:text-basicText hover:text-heading transition-all' />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Socials
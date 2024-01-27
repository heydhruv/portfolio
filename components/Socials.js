//next link
import Link from 'next/link';

//icons
import {
  RiYoutubeLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'/'} class="hover:text-accent transitions-all duration-300">
        <RiYoutubeLine/>
      </Link>
      <Link href={'https://github.com/heydhruv'} class="hover:text-accent transitions-all duration-300">
        <RiGithubFill/>
      </Link>
      <Link href={'https://www.linkedin.com/in/heydhruv/'} class="hover:text-accent transitions-all duration-300">
        <RiLinkedinBoxFill/>
      </Link>
      <Link href={'https://twitter.com/heydhruvdave'} class="hover:text-accent transitions-all duration-300">
        <RiTwitterFill/>
      </Link>
    </div>
  );
};

export default Socials;

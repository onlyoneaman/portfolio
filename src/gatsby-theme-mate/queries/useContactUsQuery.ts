import { graphql, useStaticQuery } from 'gatsby';
import { AboutMe, ContactUs, SocialLink } from '../types';

export type QueryResponse = {
  contentfulAbout: {
    socialLinks: SocialLink[]
  };
};

export const useContactUsQuery = (): ContactUs => {
  const { contentfulAbout } = useStaticQuery<QueryResponse>(graphql`
    query ContactUsQuery {
      contentfulAbout {
        socialLinks {
          url
          name
          icon: fontAwesomeIcon
        }
      }
    }
  `);

  return { ...contentfulAbout };
};

import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import { isDarkishTheme } from '../../helpers/utils';

const HeadTagEditor = ({ profile, theme, googleAnalytics, social }) => {
  return (
    <Fragment>
      {profile && (
        <Helmet>
          {googleAnalytics?.id && (
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalytics.id}`}
            ></script>
          )}
          {googleAnalytics?.id && (
            <script>
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalytics.id}');`}
            </script>
          )}
          <title>محمد حسین کرمی</title>
          <meta
            name="theme-color"
            content="#8d3bff"
          />

          <meta name="description" content="محمد حسین کرمی | Mohammad Hossein Karami | mhkarami97" />

          <meta
            itemProp="name"
            content="محمد حسین کرمی"
          />
          <meta itemProp="description" content="محمد حسین کرمی | Mohammad Hossein Karami | mhkarami97" />
          <meta itemProp="image" content="https://mhkarami97.ir/my.jpg" />

          <meta property="og:url" content={social?.website || ''} />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content={`${profile.name}`}
          />
          <meta property="og:description" content="محمد حسین کرمی | Mohammad Hossein Karami | mhkarami97" />
          <meta property="og:image" content="https://mhkarami97.ir/my.jpg" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content={`${profile.name}`}
          />
          <meta name="twitter:description" content="محمد حسین کرمی | Mohammad Hossein Karami | mhkarami97" />
          <meta name="twitter:image" content="https://mhkarami97.ir/my.jpg"  />
        </Helmet>
      )}
    </Fragment>
  );
};

HeadTagEditor.propTypes = {
  profile: PropTypes.object,
  theme: PropTypes.string,
  googleAnalytics: PropTypes.object.isRequired,
  social: PropTypes.object.isRequired,
};

export default HeadTagEditor;

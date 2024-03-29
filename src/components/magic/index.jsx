import PropTypes from 'prop-types';

const Magic = ({  }) => {
  return (
    <>
        <div className="card shadow-lg compact bg-base-100">
          <div className="card-body">
            <div className="flow-root">
              <div className="-m-1 flex flex-wrap justify-center">
                  <a href="https://magic.mhkarami97.ir" className="text-base inline-flex items-center font-bold leading-sm px-5 py-1 badge-accent bg-opacity-90 rounded-full">
                    Magic Box
                  </a>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

Magic.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Magic;

const NewsLatterBox = () => {
  return (
    <div
      className="wow fadeInUp relative z-10 rounded-md bg-primary/[3%] p-8 dark:bg-primary/10 sm:p-11 lg:p-8 xl:p-11"
      data-wow-delay=".2s"
    >
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Contact
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-3 text-base font-medium leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        You can contact us at the following addresses
      </p>
      <p className="mb-11 pb-3 text-base font-medium leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        Phone: +90 5XX XXX XXXX
        <br />
        E-Mail: <a href="mailto:email@example.com">ahmet.e.barut@gmail.com</a>
        <br />
        Instagram: <a href="https://www.instagram.com/vardibile/">@vardibile</a>
      </p>
    </div>
  );
};

export default NewsLatterBox;

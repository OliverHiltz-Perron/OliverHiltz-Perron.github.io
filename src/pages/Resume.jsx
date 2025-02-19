const Resume = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <div className="resume-content">
        <p>You can download my resume <a href={process.env.PUBLIC_URL + "/OliverResume.pdf"} target="_blank">here</a>.</p>
        {/* Add your resume sections here */}
      </div>
    </section>
  );
};

export default Resume; 
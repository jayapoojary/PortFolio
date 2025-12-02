const Resume = () => {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">Resume</h1>
      <a 
        href="/JAYAPOOJARY_NOVEMBER_SDE.pdf" 
        download="Jaya_Poojary_Resume.pdf" 
        className="mt-4 text-blue-500"
        target="_blank" 
        rel="noopener noreferrer"
      >
        Download My Resume
      </a>
    </div>
  );
};

export default Resume;

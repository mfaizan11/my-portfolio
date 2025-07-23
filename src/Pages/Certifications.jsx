import ReactBasic from "../assets/reactBasics.webp";
import htmlcss from "../assets/htmlcss.webp";
import versioncontrol from "../assets/versioncontrol.webp";
import jsfoundationsmozila from "../assets/jsfoundationsmozila.webp";
import cssforprogrammers from "../assets/cssforprogrammers.webp";
import gitessetialtraining from "../assets/gitessentialtraining.webp";
import advancereact from "../assets/advancereact.webp";
import design from "../assets/design.webp"

const cert = [
  {
    title: "Advance React Certification by Meta",
    img: advancereact,
    link: "https://www.coursera.org/account/accomplishments/verify/35WJ4KFNVW6V",
  },
  {
    title: "Principles of UI/UX Design Certification by Meta",
    img: design,
    link: "https://www.coursera.org/account/accomplishments/verify/SBF6DYVGX74A",
  },
  {
    title: "React Basic Certification by Meta",
    img: ReactBasic,
    link: "https://www.coursera.org/account/accomplishments/verify/CSHRZTD0JZEF",
  },
  {
    title: "HTML & CSS in Depth by Meta",
    img: htmlcss,
    link: "https://www.coursera.org/account/accomplishments/verify/JLHAMK0WR6IU",
  },
  {
    title: "Version Control by Meta",
    img: versioncontrol,
    link: "https://www.coursera.org/account/accomplishments/verify/3S78D2B082FH",
  },
  {
    title: "Javascript Foundations Professional Certificate by Mozilla",
    img: jsfoundationsmozila,
    link: "https://www.linkedin.com/learning/certificates/dcbf0c7be0b07d2b0c0d63807bd77f63e48873796c09da13ccf42fe90bc58608?trk=share_certificate",
  },
  {
    title: "CSS fro Programmers by Linkedin",
    img: cssforprogrammers,
    link: "https://www.linkedin.com/learning/certificates/cf7e5eda812bc67f57b78cd1df36d773dc21552310511bdf3e364cabc5075961?trk=share_certificate",
  },
  {
    title: "Git Essential Training by Linkedin",
    img: gitessetialtraining,
    link: "https://www.linkedin.com/learning/certificates/f0ef8f0bfe573bac06d215f9894a1f42d39502ff7aa0690fdca135a138ba9af9",
  },
];

function Certifications() {
  return (
    <>
      <section className="bg-darkBg min-h-screen text-center justify-center items-center">
        <div className="py-16 ">
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Certifications
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3  md:gap-5 mx-auto md:px-4 h-full max-w-7xl ">
            {cert.map((item, index) => (
              <div
                key={index}
                className="p-4 md:p-6 py-10  justify-center items-center"
              >
                <img
                  src={item.img}
                  alt={`${item.title} - certificate image`}
                  className="w-full h-full object-contain mx-auto -mt-4 z-[50]"
                  loading="lazy"
                />
                <a
                  href={item.link}
                  aria-label={`Verify ${item.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white text-center py-3 -mt-4 rounded-b-3xl w-full block hover:bg-[#F0B118] transition-all duration-200 ease-in-out"
                >
                  <p className="pt-1 text-lg font-bold">Verify</p>
                </a>

                {/* <h2 className="text-white text-center text-xl">{item.title}</h2> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Certifications;

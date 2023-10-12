import { BiMenuAltLeft, BiCaretRight, BiFilterAlt } from "react-icons/bi";

export default function HomePage() {
  return (
    <div className="h-screen w-screen bg-base-100 overflow-y-auto font-my-font">
      {/* navbar starts from here */}
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col justify-center items-center">
          {/* Page content here */}
          <div className="navbar">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-ghost drawer-button lg:hidden"
            >
              <BiMenuAltLeft className="text-2xl" />
            </label>
            {/* header and navigation */}
            <div className="flex flex-row justify-between items-center w-full">
              <a className="btn btn-ghost normal-case text-2xl font-my-font-bold">
                Talent Protocol
              </a>
            </div>
          </div>
          {/* cards comp begins here */}
          <div className="h-full w-full  p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="card card-compact max-w-96 h-96 m-4 bg-base-100 shadow-xl">
              <figure>
                <img src="nike.jpeg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Nike</h2>
                <p>Position eg Software Developer</p>

                <div className="card-actions justify-end">
                  <button
                    className="btn btn-accent"
                    onClick={() => {
                      const dialog = document.getElementById(
                        "my_modal_5"
                      ) as HTMLDialogElement;
                      dialog?.showModal();
                    }}
                  >
                    View Details
                  </button>
                  <button className="btn btn-primary">Assessment</button>
                </div>
              </div>
            </div>
            <div className="card card-compact max-w-96 h-96 m-4 bg-base-100 shadow-xl">
              <figure>
                <img src="facebook.webp" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact max-w-96 h-96 m-4 bg-base-100 shadow-xl">
              <figure>
                <img src="apple.jpeg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact max-w-96 h-96 m-4 bg-base-100 shadow-xl">
              <figure>
                <img src="microsoft.png" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>

          {/* Open the modal using document.getElementById('ID').showModal() method */}

          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Nike</h3>
              <p className="py-4">
                <ul>
                  <li className="text-xl font-bold">Requiments:</li>
                  <p>
                    Bachelor's degree in Computer Science, Software Engineering,
                    or related field (or equivalent work experience). Proven
                    experience as a Software Developer, Software Engineer, or
                    similar role. Strong proficiency in one or more programming
                    languages (e.g., Java, Python, C++, JavaScript). Experience
                    with software development methodologies and practices
                    (Agile, Scrum, version control, code review). Familiarity
                    with database systems (SQL, NoSQL) and web application
                    development. Knowledge of software testing and debugging
                    techniques. Excellent problem-solving skills and attention
                    to detail. Strong communication and interpersonal skills.
                    Ability to work collaboratively in a team environment.
                    Willingness to learn and adapt to new technologies and
                    programming languages.
                  </p>
                </ul>
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-100 h-full w-72 md:w-80 p-6">
            <li className="">
              <a className="flex flex-row justify-between items-center">
                Applied Jobs <BiCaretRight className="text-lg" />
              </a>
            </li>
            <li>
              <a className="flex flex-row justify-between items-center">
                Saved Jobs <BiCaretRight className="text-lg" />
              </a>
            </li>
            <li>
              <a className="flex flex-row justify-between items-center">
                Filters <BiFilterAlt className="text-lg" />
              </a>
              <ul>
                <li>
                  <a>Software Developer</a>
                </li>
                <li>
                  <a>Front End Developer</a>
                </li>
                <li>
                  <a>Back End Developer</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

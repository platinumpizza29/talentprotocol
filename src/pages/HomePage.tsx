import { BiMenuAltLeft } from "react-icons/bi";

export default function HomePage() {
  return (
    <div className="h-screen w-screen bg-base-100 overflow-y-auto">
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
              <a className="btn btn-ghost normal-case text-2xl">
                TalentProtocol
              </a>
              <div className="">
                <button className="btn btn-outline btn-accent mr-2">
                  Applied Jobs
                </button>
                <button className="btn btn-outline btn-accent">
                  Saved Jobs
                </button>
              </div>
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
              <h3 className="font-bold text-lg">Company Name goes here!</h3>
              <p className="py-4">Details about the position goes here</p>
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
          <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

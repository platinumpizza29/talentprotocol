export default function TableComp() {
  return (
    <div className="overflow-x-auto h-full w-full">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Company Name</th>
            <th>Position</th>
            <th>Status</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Under AI Evaluation</td>
            <td>
              <progress
                className="progress progress-secondary w-56"
                value="70"
                max="100"
              ></progress>
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Active</td>
            <td>
              <progress
                className="progress progress-secondary w-56"
                value="30"
                max="100"
              ></progress>
            </td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Open</td>
            <td>
              <progress
                className="progress progress-secondary w-56"
                value="20"
                max="100"
              ></progress>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

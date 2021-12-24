import React from "react";

const Payments = () => {
  return (
    <div className="font-nunito flex justify-center items-center mt-20 mobile:mt-10 overflow-hidden">
      <div>
        <p className="text-2xl font-semibold text-center my-10">
          Latest Transactions
        </p>
        <div className="border rounded-lg p-2">
          <table className="table">
            <thead>
              <tr>
                <th className="text-2xl p-2 font-semibold">Customer</th>
                <th className="text-2xl p-2 font-semibold">Date</th>
                <th className="text-2xl p-2 font-semibold">Amount</th>
                <th className="text-2xl p-2 font-semibold">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-squircle">
                        <img
                          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold"> Yancy Tear</div>
                      <div className="text-sm opacity-50">Indonesia</div>
                    </div>
                  </div>
                </td>
                <td>
                  <th className="font-normal">15/12/2021</th>
                </td>
                <td>
                  <th className="font-normal">$112.00</th>
                </td>
                <td>
                  <th>
                    <p className="font-medium bg-red-400 p-1 rounded-lg text-white">
                      Rejected
                    </p>
                  </th>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-squircle">
                        <img
                          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold"> Andy Tipple</div>
                      <div className="text-sm opacity-50">Poland</div>
                    </div>
                  </div>
                </td>
                <td>
                  <th className="font-normal">08/08/2021</th>
                </td>
                <td>
                  <th className="font-normal">$92.00</th>
                </td>
                <td>
                  <th>
                    <p className="font-medium bg-green-400 p-1 rounded-lg text-white">
                      Approved
                    </p>
                  </th>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-squircle">
                        <img
                          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Maribeth Popping</div>
                      <div className="text-sm opacity-50">Portugal</div>
                    </div>
                  </div>
                </td>
                <td>
                  <th className="font-normal">21/11/2021</th>
                </td>
                <td>
                  <th className="font-normal">$128.00</th>
                </td>
                <td>
                  <th>
                    <p className="font-medium bg-blue-400 p-1 rounded-lg text-white">
                      Pending
                    </p>
                  </th>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-squircle">
                        <img
                          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Ramesh Gupta</div>
                      <div className="text-sm opacity-50">India</div>
                    </div>
                  </div>
                </td>
                <td>
                  <th className="font-normal">12/11/2021</th>
                </td>
                <td>
                  <th className="font-normal">$150.00</th>
                </td>
                <td>
                  <th>
                    <p className="font-medium bg-green-400 p-1 rounded-lg text-white">
                      Approved
                    </p>
                  </th>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payments;

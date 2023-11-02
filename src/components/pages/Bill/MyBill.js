import React from "react";
import './MyBill.css';
export default function MyBill() {
  return (
    <>
    <div id="bodywrap">
    <div className="row">
    <div className="large-10 columns">
      <div className="scroll-window-wrapper">
        <h2>
          Fixed Table Header Demo
          <br />
          <small>A Scrollable table with a fixed header</small>
        </h2>
        <div className="scroll-window">
          <table className="table table-striped table-hover user-list fixed-header">
            <thead>
              <tr>
                <th>
                  <div>Name</div>
                </th>
                <th>
                  <div>Email</div>
                </th>
                <th>
                  <div>Status</div>
                </th>
                <th>
                  <div />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Michael Jones</td>
                <td>michael@gmail.com</td>
                <td>active</td>
                <td className="text-right">
                  <button className="button tiny">View User</button>
                  <button className="button alert tiny">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Michael Jones</td>
                <td>michael@gmail.com</td>
                <td>active</td>
                <td className="text-right">
                  <button className="button tiny">View User</button>
                  <button className="button alert tiny">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Michael Jones</td>
                <td>michael@gmail.com</td>
                <td>active</td>
                <td className="text-right">
                  <button className="button tiny">View User</button>
                  <button className="button alert tiny">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Michael Jones</td>
                <td>michael@gmail.com</td>
                <td>active</td>
                <td className="text-right">
                  <button className="button tiny">View User</button>
                  <button className="button alert tiny">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Michael Jones</td>
                <td>michael@gmail.com</td>
                <td>active</td>
                <td className="text-right">
                  <button className="button tiny">View User</button>
                  <button className="button alert tiny">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Michael Jones</td>
                <td>michael@gmail.com</td>
                <td>active</td>
                <td className="text-right">
                  <button className="button tiny">View User</button>
                  <button className="button alert tiny">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Michael Jones</td>
                <td>michael@gmail.com</td>
                <td>active</td>
                <td className="text-right">
                  <button className="button tiny">View User</button>
                  <button className="button alert tiny">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Michael Jones</td>
                <td>michael@gmail.com</td>
                <td>active</td>
                <td className="text-right">
                  <button className="button tiny">View User</button>
                  <button className="button alert tiny">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Michael Jones</td>
                <td>michael@gmail.com</td>
                <td>active</td>
                <td className="text-right">
                  <button className="button tiny">View User</button>
                  <button className="button alert tiny">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
